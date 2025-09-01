# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.










# Backend

This is the backend of the **Backend** application built using **Node.js, Express, and MongoDB**.  
It provides APIs for handling **Projects, skills and **.

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone  <>
cd backend

Install dependencies
npm install


Setup environment Variable
PORT=5000
MONGO_URI=your-mongodb-connection-string


Start the server
npm run dev


| Method   | Endpoint                        | Description                               |
| -------- | ------------------------------- | ----------------------------------------- |
| **GET**  | `/profile/health`               | Check API status (`{ status: "OK" }`)     |
| **POST** | `/profile/`                     | Create a new profile                      |
| **GET**  | `/profile/`                     | Get all profiles                          |
| **PUT**  | `/profile/:id`                  | Update a profile by ID                    |
| **GET**  | `/profile/projects?skill=React` | Get projects filtered by skill            |
| **GET**  | `/profile/skills/top`           | Get top skills with usage count           |
| **GET**  | `/profile/search?q=Java`        | Search profiles by name / skill / project |



Create a profile

POST http://localhost:5000/profile

Response:
    {
        "links": {
            "github": "https://github.com/Sharthak1705",
            "linkedin": "http://www.linkedin.com/in/sharthak-jain-b03442225/",
            "portfolio": "http://sharthakjainportfolio.vercel.app/"
        },
        "name": "Sharthak Jain",
        "email": "sharthak1@gmail.com",
        "education": "B.Tech in Computer Science & Engineering",
        "skills": [
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "Python"
        ],
        "projects": [
            {
                "title": "AI Article Summarizer – URL to Summary Converter",
                "description": "A url to article convert application using RAPID API, React, Tailwind and Node.js",
                "links": [
                    "https://github.com/Sharthak1705/Summarize-API"
                ]
            },
            {
                "title": "Movix – Real-time Movie Application ",
                "description": "Movie browsing app using IMDb API",
                "links": [
                    "https://github.com/Sharthak1705/cinema"
                ]
            },
            {
                "title": " Bynocs Application",
                "description": "This is my live project where i learn CMS to create the form data ",
                "links": [
                    "https://bynocs.com"
                ]
            }
        ],
        "work": [
            "Web Developer Intern at Learn Fussion",
            "Frontend Developer Intern at GeeksforGeeks",
            "Mern stack Developer Intern at IMG Global Infotech PVT Ltd"
        ]
    }



Get all profiles

GET http://localhost:5000/profile

Response:
[
    {
        "links": {
            "github": "https://github.com/Sharthak1705",
            "linkedin": "http://www.linkedin.com/in/sharthak-jain-b03442225/",
            "portfolio": "http://sharthakjainportfolio.vercel.app/"
        },
        "_id": "68b50a3db34b37f3cc07734a",
        "name": "Sharthak Jain",
        "email": "sharthakjain1@gmail.com",
        "education": "B.Tech in Computer Science & Engineering",
        "skills": [
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "Socket.IO"
        ],
        "projects": [
            {
                "title": "AI Article Summarizer – URL to Summary Converter",
                "description": "A url to article convert application using RAPID API, React, Tailwind and Node.js",
                "links": [
                    "https://github.com/Sharthak1705/Summarize-API"
                ],
                "_id": "68b50a3db34b37f3cc07734b"
            },
            {
                "title": "Movix – Real-time Movie Application ",
                "description": "Movie browsing app using IMDb API",
                "links": [
                    "https://github.com/Sharthak1705/cinema"
                ],
                "_id": "68b50a3db34b37f3cc07734c"
            }
        ],
        "work": [
            "Web Developer Intern at Learn Fussion",
            "Frontend Developer Intern at GeeksforGeeks",
            "Mern stack Developer Intern at IMG Global Infotech PVT Ltd"
        ],
        "__v": 0
    }
]



. Update profile

PUT http://localhost:5000/profile/68b52abd352fd889a086b568
Body:

    {
        "links": {
            "github": "https://github.com/Sharthak1705",
            "linkedin": "http://www.linkedin.com/in/sharthak-jain-b03442225/",
            "portfolio": "http://sharthakjainportfolio.vercel.app/"
        },
        "name": "Sharthak ",
        "email": "sharthak1@gmail.com",
        "education": "B.Tech in Computer Science & Engineering",
        "skills": [
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "Socket.IO"
        ],
        "projects": [
            {
                "title": "AI Article Summarizer – URL to Summary Converter",
                "description": "A url to article convert application using RAPID API, React, Tailwind and Node.js",
                "links": [
                    "https://github.com/Sharthak1705/Summarize-API"
                ]
            },
            {
                "title": "Movix – Real-time Movie Application ",
                "description": "Movie browsing app using IMDb API",
                "links": [
                    "https://github.com/Sharthak1705/cinema"
                ]
            }
        ],
        "work": [
            "Web Developer Intern at Learn Fussion",
            "Frontend Developer Intern at GeeksforGeeks",
            "Mern stack Developer Intern at IMG Global Infotech PVT Ltd"
        ]
    }



Get projects by skill

GET http://localhost:5000/profile/projects?skill=React

