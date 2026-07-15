# AMET Incubation Centre - Web Platform

An end-to-end web platform designed for the AMET University Technology Business Incubator. The platform serves as a central hub for students, startup founders, mentors, and administrators to connect, apply for incubation, manage events, and track progress.

---

## 🚀 Project Overview

The AMET Incubation platform is a modern Single Page Application (SPA) built with React and Vite. It provides role-based access control and customized dashboard experiences for different types of users. 

**Key Features:**
- **Dynamic Role-Based Dashboards**: Unique views for Students, Startups, Mentors, and Admins.
- **Hackathon Registration**: Real-time event registration with EmailJS confirmation integration.
- **Incubation Application**: A robust, multi-step application form for startups seeking funding and mentorship.
- **Modern UI/UX**: Premium aesthetic featuring glassmorphism, gradient overlays, responsive layouts, and interactive micro-animations.

---

## 🏗️ Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Pure Vanilla CSS (No CSS frameworks, customized modern design system)
- **Routing**: React Router DOM (`react-router-dom`)
- **Icons**: Lucide React (`lucide-react`)
- **Email Integration**: EmailJS (`@emailjs/browser`)

---

## 📐 System Architecture

### 1. Component Architecture
The application follows a modular component-based architecture:
- **`App.tsx`**: The root component handling all routing.
- **`components/layout`**: Contains globally shared UI elements (`Navbar`, `Footer`).
- **`pages/`**: Contains distinct route-level components (e.g., `Home`, `Dashboard`, `Apply`, `Events`).

### 2. State Management
State is managed using React's built-in hooks (`useState`, `useEffect`).
- **Authentication State**: Simulated via `localStorage`. When a user signs up or logs in, their `role` (student, startup, mentor, admin) is saved locally.
- **Form State**: Managed locally within components (e.g., multi-step tracking in `Apply.tsx`).

### 3. Routing Map
| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home.tsx` | Landing page with video hero and stats |
| `/about` | `About.tsx` | Information about the incubator |
| `/programs` | `Programs.tsx` | Incubation program details |
| `/portfolio` | `Portfolio.tsx` | Showcasing funded startups |
| `/events` | `Events.tsx` | Upcoming hackathons and workshops |
| `/news` | `News.tsx` | Blog and announcements |
| `/contact` | `Contact.tsx` | Contact info and messaging form |
| `/signup` | `Signup.tsx` | Registration with role selection |
| `/login` | `Login.tsx` | User login gateway |
| `/dashboard` | `Dashboard.tsx` | Role-conditional dashboard view |
| `/apply` | `Apply.tsx` | 3-step startup incubation application |
| `/register/hackathon/:id`| `HackathonRegister.tsx` | Dynamic event registration with email |

---

## 🚶 User Flows

### 1. Student Journey
`Home -> Events -> Hackathon Register -> Confirmation`
- Students browse the site for learning opportunities.
- They navigate to the **Events** page, view upcoming hackathons, and click "Register Now."
- They fill out a multi-input form which dynamically sends a confirmation email upon success.
- Students can also register an account to view a specialized **Student Dashboard** with their track record.

### 2. Startup Founder Journey
`Home -> Programs -> Apply (Multi-step) -> Dashboard`
- Founders learn about incubation programs and click **Apply**.
- They complete a 3-step application (Personal Details -> Startup Info -> Pitch Deck Upload).
- Founders log into their **Startup Dashboard** to track application status, view allocated funding, and access lab resources.

### 3. Mentor Journey
`Home -> Signup -> Mentor Dashboard`
- Industry experts sign up as mentors.
- Their **Mentor Dashboard** lists assigned startups, upcoming advisory meetings, and areas of expertise.

### 4. Admin Journey
`Login -> Admin Dashboard`
- Administrators log in to oversee the entire platform.
- The **Admin Dashboard** provides metrics, recent applications to approve/reject, and system alerts.

---

## 📂 Folder Structure

```text
src/
├── assets/             # Static images and icons
├── components/
│   └── layout/         # Navbar.tsx, Footer.tsx and their CSS
├── pages/              # Route components
│   ├── Apply.tsx       # 3-step incubation form
│   ├── Dashboard.tsx   # Role-conditional dashboard
│   ├── Events.tsx      # Hackathons list
│   ├── HackathonRegister.tsx # EmailJS integrated registration
│   ├── Home.tsx        # Video hero landing page
│   └── ... (Other pages)
├── App.tsx             # Main router configuration
├── index.css           # Global design system variables and utility classes
└── main.tsx            # React application entry point
```

---

## 🛠️ Setup & Installation

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/aaf-codes/website-pagesss.git
   cd "website-pagesss"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS (For Hackathon Registration)**
   - Open `src/pages/HackathonRegister.tsx`.
   - Replace `'YOUR_SERVICE_ID'`, `'YOUR_TEMPLATE_ID'`, and `'YOUR_PUBLIC_KEY'` with your actual credentials from [EmailJS](https://www.emailjs.com/).
   - Remove the `setTimeout` mock block in the `.catch()` to enable real success handling.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

---

*Designed & Developed for AMET University Incubation Centre.*