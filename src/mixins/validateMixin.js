const validateMixins = {
  data() {
    return { error: [] };
  },

  methods: {
    checkForm: function(name, phone, email, address) {
      this.errors = [];

      if (!name) {
        this.errors.push("Name required.");
      }

      phone.forEach(element => {
        if (!element.number) {
          this.errors.push(`Phone number: ${element.id} required.`);
        }
      });

      email.forEach(element => {
        if (!element.name) {
          this.errors.push(`Email: ${element.id} required.`);
        } else if (!this.validEmail(element.name)) {
          this.errors.push(`Valid email ${element.id} required.`);
        }
      });

      address.forEach(element => {
        if (!element.name) {
          this.errors.push(`Address: ${element.id} required.`);
        }
      });

      if (!this.errors.length) {
        return true;
      }

      return false;
    },
    validEmail: function(email) {
      var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return re.test(email);
    }
  }
};

export default validateMixins;
