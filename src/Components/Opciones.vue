<template>
  <div>
    <navbar />
    <div class="container vh-100 d-flex justify-content-center align-items-center">
      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4 text-center">
          <h2 class="text-center">Alquiler</h2>
          <div class="text-center">
            <img
              src="https://image.flaticon.com/icons/png/512/83/83519.png"
              alt="Alquilar"
              width="100"
            />
          </div>
          <p class="py-3">
            Selecciona las mejores películas de nuestro catálogo y llévalas a tu
            casa para verlas cómodamente en familia
          </p>
          <p class="d-flex justify-content-center">
            <router-link to="/peliculas" class="btn text-white blue darken-4">Alquilar</router-link>
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4 text-center">
          <h2 class="text-center">Devolución</h2>
          <div class="text-center">
            <img
              src="https://ucarecdn.com/18f40964-c638-4705-aa40-de037ba01024/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              alt="Alquilar"
              width="100"
            />
          </div>
          <p class="py-3">
            Devuelve las películas de una manera rápida con unos cuantos clics
            para seleccionar otras del catálogo
          </p>
          <p class="d-flex justify-content-center">
            <router-link to="/devolver" class="btn text-white blue darken-4">Devolver</router-link>
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4 text-center">
          <h2 class="text-center">Recarga</h2>
          <div class="text-center">
            <img
              src="https://www.freeiconspng.com/uploads/credit-card-black-png-0.png"
              alt="Alquilar"
              width="100"
            />
          </div>
          <p class="py-3">
            ¿Te quedaste sin saldo? No te preocupes, recarga aquí y sigue
            disfrutando de las mejores películas de nuestro catálogo
          </p>
          <p class="d-flex justify-content-center">
            <router-link to="/recargar" class="btn text-white blue darken-4">Recargar</router-link>
          </p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->
    </div>
  </div>
</template>

<script>
import navbar from "./Navbar";
export default {
  name: "Products",
  components: {
    navbar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
@media screen and (max-width: 992px) {
  .row {
    margin-top: 10rem;
  }
}
@media screen and (max-width: 428px) {
  .row {
    margin-top: 30rem;
  }
}
</style>


