import React from "react";
import { Link } from "react-router-dom";
export default function BugList({ bugs, setSearch, setFilterStatus, setFilterPriority, deleteBug }) {
    return (
        <>
            <div className="mb-3 d-flex gap-2">
                <input className="form-control" placeholder="Search title" onChange={(e) => setSearch(e.target.value)} />
                <select className="form-select" onChange={(e) => setFilterStatus(e.target.value)}>
                    <option value="">All Status</option>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Closed">Closed</option>
                </select>
                <select className="form-select" onChange={(e) => setFilterPriority(e.target.value)}>
                    <option value="">All Priorities</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <Link to="/add" className="btn btn-primary">Add Bug</Link>
            </div>

            <table className="table table-bordered">
                <thead className="table-light">
                    <tr>
                        <th>Title</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Assigned To</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bugs.map((bug) => (
                        <tr key={bug.id}>
                            <td>{bug.title}</td>
                            <td>{bug.priority}</td>
                            <td>{bug.status}</td>
                            <td>{bug.assignedTo}</td>
                            <td className="d-flex gap-2">
                                <Link to={`/bug/${bug.id}`} className="btn btn-sm btn-info text-white">View</Link>
                                <Link to={`/edit/${bug.id}`} className="btn btn-sm btn-success">Edit</Link>
                                <button onClick={() => deleteBug(bug.id)} className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
