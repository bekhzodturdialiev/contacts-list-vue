import axios from "axios";
import nProgress from "nprogress";

const apiClient = axios.create({
  // baseURL: "https://alif-contacts-db.herokuapp.com",
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json"
  }
});

apiClient.interceptors.request.use(request => {
  nProgress.start();
  return request;
});

apiClient.interceptors.response.use(response => {
  nProgress.done();
  return response;
});

export default {
  getContacts: function(perPage, page) {
    return apiClient.get("/contacts?_limit=" + perPage + "&_page=" + page);
  },
  getContactsByQuery: function(perPage, page, q) {
    return apiClient.get(
      "/contacts?_limit=" + perPage + "&_page=" + page + "&q=" + q
    );
  },
  getContactById: function(id) {
    return apiClient.get("/contacts/" + id);
  },
  postContact(contact) {
    return apiClient.post("/contacts", contact);
  },
  deleteContact(id) {
    return apiClient.delete("/contacts/" + id);
  },
  putContact(contact) {
    return apiClient.put("/contacts/" + contact.id, contact);
  }
};
