import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json"
  }
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
  }
};
