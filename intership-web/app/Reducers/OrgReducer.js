const OrgReducer = (org = [], action) => {
	switch (action.type) {
		case "GET_ORGS":
			return action.org.data;
		case "POST_ORGS":
			let deserel = JSON.parse(action.orgs.config.data);
			console.log("action", action.orgs.config.data);
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
		case "POST_DIVS":
			let deserel = JSON.parse(action.divs.config.data);
			console.log("action", action.divs.config.data);
			return [...div, deserel];
		case "PUT_DIVS":
			let deser = JSON.parse(action.divs.config.data);
			return div.map((divis) => (divis.id === deser.id ? deser : divis));
		case "DEL_DIVS":
			return div.filter((divis) => divis.id !== action.id);

		default:
			return div;
	}
};

const EmpReducer = (emp = [], action) => {
	switch (action.type) {
		case "GET_EMPS":
			return action.emp.data;
		case "POST_EMPS":
			let deserel = JSON.parse(action.emps.config.data);
			console.log("action", action.emps.config.data);
			return [...emp, deserel];
		case "PUT_EMPS":
			let deser = JSON.parse(action.emps.config.data);
			return emp.map((empl) => (empl.id === deser.id ? deser : empl));
		case "DEL_EMPS":
			return emp.filter((empl) => empl.id !== action.id);
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
