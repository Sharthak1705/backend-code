import express from "express";
import Profile from "../models/profile.js";

const router = express.Router();

// Health check
router.get("/health", (req, res) => res.json({ status: "OK" }));

//  Create profile
router.post("/", async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(200).json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//  Get all profiles
router.get("/", async (req, res) => {
  const profiles = await Profile.find();
  res.json(profiles);
});

// Update profile
router.put("/:id", async (req, res) => {
  const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(profile);
});

// Query projects by skill
router.get("/projects", async (req, res) => {
  const { skill } = req.query;
  const profiles = await Profile.find({ skills: skill });
  let projects = profiles.flatMap((p) => p.projects);
  res.json(projects);
});

//  Get top skills
router.get("/skills/top", async (req, res) => {
  const profiles = await Profile.find();
  let skills = {};
  profiles.forEach((p) => {
    p.skills.forEach((s) => (skills[s] = (skills[s] || 0) + 1));
  });
  res.json(skills);
});

// Search endpoint
router.get("/search", async (req, res) => {
  const { q } = req.query;
  const profiles = await Profile.find({
    $or: [
      { name: { $regex: q, $options: "i" } },
      { skills: { $regex: q, $options: "i" } },
      { "projects.title": { $regex: q, $options: "i" } },
    ],
  });
  res.json(profiles);
});

export default router;
