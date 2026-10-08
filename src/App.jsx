import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import Footer from "./components/Footer";

function App() {
  const [practiceCount, setPracticeCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  const student = {
    name: "Anu",
    department: "CSE",
    year: "3rd Year",
  };

  const completePractice = () => {
    setPracticeCount((previousCount) => previousCount + 1);
  };

  const resetPractice = () => {
    setPracticeCount(0);
  };

  const toggleProfile = () => {
    setShowProfile((previousState) => !previousState);
  };

  return (
    <div className="app">
      <Header />

      <main>
        <div className="page-title">
          <h2>Student Practice Tracker</h2>
          <p>Track and manage your daily practice sessions</p>
        </div>

        {showProfile && (
          <StudentProfile
            name={student.name}
            department={student.department}
            year={student.year}
            practiceCount={practiceCount}
          />
        )}

        <div className="buttons">
          <button
            className="complete-btn"
            onClick={completePractice}
          >
            Complete Practice
          </button>

          <button
            className="reset-btn"
            onClick={resetPractice}
          >
            Reset
          </button>

          <button
            className="hide-btn"
            onClick={toggleProfile}
          >
            {showProfile ? "Hide Profile" : "Show Profile"}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;