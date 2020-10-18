<template>
  <div
    class="d-flex flex-column col-12 col-md-9 col-lg-8 col-xl-9"
    id="content-wrapper"
  >
    <div id="content">
      <div class="container-fluid">
        <h3 class="text-dark my-3">Create Contact</h3>
        <div class="card shadow">
          <div class="card-header py-3">
            <p class="text-primary m-0 font-weight-bold">Add new contact</p>
          </div>
          <div class="card-body">
            <div class="row">
              <!-- Name -->
              <div class="col-12">
                <label>Name</label>
                <div
                  id="dataTable_length"
                  class="dataTables_length d-flex align-items-center mb-3"
                  aria-controls="dataTable"
                >
                  <label class="col-8 px-0 m-0">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      v-model="name"
                    />
                  </label>
                </div>
              </div>

              <!-- Phone -->
              <div class="col-12">
                <label>Phone</label>
                <div v-for="(phone, k) in phones" :key="k">
                  <div
                    id="dataTable_length"
                    class="dataTables_length d-flex align-items-center mb-3"
                    aria-controls="dataTable"
                  >
                    <label class="col-8 px-0 m-0">
                      <input
                        type="phone"
                        class="form-control"
                        placeholder="Phone"
                        v-model="phone.number"
                      />
                    </label>
                    <button class="btn btn-primary ml-4" @click="addPhoneInput">
                      <i class="fas fa-plus"></i>
                    </button>
                    <button
                      class="btn btn-danger ml-2"
                      v-if="phoneInputAdded && k != 0"
                      @click="removePhoneInput(k)"
                    >
                      <i class="fas fa-minus"></i>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div class="col-12">
                <label>E-mail</label>
                <div v-for="(email, k) in emails" :key="k">
                  <div
                    id="dataTable_length"
                    class="dataTables_length d-flex align-items-center mb-3"
                    aria-controls="dataTable"
                  >
                    <label class="col-8 px-0 m-0">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="E-mail"
                        v-model="email.name"
                      />
                    </label>
                    <button class="btn btn-primary ml-4" @click="addEmailInput">
                      <i class="fas fa-plus"></i>
                    </button>
                    <button
                      class="btn btn-danger ml-2"
                      v-if="emailInputAdded && k != 0"
                      @click="removeEmailInput(k)"
                    >
                      <i class="fas fa-minus"></i>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Address -->
              <div class="col-12">
                <label>Address</label>
                <div v-for="(address, k) in addresses" :key="k">
                  <div
                    id="dataTable_length"
                    class="dataTables_length d-flex align-items-center mb-3"
                    aria-controls="dataTable"
                  >
                    <label class="col-8 px-0 m-0">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Address"
                        v-model="address.name"
                      />
                    </label>
                    <button
                      class="btn btn-primary ml-4"
                      @click="addAddressInput"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                    <button
                      class="btn btn-danger ml-2"
                      v-if="addressInputAdded && k != 0"
                      @click="removeAddressInput(k)"
                    >
                      <i class="fas fa-minus"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-12 ">
                <div
                  id="dataTable_length"
                  class="dataTables_length"
                  aria-controls="dataTable"
                >
                  <button class="btn btn-primary" @click="createContact">
                    Save
                  </button>
                  <button type="reset" class="btn btn-danger ml-4">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phones: [{ id: 1, number: "" }],
      emails: [{ id: 1, name: "" }],
      addresses: [{ id: 1, name: "" }],
      phoneInputAdded: false,
      emailInputAdded: false,
      addressInputAdded: false,

      contact: this.createFreshContactObject()
    };
  },
  methods: {
    addPhoneInput() {
      this.phones.push({ id: this.phones[this.phones.length - 1].id + 1 });
      this.phoneInputAdded = true;
    },
    addEmailInput() {
      this.emails.push({ id: this.emails[this.emails.length - 1].id + 1 });
      this.emailInputAdded = true;
    },
    addAddressInput() {
      this.addresses.push({
        id: this.addresses[this.addresses.length - 1].id + 1
      });
      this.addressInputAdded = true;
    },
    removePhoneInput(index) {
      this.phones.splice(index, 1);
    },
    removeEmailInput(index) {
      this.emails.splice(index, 1);
    },
    removeAddressInput(index) {
      this.addresses.splice(index, 1);
    },
    createFreshContactObject: function() {
      const id = Math.floor(Math.random() * 100000000);
      return {
        id: id,
        name: "",
        phone: [],
        address: [],
        email: []
      };
    },
    createContact: function() {
      this.contact.name = this.name;
      this.contact.phone = this.phones;
      this.contact.email = this.emails;
      this.contact.address = this.addresses;

      console.log(this.contact);
      this.$store
        .dispatch("contact/createContact", this.contact)
        .then(() => {
          this.$router.push({
            name: "ContactShow",
            params: { id: this.contact.id }
          });
          this.event = this.createFreshContactObject();
        })
        .catch(e => {
          console.log(this.contact.name + " was not stored: " + e.message);
        });
    }
  }
};
</script>
