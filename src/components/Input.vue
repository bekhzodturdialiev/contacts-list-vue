<template>
  <div class="col-12">
    <div v-for="(input, k) in inputs" :key="k">
      <div
        id="dataTable_length"
        class="dataTables_length d-flex align-items-center mb-3"
        aria-controls="dataTable"
      >
        <label class="col-8 px-0 m-0">
          <input
            :type="type"
            class="form-control"
            :placeholder="pl"
            v-model="input.value"
            @change="inputChange"
          />
        </label>
        <button class="btn btn-primary ml-4" v-if="addbutton" @click="addInput">
          <i class="fas fa-plus"></i>
        </button>
        <button
          class="btn btn-danger ml-2"
          v-if="inputAdded && k != 0"
          @click="removeInput(k)"
        >
          <i class="fas fa-minus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "Input",
  props: {
    name: {
      type: String,
      required: true
    },
    pl: {
      type: String,
      required: true
    },
    addbutton: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
    }
  },
  data() {
    return {
      inputs: [
        {
          name: this.name,
          value: ""
        }
      ],
      inputAdded: false
    };
  },
  methods: {
    addInput() {
      this.inputs.push({ name: this.name });
      this.inputAdded = true;
    },
    removeInput(index) {
      this.inputs.splice(index, 1);
    },
    inputChange() {
      store.dispatch("contact/createContact", "text");
    }
  }
};
</script>
