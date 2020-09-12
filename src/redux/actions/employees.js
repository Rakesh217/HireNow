import * as Types from "./types";

export const create_employees = (result) => {
  return {
    type: Types.CREATE_EMPLOYEE,
    result,
  };
};

export const delete_employees = (result) => {
  return {
    type: Types.DELETE_EMPLOYEE,
    result,
  };
};
