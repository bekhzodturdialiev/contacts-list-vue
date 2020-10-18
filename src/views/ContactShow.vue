<template>
  <div
    class="d-flex flex-column col-12 col-md-9 col-lg-8 col-xl-9"
    id="content-wrapper"
  >
    <div id="content">
      <div class="container-fluid">
        <h3 class="text-dark my-3">Contact Card</h3>
        <div class="card shadow">
          <div class="card-body">
            <div
              class="table-responsive table mt-2"
              id="dataTable"
              role="grid"
              aria-describedby="dataTable_info"
            >
              <table class="table dataTable my-0" id="dataTable">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>
                      <span class="border-left pl-2 ml-2">{{
                        contact.name
                      }}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>
                      <span
                        v-for="phone in contact.phone"
                        :key="phone.phone_id"
                        class="border-left pl-2 ml-2"
                        >{{ phone.number }}</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>
                      <span
                        v-for="address in contact.address"
                        :key="address.address_id"
                        class="border-left pl-2 ml-2"
                        >{{ address.name }}</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>
                      <span
                        v-for="email in contact.email"
                        :key="email.email_id"
                        class="border-left pl-2 ml-2"
                        >{{ email.name }}</span
                      >
                    </td>
                  </tr>
                </tbody>
                <tbody></tbody>
              </table>
              <p class="text-primary text-right mt-4">
                <a href="#" @click="goBack">Go Back</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$router.history);
  },
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      routeFrom: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
