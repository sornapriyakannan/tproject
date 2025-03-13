const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./model/User.js");

dotenv.config(); // Ensure dotenv is loaded before using env variables


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Mongodb connected"))
.catch(err => console.error(err));

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body; 
    console.log("Received data");
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        console.log("user added to the db",newUser);

        res.status(201).json({ message: "User Registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

app.post("/login", async (req, res) => {
  try {
      const { email, password } = req.body;
      if (!email || !password) {
          return res.status(400).json({ message: "All fields are required." });
      }

      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(401).json({ message: "Invalid Email or Password" });
      }

      // Verify password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(401).json({ message: "Invalid Email or Password" });
      }

      // Determine user role based on email domain
      let role;
      if (email.endsWith("@admin.com")) {
          role = "admin";
      } else if (email.endsWith("@manager.com")) {
          role = "manager";
      } else if (email.endsWith("@gmail.com")) {
          role = "employee";
      } else {
          return res.status(403).json({ message: "Unauthorized email domain." });
      }

      // Generate JWT token
      const token = jwt.sign({ id: user._id, role }, "secretKey", { expiresIn: "1h" });

      res.status(200).json({ token, role, message: "Logged in successfully" });

  } catch (error) {
      console.error("Login Error:", error.message);
      res.status(500).json({ message: "Internal Server Error" });
  }
});


  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