Response:
[
    {
        "title": "AI Article Summarizer – URL to Summary Converter",
        "description": "A url to article convert application using RAPID API, React, Tailwind and Node.js",
        "links": [
            "https://github.com/Sharthak1705/Summarize-API"
        ],
        "_id": "68b53035fc64aee41682ed35"
    },
    {
        "title": "Movix – Real-time Movie Application ",
        "description": "Movie browsing app using IMDb API",
        "links": [
            "https://github.com/Sharthak1705/cinema"
        ],
        "_id": "68b53035fc64aee41682ed36"
    }
]


Get skill and top

GET http://localhost:5000/profile/skills/top

Response:

{
    "JavaScript": 3,
    "React": 3,
    "Node.js": 3,
    "MongoDB": 3,
    "Socket.IO": 1,
    "Python": 2
}

Get profile by Search

GET http://localhost:5000/profile/search?q=Sharthak%20Jain

[
    {
        "links": {
            "github": "https://github.com/Sharthak1705",
            "linkedin": "http://www.linkedin.com/in/sharthak-jain-b03442225/",
            "portfolio": "http://sharthakjainportfolio.vercel.app/"
        },
        "_id": "68b50a3db34b37f3cc07734a",
        "name": "Sharthak Jain",
        "email": "sharthakjain1@gmail.com",
        "education": "B.Tech in Computer Science & Engineering",
        "skills": [
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "Socket.IO"
        ],
        "projects": [
            {
                "title": "AI Article Summarizer – URL to Summary Converter",
                "description": "A url to article convert application using RAPID API, React, Tailwind and Node.js",
                "links": [
                    "https://github.com/Sharthak1705/Summarize-API"
                ],
                "_id": "68b50a3db34b37f3cc07734b"
            },
            {
                "title": "Movix – Real-time Movie Application ",
                "description": "Movie browsing app using IMDb API",
                "links": [
                    "https://github.com/Sharthak1705/cinema"
                ],
                "_id": "68b50a3db34b37f3cc07734c"
            }
        ],
        "work": [
            "Web Developer Intern at Learn Fussion",
            "Frontend Developer Intern at GeeksforGeeks",
            "Mern stack Developer Intern at IMG Global Infotech PVT Ltd"
        ],
        "__v": 0
    },
    {
        "links": {
            "github": "https://github.com/Sharthak1705",
            "linkedin": "http://www.linkedin.com/in/sharthak-jain-b03442225/",
            "portfolio": "http://sharthakjainportfolio.vercel.app/"
        },
        "_id": "68b5282f6e12fbcfa69a446f",
        "name": "Sharthak Jain",
        "email": "sharthak1@gmail.com",
        "education": "B.Tech in Computer Science & Engineering",
        "skills": [
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "Python"
        ],
        "projects": [
            {
                "title": "AI Article Summarizer – URL to Summary Converter",
                "description": "A url to article convert application using RAPID API, React, Tailwind and Node.js",
                "links": [
                    "https://github.com/Sharthak1705/Summarize-API"
                ],
                "_id": "68b5282f6e12fbcfa69a4470"
            },
            {
                "title": "Movix – Real-time Movie Application ",
                "description": "Movie browsing app using IMDb API",
                "links": [
                    "https://github.com/Sharthak1705/cinema"
                ],
                "_id": "68b5282f6e12fbcfa69a4471"
            }
        ],
        "work": [
            "Web Developer Intern at Learn Fussion",
            "Frontend Developer Intern at GeeksforGeeks",
            "Mern stack Developer Intern at IMG Global Infotech PVT Ltd"
        ],
        "__v": 0
    },
    {
        "links": {
            "github": "https://github.com/Sharthak1705",
            "linkedin": "http://www.linkedin.com/in/sharthak-jain-b03442225/",
            "portfolio": "http://sharthakjainportfolio.vercel.app/"
        },
        "_id": "68b528966e12fbcfa69a4476",
        "name": "Sharthak Jain",
        "email": "sharthak1@gmail.com",
        "education": "B.Tech in Computer Science & Engineering",
        "skills": [
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "Python"
        ],
        "projects": [
            {
                "title": "AI Article Summarizer – URL to Summary Converter",
                "description": "A url to article convert application using RAPID API, React, Tailwind and Node.js",
                "links": [
                    "https://github.com/Sharthak1705/Summarize-API"
                ],
                "_id": "68b528966e12fbcfa69a4477"
            },
            {
                "title": "Movix – Real-time Movie Application ",
                "description": "Movie browsing app using IMDb API",
                "links": [
                    "https://github.com/Sharthak1705/cinema"
                ],
                "_id": "68b528966e12fbcfa69a4478"
            },
            {
                "title": " Bynocs Application",
                "description": "This is my live project where i learn CMS to create the form data ",
                "links": [
                    "https://bynocs.com"
                ],
                "_id": "68b528966e12fbcfa69a4479"
            }
        ],
        "work": [
            "Web Developer Intern at Learn Fussion",
            "Frontend Developer Intern at GeeksforGeeks",
            "Mern stack Developer Intern at IMG Global Infotech PVT Ltd"
        ],
      }
]




Postman Collection Link: https://grey-equinox-363600.postman.co/workspace/chat-app-tut~b591fb48-81b6-43ec-b1d8-7c4ecb0a0ca4/collection/33342479-94480f8d-5d38-4495-aca0-991bc772ef1b?action=share&source=copy-link&creator=33342479

Resume Link: https://drive.google.com/file/d/1jx4E4bCtHMwbRYhScOpUi7FqxX9IBmqj/view?usp=drive_link