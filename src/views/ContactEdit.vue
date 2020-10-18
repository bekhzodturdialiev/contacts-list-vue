<template>
  <div
    class="d-flex flex-column col-12 col-md-9 col-lg-8 col-xl-9"
    id="content-wrapper"
  >
    <div id="content">
      <div class="container-fluid">
        <h3 class="text-dark my-3">Edit Contact</h3>
        <div class="card shadow">
          <div class="card-header py-3">
            <p class="text-primary m-0 font-weight-bold">
              Edit contact information
            </p>
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
                      v-model="oldContact.name"
                    />
                  </label>
                </div>
              </div>

              <!-- Phone -->
              <div class="col-12">
                <label>Phone</label>
                <div v-for="(phone, k) in oldContact.phone" :key="k">
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
                <div v-for="(email, k) in oldContact.email" :key="k">
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
                <div v-for="(address, k) in oldContact.address" :key="k">
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

              <div
                class="col-12 d-flex justify-content-between align-items-center"
              >
                <div
                  id="dataTable_length"
                  class="dataTables_length"
                  aria-controls="dataTable"
                >
                  <div class="d-flex">
                    <button class="btn btn-primary" @click="createContact">
                      Save
                    </button>
                    <button type="reset" class="btn btn-danger ml-4">
                      Cancel
                    </button>
                  </div>
                </div>
                <p class="text-primary">
                  <a href="#" @click="goBack">Go Back</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import validateMixins from "../mixins/validateMixin";

export default {
  props: {
    oldContact: {
      type: Object,
      required: true
    }
  },
  mixins: [validateMixins],
  data() {
    return {
      phoneInputAdded: false,
      emailInputAdded: false,
      addressInputAdded: false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    addPhoneInput() {
      this.oldContact.phone.push({
        id: this.oldContact.phone[this.oldContact.phone.length - 1].id + 1
      });
      this.phoneInputAdded = true;
    },
    addEmailInput() {
      this.oldContact.email.push({
        id: this.oldContact.email[this.oldContact.email.length - 1].id + 1
      });
      this.emailInputAdded = true;
    },
    addAddressInput() {
      this.oldContact.address.push({
        id: this.oldContact.address[this.oldContact.address.length - 1].id + 1
      });
      this.addressInputAdded = true;
    },
    removePhoneInput(index) {
      this.oldContact.phone.splice(index, 1);
    },
    removeEmailInput(index) {
      this.oldContact.email.splice(index, 1);
    },
    removeAddressInput(index) {
      this.oldContact.address.splice(index, 1);
    },
    createContact: function() {
      if (
        !this.checkForm(
          this.oldContact.name,
          this.oldContact.phone,
          this.oldContact.email,
          this.oldContact.address
        )
      ) {
        const notification = {
          type: "danger",
          message: this.errors.join("; ")
        };
        this.$store.dispatch("notification/add", notification, { root: true });
        return;
      }

      this.$store
        .dispatch("contact/editContact", this.oldContact)
        .then(() => {
          this.$router.push({
            name: "ContactShow",
            params: { id: this.oldContact.id }
          });
        })
        .catch(e => {
          console.log(this.oldContact.name + " was not stored: " + e.message);
        });
    }
  }
};
</script>
