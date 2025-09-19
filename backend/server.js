const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ================= DB CONNECTION =================
mongoose
  .connect("mongodb://127.0.0.1:27017/uber", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// ================= SCHEMAS =================

// Ride Booking Schema
const rideSchema = new mongoose.Schema({
  pickup: String,
  dropoff: String,
  date: String,
  car: String,
  seats: String,
  price: String,
  userName: String,
});

// Captain Schema
const captainSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  password: String,
});

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  password: String,
});

// ================= MODELS =================
const RideModel = mongoose.model("Ride", rideSchema);
const CaptainModel = mongoose.model("Captain", captainSchema);
const UserModel = mongoose.model("User", userSchema);

// ================= ROUTES =================

// Captain Signup
app.post("/signup-captain", async (req, res) => {
  const { name, phone, email, password } = req.body;
  try {
    const newCaptain = new CaptainModel({ name, phone, email, password });
    await newCaptain.save();
    res.status(201).json({ message: "Captain registered successfully" });
  } catch (err) {
    console.error("Signup Captain Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Captain Login
app.post("/login-captain", async (req, res) => {
  const { email, password } = req.body;
  try {
    const captain = await CaptainModel.findOne({ email, password });
    if (captain) {
      res.status(200).json({ message: "Captain logged in successfully" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.error("Login Captain Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// User Signup
app.post("/signup-user", async (req, res) => {
  const { name, phone, email, password } = req.body;
  try {
    const newUser = new UserModel({ name, phone, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup User Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// User Login
// app.post("/login-user", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await UserModel.findOne({ email, password });
//     if (user) {
//       res.status(200).json({ message: "User logged in successfully" });
//     } else {
//       res.status(401).json({ message: "Invalid email or password" });
//     }
//   } catch (err) {
//     console.error("Login User Error:", err);
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// });

// User Login
app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email, password });
    if (user) {
      res.status(200).json({
        message: "User logged in successfully",
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone,
        },
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.error("Login User Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


// Book Ride
app.post("/bookRide", async (req, res) => {
  const { pickup, dropoff, date, car, seats, price, userName } = req.body;
  try {
    const newRide = new RideModel({ pickup, dropoff, date, car, seats, price, userName });
    await newRide.save();
    res.status(201).json({ message: "Ride booked successfully" });
  } catch (err) {
    console.error("Book Ride Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ================= START SERVER =================
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
