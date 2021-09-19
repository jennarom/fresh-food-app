<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Editar Producto</h3>
      <form @submit.prevent="handleUpdateForm">
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
          <button class="btn btn-danger btn-block">Editar</button>
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
      product: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/edit-product/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.product = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/edit-student/${this.$route.params.id}`;

      axios
        .put(apiURL, this.product)
        .then((res) => {
          console.log(res);
          this.$router.push("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>