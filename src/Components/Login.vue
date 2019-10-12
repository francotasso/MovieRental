<template>
  <!-- Material form subscription -->
  <div class="container-fluid vh-100 d-flex justify-content-center align-items-center">
    <div class="card" style="width: 500px; height: 375px;">
      <h5 class="card-header blue darken-4 white-text text-center py-4">
        <strong>Alquiler de películas</strong>
      </h5>

      <!--Card content-->
      <div class="card-body px-lg-5">
        <!-- Form -->
        <div class="text-center" style="color: #757575;">
          <img
            class="d-block mx-auto mb-4"
            src="http://simpleicon.com/wp-content/uploads/credit-card-6.png"
            alt
            width="72"
            height="72"
          />
          <!-- Name -->
          <div class="md-form mt-3">
            <input
              type="text"
              id="materialSubscriptionFormPasswords"
              placeholder="Ingrese su número de tarjeta"
              class="form-control"
              v-model="card"
            />
            <label for="materialSubscriptionFormPasswords"></label>
          </div>

          <!-- Sign in button -->
          <router-link
            to="/recargar"
            class="btn text-white blue darken-4 btn-rounded btn-block z-depth-0 my-4 waves-effect"
          >Ingresar</router-link>
        </div>
        <!-- Form -->
      </div>
    </div>
  </div>
  <!-- Material form subscription -->
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      card: ""
    };
  }
};
</script>

<style scoped>
</style>
