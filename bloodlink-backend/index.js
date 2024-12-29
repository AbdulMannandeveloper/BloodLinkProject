import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./models/user.js";
import Request from "./models/request.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.BLOODLINK_MONGODB_URI, {});

app.post("/SignUp", async (req, res) => {
  const {
    email,
    phone,
    name,
    cnic,
    password,
    confirmPassword,
    bloodGroup,
    address,
    city,
  } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedConfirmPassword = await bcrypt.hash(confirmPassword, 10);
    const user = await User.create({
      email,
      phone,
      name,
      cnic,
      password: hashedPassword,
      confirmPassword: hashedConfirmPassword,
      bloodGroup,
      address,
      city,
    });
    console.log(user);
    await user.save();
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/Login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post("/Request", async (req, res) => {
  const {
    title,
   // username,
    date,
    description,
    bloodGroup,
    hospitalName,
    city,
    pintsRequired,
 //   caselocked,
  } = req.body;
  try {
    const request = await Request.create({
      title,
   //   username,
      date,
      description,
      bloodGroup,
      hospitalName,
      city,
      pintsRequired,
//      caselocked,
    });
    console.log(request);
    await request.save();
    res.status(201).json({ request });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.get("/Requests", async (req, res) => {
  try {
    const requests = await Request.find();
    res.status(200).json({ requests });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get("/Requests/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const requests = await Request.find({ username: userId });
    if (!requests.length) {
      return res.status(404).json({ error: "No requests found for this user" });
    }
    res.status(200).json({ requests });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.put("/Requests/:userId", async (req, res) => {
  const { id } = req.params;
  const { pintsRequired } = req.body;
  try {
    const request = await Request.findByIdAndUpdate(
      id,
      { pintsRequired },
      { new: true }
    );
    if (!request) {
      return res.status(404).json({ error: "Request not found" });
    }
    res.status(200).json({ request });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.put("/Requests/:userId", async (req, res) => {
  const { id } = req.params;
  const { caselocked } = req.body;
  try {
    const request = await Request.findByIdAndUpdate(
      id,
      { caselocked },
      { new: true }
    );
    if (!request) {
      return res.status(404).json({ error: "Request not found" });
    }
    res.status(200).json({ request });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.listen(process.env.BLOODLINK_BACKEND_PORT, () => {
  console.log(
    `Server is running on port ${process.env.BLOODLINK_BACKEND_PORT}`
  );
});
