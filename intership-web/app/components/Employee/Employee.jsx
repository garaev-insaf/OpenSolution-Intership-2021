import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { IActionType } from "../common";
import { Actions } from "../Actions/Actions";
import { IStoreState } from "../Reducers/Reducers";

class Employee extends React.Component {
    render() {
        return (
            <div>
                <h2>Employee</h2>
            </div>
        );
    }
}

export { Employee };