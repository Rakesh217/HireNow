import * as Types from "./types";

export const create_employees = (result) => {
  return {
    type: Types.CREATE_EMPLOYEE,
    result,
  };
};

export const get_employees = () => {
  return {
    type: Types.GET_EMPLOYEE,
  };
};

export const delete_employees = (result) => {
  return {
    type: Types.DELETE_EMPLOYEE,
    result,
  };
};
