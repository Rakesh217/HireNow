export function GetDataFromServer(apiPath, reqMethod, formBody) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  if (!reqMethod && reqMethod !== "POST") {
    return fetch(apiPath, {
      method: "GET",
      headers: myHeaders,
    });
  } else {
    if (formBody) {
      let fetchData = {
        method: reqMethod,
        body: JSON.stringify(formBody),
        headers: myHeaders,
      };
      return fetch(apiPath, fetchData);
    }
  }
}

export function deleteService(formBody, deleteApi) {
  console.log("FORM BODY" + JSON.stringify(formBody));
  let myHeaders = new Headers();

  if (localStorage.getItem("Token") !== undefined) {
    let token = sessionStorage.getItem("Token");
    myHeaders.append("Authorization", `Bearer ${token}`);
  }

  myHeaders.append("Content-Type", "application/json");
  return fetch(deleteApi, {
    method: "DELETE",
    body: JSON.stringify(formBody),
    headers: myHeaders,
  }).then((res) => res.json());
}
