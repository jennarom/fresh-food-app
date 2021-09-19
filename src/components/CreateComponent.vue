<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Registrar producto</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="product.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Marca</label>
          <input
            type="text"
            class="form-control"
            v-model="product.marca"
            required
          />
        </div>

        <div class="form-group">
          <label>Fecha de vencimiento</label>
          <input
            type="date"
            class="form-control"
            v-model="product.fecha"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Registrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: {
        name: "",
        marca: "",
        fecha: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-product";

      axios
        .post(apiURL, this.product)
        .then(() => {
          this.$router.push("/view");
          this.student = {
            name: "",
            marca: "",
            fecha: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>