import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [query, setQuery] = useState("");
  const [skills, setSkills] = useState({});
  const [projects, setProjects] = useState([]);

  const API_URL = "http://localhost:5000/profile";

  // Fetch all profiles
  useEffect(() => {
    axios.get(API_URL).then((res) => setProfiles(res.data));
  }, []);

  // Search
  const handleSearch = async () => {
    const res = await axios.get(`${API_URL}/search?q=${query}`);
    setProfiles(res.data);
  };

  // Get top skills
  const fetchSkills = async () => {
    const res = await axios.get(`${API_URL}/skills/top`);
    setSkills(res.data);
  };

  // Get projects by skill
  const fetchProjects = async (skill) => {
    const res = await axios.get(`${API_URL}/projects?skill=${skill}`);
    setProjects(res.data);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        🚀 My API Playground
      </h1>

      {/* Search */}
      <div className="flex justify-center items-center gap-2 mb-10">
        <input
          type="text"
          placeholder="Search by name / skill / project..."
          className="w-80 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-5 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition"
        >
          Search
        </button>
      </div>

      {/* Profiles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">👤 Profiles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((p) => (
            <div
              key={p._id}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-indigo-600">{p.name}</h3>
              <p className="text-gray-500">{p.email}</p>
              <p className="mt-2">
                <span className="font-medium text-gray-700">Skills:</span>{" "}
                {p.skills.map((s, i) => (
                  <span
                    key={i}
                    className="inline-block bg-indigo-100 text-indigo-600 text-sm px-2 py-1 rounded-full mr-2 mt-1"
                  >
                    {s}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Skills */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">🔥 Top Skills</h2>
          <button
            onClick={fetchSkills}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          >
            Load Skills
          </button>
        </div>
        <ul className="space-y-3">
          {Object.entries(skills).map(([skill, count]) => (
            <li
              key={skill}
              className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <span className="font-medium text-gray-700">
                {skill} ({count})
              </span>
              <button
                onClick={() => fetchProjects(skill)}
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
              >
                View Projects
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📂 Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-indigo-600">{proj.title}</h3>
              <p className="text-gray-600 mt-2">{proj.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
