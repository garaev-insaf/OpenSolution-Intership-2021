import * as React from "react";
import { useState, useEffect } from "react";
import "../App/App.css";
import { Modal } from "../components/modal";

const NavBar = (props) => {
	return (
        <div className="wrap navbar-wrap">
            <div className="content">
                <button className="button nav-btn" onClick={() => props.setActive(true)}>Add</button>
            </div>
        </div>
	);
};

export { NavBar };
