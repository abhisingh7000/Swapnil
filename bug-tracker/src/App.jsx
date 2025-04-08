import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import BugList from "./components/BugList";
import BugForm from "./components/BugForm";
import BugDetails from "./components/BugDetails";

const initialBugs = JSON.parse(localStorage.getItem("bugs")) || [];

export default function App() {
  const [bugs, setBugs] = useState(initialBugs);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterPriority, setFilterPriority] = useState("");

  useEffect(() => {
    localStorage.setItem("bugs", JSON.stringify(bugs));
  }, [bugs]);

  const filteredBugs = bugs.filter(
    (bug) =>
      bug.title.toLowerCase().includes(search.toLowerCase()) &&
      (filterStatus === "" || bug.status === filterStatus) &&
      (filterPriority === "" || bug.priority === filterPriority)
  );

  const addBug = (bug) => setBugs([...bugs, { ...bug, id: uuidv4() }]);
  const updateBug = (updatedBug) =>
    setBugs(bugs.map((b) => (b.id === updatedBug.id ? updatedBug : b)));
  const deleteBug = (id) => setBugs(bugs.filter((b) => b.id !== id));

  return (
    <div className="container py-4" style={{ backgroundColor: "aquamarine", minHeight: "100vh" }}>
      <h1 className="mb-4">🐞 Bug Tracker</h1>
      <Routes>
        <Route
          path="/"
          element={
            <BugList
              bugs={filteredBugs}
              setSearch={setSearch}
              setFilterStatus={setFilterStatus}
              setFilterPriority={setFilterPriority}
              deleteBug={deleteBug}
            />
          }
        />
        <Route path="/add" element={<BugForm onSubmit={addBug} />} />
        <Route path="/edit/:id" element={<BugForm bugs={bugs} onSubmit={updateBug} />} />
        <Route path="/bug/:id" element={<BugDetails bugs={bugs} />} />
      </Routes>
    </div>
  );
}
