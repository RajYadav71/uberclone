const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/uber", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log("❌ DB Error:", err));

// schema & model
const captainSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  vehicleNumber: String
});

const Captain = mongoose.model("Captain", captainSchema);

// signup API
app.post("/api/signup", async (req, res) => {
  try {
    const newCaptain = new Captain(req.body);
    await newCaptain.save();
    res.json({ message: "Captain signed up successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving data" });
  }
});

// start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
