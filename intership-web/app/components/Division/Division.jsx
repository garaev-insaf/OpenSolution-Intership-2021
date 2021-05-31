import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { IActionType } from "../common";
import { Actions } from "../Actions/Actions";
import { IStoreState } from "../Reducers/Reducers";

class Division extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/employee"><h2>Division</h2></NavLink>
            </div>
        );
    }
}

export { Division };