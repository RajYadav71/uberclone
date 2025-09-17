const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/uber", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log("❌ DB Error:", err));


const userSchema = new mongoose.Schema({
    pickup: String,
    dropoff: String,
    date: String,
    car: String,
    seats:String,
    price: String,
})

const capSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  password: String,
});

const usersSchema  = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  password: String,
});

const capModel = mongoose.model("Captain", capSchema);
const usersSchemaModel = mongoose.model("Users", usersSchema);



app.post("/signup-captain", async (req, res) => {
  const { name, phone, email, password } = req.body;
  try {
    const newCap = new capModel({ name, phone, email, password });
    await newCap.save();
    res.status(201).json({ message: "Captain registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/signup-user", async (req, res) => {
  const { name, phone, email, password } = req.body;
  try {
    const newUser = new usersSchemaModel({ name, phone, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});




const User = mongoose.model('User', userSchema);

app.post("/bookRide",async (req, res) => {
    const { pickup, dropoff, date, car, seats, price } = req.body;
    try {
        const newUser = new User({ pickup, dropoff, date, car, seats, price });
        await newUser.save();
        res.status(201).json({ message: "Ride booked successfully" });
    }
    catch (err) {
        res.status(500).json({ message: "Server error" });
    };
})

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
