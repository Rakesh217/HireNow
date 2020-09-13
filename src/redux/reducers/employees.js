import * as Type from "../actions/types";
const initialUserObj = {
  result: [],
};

const handleCreateEmployee = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    let r = state.result;
    r.push(action.result.data.addEmployee);
    newState = Object.assign({}, state, { result: r });
  }
  return { ...newState };
};

const handleDeleteEmployee = (state, action) => {
  let newState = { ...state };
  let filteredState = state.result.filter(
    (eachEmp) => eachEmp._id !== action.newData._id
  );
  newState = Object.assign({}, state, { result: filteredState });
  return { ...newState };
};

const handleGetEmployee = (state, action) => {
  let newState = { ...state };
  if (action.result.data !== undefined) {
    newState = Object.assign({}, state, {
      allEmployees: [...action.result.data.allEmployees],
    });
  }
  return { ...newState };
};

export default (state = initialUserObj, action = {}) => {
  switch (action.type) {
    case Type.CREATE_EMPLOYEE:
      return { ...state };
    case Type.CREATE_EMPLOYEE_DETAILS_SERVER_RESPONSE_SUCCESS:
      return handleCreateEmployee(state, action);
    case Type.CREATE_EMPLOYEE_DETAILS_SERVER_RESPONSE_ERROR:
      return { ...state };
    case Type.GET_EMPLOYEE:
      return { ...state };
    case Type.GET_EMPLOYEE_DETAILS_SERVER_RESPONSE_SUCCESS:
      return handleGetEmployee(state, action);
    case Type.GET_EMPLOYEE_DETAILS_SERVER_RESPONSE_ERROR:
      return { ...state };
    case Type.DELETE_EMPLOYEE:
      return { ...state };
    case Type.DELETE_EMPLOYEE_SUCCESS:
      return handleDeleteEmployee(state, action);
    default:
      return { ...state };
  }
};
