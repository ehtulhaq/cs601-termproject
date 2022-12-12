"use strict";
/*
Name: Ehtesham Mohammed
Email: ehtulhaq@bu.edu
*/

const dataInit = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};
window.contactForm = {
  data() {
    return {
      data: Object.assign({}, dataInit),
      errors: new Map(),
      submitted: false,
      submitting: false,
    };
  },
  methods: {
    clearErrors() {
      this.errors = new Map();
    },
    reset() {
      this.clearErrors();
      this.data = Object.assign({}, dataInit);
      this.submitted = false;
      this.submitting = false;
    },
    validateEmail(fieldName, value) {
      const result = value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      if (!result) {
        this.errors.set(
          fieldName,
          "Invalid Email. Please us email@domain.com format."
        );
      }
    },
    validateName(fieldName, value) {
      if (value.length < 2) {
        this.errors.set(fieldName, "Value should be atleast 2 character long");
      } else if (!value.match(/^[A-Za-z]+$/)) {
        this.errors.set(fieldName, "Sorry! Only alphabets are allowed");
      }
    },
    validateMessage(fieldName, value) {
      if (value.length < 2) {
        this.errors.set(fieldName, "Value should be atleast 2 character long");
      }
    },
    async postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    },
    submit() {
      this.validateFields();
      if (this.errors.size !== 0) {
        return;
      }
      this.submitting = true;
      this.postData(
        "https://639711ba86d04c763389d7b2.mockapi.io/contact_form_fields",
        this.data
      )
        .then((data) => {
          this.submitting = false;
          this.submitted = true;
        })
        .catch(() => {
          this.submitting = false;
          this.submitted = true;
        });
    },
    validateFields() {
      this.clearErrors();
      this.validateEmail("email", this.data.email);
      this.validateName("firstName", this.data.firstName);
      this.validateName("lastName", this.data.lastName);
      this.validateMessage("message", this.data.message);
    },
  },
  template: `
          <h1 v-cloak v-show="!submitting && !submitted" class="statement text-center">
              Contact
          </h1>
          <p v-cloak v-show="!submitting && !submitted" class="text-center">You can reach out to me at <a class="a-link" href="mailto:ehtulhaq65@gmail.com">ehtulhaq65@gmail.com</a> or use the following form to reach out</p>
          <form v-cloak v-show="!submitting && !submitted" @submit.prevent="submit">
            <div class="field-container">
              <label class="field-header" for="firstName">First Name</label>
              <input autofocus v-model="data.firstName" type="text" placeholder="Enter your First Name"
                :class="errors.get('firstName') ? 'field field-error' : 'field'" required>
              <p class="error-text">{{errors.get('firstName')}}</p>
            </div>
            <div class="field-container">
              <label class="field-header" for="lastName">Last Name</label>
              <input v-model="data.lastName" type="text" placeholder="Enter your Last Name" :class="errors.get('lastName') ? 'field field-error' : 'field'"  required >
              <p class="error-text">{{errors.get('lastName')}}</p>
            </div>
            <div class="field-container">
              <label class="field-header" for="email">Email</label>
              <input v-model="data.email" type="email" placeholder="Enter your email" :class="errors.get('email') ? 'field field-error' : 'field'"  required data-validation="email">
              <p class="error-text">{{errors.get('email')}}</p>
            </div>
            <div class="field-container">
              <label class="field-header" for="message">Message</label>
              <textarea v-model="data.message" placeholder="Enter Your Message" :class="errors.get('message') ? 'field field-error' : 'field'"  required></textarea>
              <p class="error-text">{{errors.get('message')}}</p>
            </div>
            <button class="submit-btn">Submit</button>
          </form>
          <div v-cloak v-show="submitting" class="text-center">
            <h2 class="heading">Please Wait</h2>
          </div>
          <div v-cloak v-show="submitted" class="text-center">
            <h2 class="heading">Thank You!</h2>
            <p>Your message has been sent succesfully</p>
            <a @click="reset" class="a-link">Send Another Message</a>
          </div>
          `,
};
