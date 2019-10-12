<template>
  <div>
    <navbar />
    <div
      class="container-fluid vh-100 d-flex justify-content-center align-items-center flex-column"
    >
      <div class="card" style="width: 500px; height: 375px;" id="tarjeta">
        <h5 class="card-header blue darken-4 white-text text-center py-4">
          <strong>Recarga</strong>
        </h5>

        <!--Card content-->
        <div class="card-body px-lg-5 pt-0">
          <!-- Form -->
          <form
            class="text-center mt-5"
            style="color: #757575;"
            action="C:/Users/AULAFISI/Desktop/Taller%20de%20IHC/Opciones.html"
          >
            <!-- Subject -->
            <span>Elija el monto a recargar</span>
            <div class="form-group mt-5">
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                ref="monto"
                v-model="recarga"
              >
                <option>5</option>
                <option selected>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>

            <!-- Send button -->
            <button
              class="btn text-white blue darken-4 btn-rounded btn-block z-depth-0 my-4 waves-effect"
              @click="actualizarSaldo(recarga)"
            >Recargar</button>
          </form>
          <!-- Form -->
        </div>
      </div>
      <div v-if="saldo!=0">
        <router-link
          to="/opciones"
          class="btn text-white blue darken-4 btn-rounded btn-block z-depth-0 my-4 waves-effect"
          @click="actualizarSaldo(recarga)"
        >Ingresar</router-link>
      </div>
      <!-- Material form contact -->
    </div>
  </div>
</template>

<script>
import navbar from "./Navbar";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "recargar",
  data() {
    return {
      recarga: 0
    };
  },
  computed: {
    ...mapState("user", ["saldo"])
  },
  methods: {
    ...mapMutations("user", ["actualizarSaldo"])
  },
  components: {
    navbar
  }
};
</script>

<style scoped>
</style>


