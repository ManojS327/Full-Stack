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
    setPracticeCount(practiceCount + 1);
  };

  const resetPractice = () => {
    setPracticeCount(0);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="app">
      <Header />

      <main>
        {showProfile && (
          <StudentProfile
            name={student.name}
            department={student.department}
            year={student.year}
            practiceCount={practiceCount}
          />
        )}

        <div className="buttons">
          <button onClick={completePractice}>
            Complete Practice
          </button>

          <button onClick={resetPractice}>
            Reset
          </button>

          <button onClick={toggleProfile}>
            {showProfile ? "Hide Profile" : "Show Profile"}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;