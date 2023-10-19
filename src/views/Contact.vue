<script setup>
import Navbar from '../components/Navbar.vue'
import Breadcrumb from "../components/Breadcrumb.vue"

import { ref } from 'vue'
// const name = ref("")
// const email = ref("")
// const phone = ref("")
// const message = ref("")


</script>

<template>
  <main>
    <Navbar activate="Contact" />

    <div class="container">
      <Breadcrumb start="Contact" :pages="[]" />
      <!-- Content here -->
      <div class="row">

        <div class="col-md-6 col-sm-12">



          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control input-custom" id="name" aria-describedby="name" v-model="name"
              placeholder="Ex: Your full name">

            <!-- {{ name }} -->
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control input-custom" id="email" :class="{ 'is-invalid': !isEmailValid }"
              aria-describedby="name" v-model="email" placeholder="Ex.: myemail@email.com">

            <!-- {{ email }} -->
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input type="text" class="form-control input-custom" :class="{ 'is-invalid': !isPhoneValid }" id="phone"
              aria-describedby="name" v-model="phone" placeholder="Ex.: (99) 9 9999-9999">

            <!-- {{ phone }} -->
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea type="text" class="form-control input-custom" id="message" aria-describedby="name" v-model="message"
              placeholder="Ex.: Contact message for Marvel"></textarea>

            <!-- {{ message }} -->
          </div>
          <button type="button" @click="validadeField" class="btn btn-primary" :disabled="isEmptyField"
            data-bs-toggle="modal" data-bs-target="#contactModal">Send</button>
          <div class="modal fade" id="contactModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Message sent successfully!</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Thank you, we'll reach you as soon as possible
                </div>
                <div class="modal-footer">
                  <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      phoneError: "",
      email: "",
      emailError: "",
      message: "",
      erros: []
    };
  },
  computed: {
    isEmptyField() {
      // Verifica se pelo menos um dos campos está vazio
      return !this.name || !this.phone || !this.email || !this.message;
    },
    isPhoneValid() {
      // Use uma expressão regular (regex) para verificar o padrão do telefone
      if (this.phone == "") return true
      const phonePattern = /^\(\d{2}\) \d \d{4}-\d{4}$/;
      return phonePattern.test(this.phone);

    },
    isEmailValid() {
      if (this.email == "") return true
      // Use uma expressão regular (regex) para verificar o padrão do email
      const emailPattern = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
      return emailPattern.test(this.email);
    }
  },
  methods: {
    validadeField() {
      if (!this.isPhoneValid) {
        // Lógica de tratamento quando o telefone não é válido
        this.errors.push("Please enter a valid phone number.");
      }
      console.log("validou")
    },
  },
};
</script>
<style>
.input-custom {
  padding: 10px 16px 10px 16px;
  /* width: 50%; */
}
button:disabled,
button[disabled]{
  /* border: 1px solid #999999 !important; */
  background-color: #CCCCCC !important;
  color: #767676 !important;
}
</style>