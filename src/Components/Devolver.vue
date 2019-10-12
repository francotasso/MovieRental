<template>
  <div>
    <navbar />
    <div
      v-if="listaPeliculas.length<1"
      class="container"
      style="margin-top: 8rem;"
    >No hay películas que devolver</div>
    <div v-else>
      <div class="container" style="margin-top: 8rem;">
        <ul class="list-group">
          <li class="list-group-item active blue darken-4">
            <div class="md-v-line"></div>
            <i class="fas fa-laptop mr-4 pr-3"></i> Lista de peliculas alquiladas
          </li>
          <li v-for="(pelicula, index) in listaPeliculas" :key="index" class="list-group-item">
            <div class="md-v-line"></div>
            <img :src="pelicula.portada" :alt="pelicula.titulo" style="width: 75px;" />
            {{pelicula.titulo}}
          </li>
        </ul>
        <div>
          <button
            type="button"
            @click="devolverPeliculas(), regresar()"
            class="btn blue darken-4 text-white"
          >Devolver peliculas</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./Navbar";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "aboutus",
  components: {
    navbar
  },
  computed: {
    ...mapState("user", ["listaPeliculas"])
  },
  methods: {
    ...mapMutations("user", ["devolverPeliculas"]),
    regresar() {
      this.$router.push("/opciones");
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.md-v-line {
  position: absolute;
  border-left: 1px solid rgba(0, 0, 0, 0.125);
  height: 50px;
  top: 0px;
  left: 54px;
}
</style>
