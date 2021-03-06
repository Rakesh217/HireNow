import {
  takeEvery,
  call,
  put,
  select,
  take,
  fork,
  all,
  takeLatest,
} from "redux-saga/effects";
import * as Types from "../actions/types";
import { GetDataFromServer, deleteService } from "../service";
//http://localhost:5000/api
const loginUrl = "https://hirenowservice.herokuapp.com/api";

function* createEmployeeDetails(action) {
  try {
    console.log(
      "CREATE EMPLOYEE Action->" + JSON.stringify(action.employeeDetails)
    );

    let formBody = {};
    formBody = action.result;
    console.log("FormBody" + JSON.stringify(formBody));
    const reqMethod = "POST";
    const body = {
      query: `mutation{
    addEmployee(Employee:{
    firstName: "${formBody.firstName}",
    lastName: "${formBody.lastName}",
    emailId: "${formBody.emailId}",
   	skills: "${formBody.skills}",
    rate: ${formBody.rate},
    city: "${formBody.city}",
    State: "${formBody.state}",
    zip: ${formBody.zip},
  }){
    firstName
    lastName
  }
}`,
    };

    const response = yield call(GetDataFromServer, loginUrl, "POST", body);
    const result = yield response.json();
    console.log("Result Json" + JSON.stringify(result));
    if (result.error) {
      yield put({
        type: Types.CREATE_EMPLOYEE_DETAILS_SERVER_RESPONSE_ERROR,
        error: result.error,
      });
    } else {
      yield put({
        type: Types.CREATE_EMPLOYEE_DETAILS_SERVER_RESPONSE_SUCCESS,
        result,
      });
      console.log("EMPLOYEE DETAILS" + JSON.stringify(result));
    }
  } catch (error) {
    console.log(error);
  }
}

function* getEmployeeDetails(action) {
  try {
    console.log(
      "CREATE EMPLOYEE Action->" + JSON.stringify(action.employeeDetails)
    );

    let formBody = {};
    formBody = action.result;
    console.log("FormBody" + JSON.stringify(formBody));
    const reqMethod = "POST";
    // const loginUrl = "http://localhost:5000/api";
    const body = {
      query: `query{
  allEmployees{
    firstName
    lastName
    skills
    rate
    city
    State
    zip
    emailId
  }
}`,
    };

    const response = yield call(GetDataFromServer, loginUrl, "POST", body);
    const result = yield response.json();
    console.log("Result Json" + JSON.stringify(result));
    if (result.error) {
      yield put({
        type: Types.GET_EMPLOYEE_DETAILS_SERVER_RESPONSE_ERROR,
        error: result.error,
      });
    } else {
      yield put({
        type: Types.GET_EMPLOYEE_DETAILS_SERVER_RESPONSE_SUCCESS,
        result,
      });
      console.log("EMPLOYEE DETAILS" + JSON.stringify(result));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga(params) {
  yield takeEvery(Types.CREATE_EMPLOYEE, createEmployeeDetails);
  yield takeEvery(Types.GET_EMPLOYEE, getEmployeeDetails);

  console.log("ROOT SAGA");
}
