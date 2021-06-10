import { toast } from "react-toastify";
const OrgReducer = (org = [], action) => {	
	switch (action.type) {
		case "GET_ORGS":	
			return action.org.data;
		case "POST_ORGS":
			let deserel = JSON.parse(action.orgs.config.data);
			console.log("action", action.orgs.config.data)
			return [...org, deserel];
		case "PUT_ORGS":
			let deser = JSON.parse(action.orgs.config.data);
			return org.map((organ) => (organ.id === deser.id ? deser : organ));
		case "DEL_ORGS":
			return org.filter((organ) => organ.id !== action.id);
		default:
			return org;
	}
};
const DivReducer = (div = [], action) => {
	switch (action.type) {
		case "GET_DIVS":
			return action.div.data;

		default:
			return div;
	}
};

const EmpReducer = (emp = [], action) => {
	switch (action.type) {
		case "GET_EMPS":
			return action.emp.data;
		default:
			return emp;
	}
};

const LogOutReducer = (log = [], action) => {
	switch (action.type) {
		case "POST_LOGOUT":
			localStorage.removeItem("stat");
			window.location.reload();
			return log;
		default:
			return log;
	}
};

export { OrgReducer };
export { DivReducer };
export { EmpReducer };
export { LogOutReducer };
