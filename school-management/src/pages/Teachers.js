import { useState } from "react";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      // Update teacher
      setTeachers(
        teachers.map((teacher) =>
          teacher.id === editId ? { ...teacher, name, subject } : teacher
        )
      );
      setEditId(null);
    } else {
      // Add teacher
      setTeachers([...teachers, { id: Date.now(), name, subject }]);
    }

    setName("");
    setSubject("");
  };

  const handleEdit = (teacher) => {
    setName(teacher.name);
    setSubject(teacher.subject);
    setEditId(teacher.id);
  };

  const deleteTeacher = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  return (
    <div>
      <h2>Teachers</h2>

      <form onSubmit={handleSubmit} className="mb-3">
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
        <button className="btn btn-primary">
          {editId ? "Update Teacher" : "Add Teacher"}
        </button>
      </form>

      <ul className="list-group">
        {teachers.map((teacher) => (
          <li
            key={teacher.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {teacher.name} - {teacher.subject}
            </span>

            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => handleEdit(teacher)}
              >
                Edit
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTeacher(teacher.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teachers;