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

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: token,
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
  //   getPostsByCategories = category => {
  //     let url = `${API_URL}/{category}${API_END_POINTS.posts}`;
  //     url = interpolateURL(url, category);
  //     return getRequest(METHOD.GET, url);
  //   };
  getProjectedValues = (data) => {
    let url = `${API_URL}/api/calculate`;
    return getRequest(METHOD.POST, url, data);
  };
}

export default new HttpService();
