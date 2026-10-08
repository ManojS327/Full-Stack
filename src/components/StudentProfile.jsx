import { useEffect } from "react";

function StudentProfile({
  name,
  department,
  year,
  practiceCount,
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${practiceCount}`;

    return () => {
      document.title = previousTitle;
    };
  }, [practiceCount]);

  return (
    <div className="student-profile">
      <h2 className="profile-title">Student Profile</h2>

      <div className="student-info">
        <div className="info-box">
          <span className="info-label">Student Name</span>
          <span className="info-value">{name}</span>
        </div>

        <div className="info-box">
          <span className="info-label">Department</span>
          <span className="info-value">{department}</span>
        </div>

        <div className="info-box">
          <span className="info-label">Academic Year</span>
          <span className="info-value">{year}</span>
        </div>
      </div>

      <div className="practice-counter">
        <span className="practice-number">{practiceCount}</span>
        <span className="practice-label">
          Practice Sessions Completed
        </span>
      </div>
    </div>
  );
}

export default StudentProfile;