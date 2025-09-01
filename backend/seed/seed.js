import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Profile from "../models/profile.js";

dotenv.config();
connectDB();

const seedProfile = async () => {
  try {
    await Profile.deleteMany();

    const myProfile = new Profile({
      name: "Sharthak Jain",
      email: "sharthakjain1@gmail.com",
      education: "B.Tech in Computer Science & Engineering",
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "Socket.IO"],
      projects: [
        {
          title: "AI Article Summarizer – URL to Summary Converter",
          description: "A url to article convert application using RAPID API, React, Tailwind and Node.js",
          links: ["https://github.com/Sharthak1705/Summarize-API"],
        },
        {
          title: "Movix – Real-time Movie Application ",
          description: "Movie browsing app using IMDb API",
          links: ["https://github.com/Sharthak1705/cinema"],
        },
      ],
      work: ["Web Developer Intern at Learn Fussion", 
        "Frontend Developer Intern at GeeksforGeeks",
        "Mern stack Developer Intern at IMG Global Infotech PVT Ltd"
    ],
      links: {
        github: "https://github.com/Sharthak1705",
        linkedin: "http://www.linkedin.com/in/sharthak-jain-b03442225/",
        portfolio: "http://sharthakjainportfolio.vercel.app/",
      },
    });

    await myProfile.save();
    console.log("Profile seeded successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedProfile();
