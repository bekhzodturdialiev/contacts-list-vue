<template>
  <div
    class="d-flex flex-column col-12 col-md-9 col-lg-10"
    id="content-wrapper"
  >
    <div id="content">
      <div class="container-fluid">
        <h3 class="text-dark my-3">List of Contacts</h3>
        <div class="card shadow">
          <div class="card-header py-3">
            <p class="text-primary m-0 font-weight-bold">Contacts</p>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6 text-nowrap">
                <div
                  id="dataTable_length"
                  class="dataTables_length"
                  aria-controls="dataTable"
                >
                  <label
                    >Show&nbsp;<select
                      class="form-control form-control-sm custom-select custom-select-sm"
                      ><option value="10" selected="">10</option
                      ><option value="25">25</option
                      ><option value="50">50</option
                      ><option value="100">100</option></select
                    >&nbsp;</label
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="text-md-right dataTables_filter"
                  id="dataTable_filter"
                >
                  <label
                    ><input
                      type="search"
                      class="form-control form-control-sm"
                      aria-controls="dataTable"
                      placeholder="Search"
                  /></label>
                </div>
              </div>
            </div>
            <div
              class="table-responsive table mt-2"
              id="dataTable"
              role="grid"
              aria-describedby="dataTable_info"
            >
              <table class="table dataTable my-0" id="dataTable">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Main Phone</th>
                    <th>Main Address</th>
                    <th>Main Email</th>
                  </tr>
                </thead>
                <tbody>
                  <ContactCard
                    v-for="contact in contact.contacts"
                    :key="contact.id"
                    :contact="contact"
                  />
                </tbody>
                <tfoot>
                  <tr>
                    <td><strong>Name</strong></td>
                    <td><strong>Main Phone</strong></td>
                    <td><strong>Main Address</strong></td>
                    <td><strong>Main Email</strong></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="row">
              <div class="col-md-6 align-self-center">
                <p
                  id="dataTable_info"
                  class="dataTables_info"
                  role="status"
                  aria-live="polite"
                >
                  Showing {{ contactStartNumber }} to {{ contactEndNumber }} of
                  {{ contactsTotal }}
                </p>
              </div>
              <div class="col-md-6">
                <nav
                  class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers"
                >
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" aria-label="Previous"
                        ><span aria-hidden="true">«</span></a
                      >
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next"
                        ><span aria-hidden="true">»</span></a
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import ContactCard from "@/components/ContactCard";
import { mapState } from "vuex";

export default {
  name: "ContactList",
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    ContactCard
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    console.log(routeTo);
    console.log(routeFrom);
    const currentPage = parseInt(routeTo.query.page) || 1;
    store
      .dispatch("contact/fetchContacts", {
        page: currentPage
      })
      .then(() => {
        routeTo.params.page = currentPage;
        next();
      });
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    console.log(routeTo);
    const currentPage = parseInt(routeTo.query.page) || 1;
    store
      .dispatch("contact/fetchContacts", {
        page: currentPage
      })
      .then(() => {
        routeTo.params.page = currentPage;
        next();
      });
  },
  computed: {
    hasNextPage() {
      return this.contactsTotal > this.page * this.contact.perPage;
    },
    ...mapState(["contact"]),
    contactsTotal() {
      return this.contact.contactsTotal;
    },
    contactStartNumber() {
      return this.contact.perPage * this.page - this.contact.perPage + 1;
    },
    contactEndNumber() {
      return this.contactsTotal % (this.contact.perPage * this.page);
    }
  }
};
</script>
