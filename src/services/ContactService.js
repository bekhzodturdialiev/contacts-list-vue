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
  getContactById: function(id) {
    return apiClient.get("/contacts/" + id);
  },
  postContact(contact) {
    return apiClient.post("/contacts", contact);
  }
};
