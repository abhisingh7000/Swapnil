import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BugForm({ onSubmit, bugs }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const editBug = bugs?.find((b) => b.id === id);

    const [form, setForm] = useState(editBug || {
        title: "",
        description: "",
        priority: "Low",
        status: "Open",
        assignedTo: ""
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.description || !form.assignedTo) return alert("All fields are required.");
        onSubmit(editBug ? { ...form, id: editBug.id } : form);
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="form-control" />
            <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="form-control" />
            <input name="assignedTo" placeholder="Assigned To" value={form.assignedTo} onChange={handleChange} className="form-control" />
            <select name="priority" value={form.priority} onChange={handleChange} className="form-select">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <select name="status" value={form.status} onChange={handleChange} className="form-select">
                <option>Open</option>
                <option>In Progress</option>
                <option>Closed</option>
            </select>
            <button className="btn btn-success" type="submit">{editBug ? "Update Bug" : "Add Bug"}</button>
        </form>
    );
}
