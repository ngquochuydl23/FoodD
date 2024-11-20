import axios from "axios";
export let baseURL = "http://192.168.1.148:8089"; //https://shoeshop-backend.online
axios.defaults.baseURL = `${baseURL}`;

export const TypeHTTP = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};
export const api = async ({ path, body, type }) => {
  return new Promise((rejects, resolve) => {
    switch (type) {
      case TypeHTTP.GET:
        axios
          .get(path)
          .then((res) => {
            rejects(res.data);
          })
          .catch((res) => {
            resolve({
              status: res.response?.status,
              message: res.response?.data,
            });
          });
        break;
      case TypeHTTP.POST:
        axios
          .post(path, body)
          .then((res) => {
            rejects(res.data);
          })
          .catch((res) => {
            resolve({
              status: res.response?.status,
              message: res.response?.data,
            });
          });
        break;
      case TypeHTTP.PUT:
        axios
          .put(path, body)
          .then((res) => {
            rejects(res.data);
          })
          .catch((res) => {
            resolve({
              status: res.response?.status,
              message: res.response?.data,
            });
          });
        break;
      case TypeHTTP.DELETE:
        axios
          .delete(path)
          .then((res) => {
            rejects(res.data);
          })
          .catch((res) => {
            resolve({
              status: res.response?.status,
              message: res.response?.data,
            });
          });
        break;
    }
  });
};
