import "../../App/App.css";
import * as React from "react";
import { useState, useEffect } from "react";
import { Modal } from "../modal";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch,
    useParams,
    Redirect,
    useHistory,
} from "react-router-dom";

const EmpData = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>id_division</th>
                        <th>FIO</th>
                        <th>address</th>
                        <th>position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (console.log("*****"),
                        console.log(props.emp.length),
                        console.log("*****"),
                        props.emp.length > 0 ? (
                            props.emp.map((empl) => (
                                <tr key={empl.id}>
                                    <td>{empl.id}</td>
                                    <td>{empl.id_division}</td>
                                    <td>{empl.FIO}</td>
                                    <td>{empl.address}</td>
                                    <td>{empl.position}</td>
                                    <td>
                                        <button
                                            className="button muted-button"
                                            onClick={() =>
                                                props.setActive(true)
                                            }
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="button muted-button delete-btn"
                                            onClick={() =>
                                                props.setActive(true)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>No users</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export { EmpData };
