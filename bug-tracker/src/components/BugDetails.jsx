import React from "react";
import { useParams } from "react-router-dom";

export default function BugDetails({ bugs }) {
    const { id } = useParams();
    const bug = bugs.find((b) => b.id === id);
    if (!bug) return <p>Bug not found.</p>;

    return (
        <div className="card p-4">
            <h4>{bug.title}</h4>
            <p><strong>Description:</strong> {bug.description}</p>
            <p><strong>Status:</strong> {bug.status}</p>
            <p><strong>Priority:</strong> {bug.priority}</p>
            <p><strong>Assigned To:</strong> {bug.assignedTo}</p>
        </div>
    );
}
