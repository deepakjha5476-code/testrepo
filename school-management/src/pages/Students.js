import { useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentData = {
      id: editId ? editId : Date.now(),
      name,
      age,
      courseName,
      courseCode,
    };

    if (editId) {
      setStudents(
        students.map((student) =>
          student.id === editId ? studentData : student
        )
      );
      setEditId(null);
    } else {
      setStudents([...students, studentData]);
    }

    setName("");
    setAge("");
    setCourseName("");
    setCourseCode("");
  };

  const handleEdit = (student) => {
    setName(student.name);
    setAge(student.age);
    setCourseName(student.courseName);
    setCourseCode(student.courseCode);
    setEditId(student.id);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div>
      <h2>Students</h2>

      <form onSubmit={handleSubmit} className="mb-3">
        <input
          type="text"
          placeholder="Student Name"
          className="form-control mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Age"
          className="form-control mb-2"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Course Name"
          className="form-control mb-2"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Course Code"
          className="form-control mb-2"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          required
        />

        <button className="btn btn-primary">
          {editId ? "Update Student" : "Add Student"}
        </button>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Course Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.courseName}</td>
              <td>{student.courseCode}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(student)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;