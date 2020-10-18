import ContactService from "@/services/ContactService.js";

export const namespaced = true;

export const state = {
  contacts: [],
  contactsTotal: 0,
  contact: {},
  perPage: 10
};
export const mutations = {
  ADD_CONTACT(state, contact) {
    state.contact.push(contact);
  },
  SET_CONTACTS(state, contacts) {
    state.contacts = contacts;
  },
  SET_CONTACTS_TOTAL(state, total) {
    state.contactsTotal = total;
  },
  SET_CONTACT(state, contact) {
    state.contact = contact;
  },
  SET_PER_PAGE(state, perPage) {
    state.perPage = perPage;
  }
};
export const actions = {
  createContact({ commit }, contact) {
    return ContactService.postContact(contact)
      .then(() => {
        commit("ADD_CONTACT", contact);
      })
      .catch(error => {
        console.log(
          "There was a problem creating your contact: " + error.message
        );
        throw error;
      });
  },
  fetchContacts: function({ commit, state }, { page }) {
    return ContactService.getContacts(state.perPage, page)
      .then(response => {
        commit("SET_CONTACTS", response.data);
        commit("SET_CONTACTS_TOTAL", response.headers["x-total-count"]);
      })
      .catch(error => {
        console.log("There was a problem fetching contacts: " + error.message);
        throw error;
      });
  },
  findContacts: function({ commit, state }, { page, q }) {
    return ContactService.getContactsByQuery(state.perPage, page, q)
      .then(response => {
        commit("SET_CONTACTS", response.data);
        commit("SET_CONTACTS_TOTAL", response.headers["x-total-count"]);
      })
      .catch(error => {
        console.log("There was a problem fetching contacts: " + error.message);
        throw error;
      });
  },
  fetchContact: function({ commit, getters }, id) {
    var contact = getters.getContactById(id);
    if (contact) {
      commit("SET_CONTACT", contact);
      return contact;
    } else {
      return ContactService.getContactById(id)
        .then(response => {
          commit("SET_CONTACT", response.data);
          return response.data;
        })
        .catch(error => {
          console.log("There was a problem fetching contact: " + error.message);
          throw error;
        });
    }
  },
  updatePerPage: function({ commit, getters }, perPage) {
    if (perPage === getters.getPerPage) {
      return false;
    }
    commit("SET_PER_PAGE", perPage);
    return true;
  }
};

export const getters = {
  getContactById: state => id => {
    return state.contacts.find(contact => contact.id === id);
  },
  getPerPage: state => {
    return state.perPage;
  },
  getSomething: () => {
    return 5;
  }
};