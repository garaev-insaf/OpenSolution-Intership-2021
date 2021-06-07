import { setHeaders } from "../../api/index";
import axios from "axios";

export const getOrgs = () => {
	return (dispatch) => {
		axios
		.get(`http://127.0.0.1:8080/organization`, setHeaders())
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

export const getDivisions = (id) => {
	console.log("принял айди org")
	console.log(id)
	console.log("принял айди org")
	return (dispatch) => {
		axios
		.get(`http://127.0.0.1:8080/division/?id=${id}`, setHeaders())
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
	console.log("принял айди emp")
	console.log(empId)
	console.log("принял айди emp")
	return (dispatch) => {
		axios
		.get(`http://127.0.0.1:8080/employee/?id=${empId}`, setHeaders())
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
