import { Dispatch } from "redux";
import axios from "axios";

export const getOrgs = () => {
    return (dispatch) => {
        axios
            .get(`http://127.0.0.1:8080/organization`)
            .then((org) => {
                dispatch({
                    type: "GET_ORGS",
                    org,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const postOrgs = (id, organ) => {
    return (dispatch) => {
        axios
            .post(`http://localhost:8080/organization/?id=${id}`, organ)
            .then((orgs) => {
                console.log("Показываю: ", orgs);
                dispatch({
                    type: "POST_ORGS",
                    orgs,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const putOrgs = (id, organ) => {
    return (dispatch) => {
        axios
            .put(`http://localhost:8080/organization/?id=${id}`, organ, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((orgs) => {
                dispatch({
                    type: "PUT_ORGS",
                    orgs,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const delOrgs = (id) => {
    return (dispatch) => {
        axios
            .delete(`http://localhost:8080/organization/?id=${id}`)
            .then(() => {
                dispatch({
                    type: "DEL_ORGS",
                    id,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const getDivisions = (id) => {
    console.log("принял айди org");
    console.log(id);
    console.log("принял айди org");
    return (dispatch) => {
        axios
            .get(`http://127.0.0.1:8080/division/?id=${id}`)
            .then((div) => {
                dispatch({
                    type: "GET_DIVS",
                    div,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const getEmps = (empId) => {
    console.log("принял айди emp");
    console.log(empId);
    console.log("принял айди emp");
    return (dispatch) => {
        axios
            .get(`http://127.0.0.1:8080/employee/?id=${empId}`)
            .then((emp) => {
                dispatch({
                    type: "GET_EMPS",
                    emp,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
export const onLogout = () => {
    console.log("логаут");
    return (dispatch) => {
        axios
            .post(`http://127.0.0.1:8080/logout`)
            .then((res) => {
                if (res.status === 200) {
                    dispatch({ type: "POST_LOGOUT" });
                } else {
                    throw "error";
                }
            })
            .catch(() => {
                dispatch({
                    type: "POST_LOGOUT",
                });
                console.log("неудача");
            });
    };
};
