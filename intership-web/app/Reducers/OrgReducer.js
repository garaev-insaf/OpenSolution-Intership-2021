const OrgReducer = (org = [], action) => {
	switch (action.type) {
		case "GET_ORGS":
			console.log(action.org.data);
			return action.org.data;

		default:
			console.log("div:" + org);
			return org;
	}
};
const DivReducer = (div = [], action) => {
	switch (action.type) {
		case "GET_DIVS":
			console.log("33243242");
			console.log(action.div.data);
			console.log("33243242");
			return action.div.data;

		default:
			console.log("div:" + div);
			return div;
	}
};

const EmpReducer = (emp = [], action) => {
	switch (action.type) {
		case "GET_EMPS":
			console.log("empempemp");
			console.log(action.emp.data);
			console.log("empempemp");
			return action.emp.data;

		default:
			console.log("emp:" + emp);
			return emp;
	}
};

export { OrgReducer };
export { DivReducer };
export { EmpReducer };
