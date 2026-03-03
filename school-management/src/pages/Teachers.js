import { useState } from "react";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const addTeacher = (e) => {
    e.preventDefault();
    setTeachers([...teachers, { id: Date.now(), name, subject }]);
    setName("");
    setSubject("");
  };

  const deleteTeacher = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  return (
    <div>
      <h2>Teachers</h2>

      <form onSubmit={addTeacher} className="mb-3">
        <input
          type="text"
          placeholder="Name"
          className="form-control mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          className="form-control mb-2"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <button className="btn btn-primary">Add Teacher</button>
      </form>

      <ul className="list-group">
        {teachers.map((teacher) => (
          <li
            key={teacher.id}
            className="list-group-item d-flex justify-content-between"
          >
            {teacher.name} - {teacher.subject}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTeacher(teacher.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teachers;