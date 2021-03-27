const https = require("https");
const API_URL = process.env.REACT_APP_API_URL;

// const API_END_POINTS = {
//   categories: "/categories",
//   posts: "/posts",
//   comments: "/comments",
// };

// const interpolateURL = (url, param) => {
//   let regExp = new RegExp("{.*}");
//   let newURL = url.replace(regExp, param);
//   return newURL;
// };

let token = localStorage.token;

if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: token,
  agent: httpsAgent,
};

const getRequest = (method, url, body) => {
  let payload = {
    method: method,
    headers: headers,
  };
  if (body) {
    payload.body = JSON.stringify(body);
  }
  return fetch(url, payload).then((response) => {
    if (response) {
      return response.json();
    }
    return null;
  });
};

const METHOD = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
};
class HttpService {
  getProjectedValues = (data) => {
    let url = `${API_URL}/api/calculate`;
    return getRequest(METHOD.POST, url, data);
  };
}

export default new HttpService();
