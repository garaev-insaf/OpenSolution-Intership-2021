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

export const postOrgs = (organ) => {
	console.log("organ:", organ);
	return (dispatch) => {
		axios
			.post("http://localhost:8080/organization", organ, {
				headers: {
					"Content-Type": "application/json; charset=utf-8",
				},
			})
			.then((orgs) => {
				if (orgs.status === 200) {
                    return (
					dispatch({
						type: "POST_ORGS",
						orgs,
					})
                    )
				} else {
					throw "error";
				}
			})
			.then((orgs) => {
                console.log("Показываю: ", orgs);
				if (orgs.orgs.data.success) {
                    console.log("Показываю: ", orgs.orgs.data.success);
					dispatch(getOrgs());
				} else {
					throw "error";
				}
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
export const postDivisions = (divis) => {
	return (dispatch) => {
		axios
			.post(`http://localhost:8080/division`, divis)
			.then((divs) => {
                console.log("вывожу", divs)
				if (divs.status === 200) {
                    return (
					dispatch({
						type: "POST_DIVS",
						divs,
                    })
                    )
				} else {
					throw "error";
				}
			})
			.then((divs) => {
				if (divs.divs.data.success) {
					dispatch(getDivisions(divis.id_organization));
				} else {
					throw "error";
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const putDivisions = (id, divis) => {
	return (dispatch) => {
		axios
			.put(`http://localhost:8080/division/?id=${id}`, divis, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((divs) => {
				dispatch({
					type: "PUT_DIVS",
					divs,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const delDivisions = (id) => {
	return (dispatch) => {
		axios
			.delete(`http://localhost:8080/division/?id=${id}`)
			.then(() => {
				dispatch({
					type: "DEL_DIVS",
					id,
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

export const postEmp = (empl) => {
    return (dispatch) => {
        axios
            .post(`http://localhost:8080/employee`, empl)
            .then((emps) => {
                console.log("вывожу", emps)
				if (emps.status === 200) {
                    return (
					dispatch({
						type: "POST_EMPS",
						emps,
                    })
                )
				} else {
					throw "error";
				}
			})
			.then((emps) => {
				if (emps.emps.data.success) {
					dispatch(getEmps(empl.id_division));
				} else {
					throw "error";
				}
			})
			.catch((error) => {
				console.log(error);
			});
    };
};


export const putEmp = (id, empl) => {
	return (dispatch) => {
		axios
			.put(`http://localhost:8080/employee/?id=${id}`, empl, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((emps) => {
				dispatch({
					type: "PUT_EMPS",
					emps,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const delEmp = (id) => {
	return (dispatch) => {
		axios
			.delete(`http://localhost:8080/employee/?id=${id}`)
			.then(() => {
				dispatch({
					type: "DEL_EMPS",
					id,
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
