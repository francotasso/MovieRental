<template>
  <div>
    <navbar />
    <div class="container py-5">
      <div class="album py-5 mt-3">
        <div class="container">
          <div class="row">
            <div v-for="(pelicula, index) in peliculas" :key="index" class="col-lg-4 col-md-6">
              <section class="cards mb-5">
                <article class="card card--1 mx-auto">
                  <div class="card__info-hover">
                    <div class>
                      <img :src="pelicula.portada" alt class="img-fluid" />
                    </div>
                  </div>
                  <div class="card__img"></div>
                  <div class="card__img--hover"></div>
                  <div class="card__info">
                    <span class="card__category"></span>
                    <h3 class="card__title"></h3>
                    <div class="d-flex justify-content-center">
                      <!-- Button trigger modal -->
                      <button
                        type="button"
                        class="btn blue darken-4 text-white"
                        data-toggle="modal"
                        :data-target="'#modal'+index"
                      >Mostar info</button>
                      <button
                        type="button"
                        class="btn blue darken-4 text-white"
                        @click="agregarPeliculas(pelicula)"
                        data-toggle="modal"
                        :data-target="'#modal'+index+9"
                      >Agregar</button>
                    </div>
                  </div>
                </article>
              </section>
              <!-- Modal -->
              <div
                class="modal fade"
                :id="'modal'+index"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Info General</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Titulo: {{pelicula.titulo}}</li>
                        <li class="list-group-item">Duración: {{pelicula.duracion}}</li>
                        <li class="list-group-item">Director: {{pelicula.director}}</li>
                        <li class="list-group-item">Precio de alquiler: S/. {{pelicula.precio}}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Modal -->
              <div
                class="modal fade"
                :id="'modal'+index+9"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div>
                      <div class="modal-header">
                        <h5
                          class="modal-title"
                          id="exampleModalLongTitle"
                        >Lista de películas agregadas</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <ul class="list-group list-group-flush">
                          <li
                            v-for="p in listaPeliculas"
                            :key="p.titulo"
                            class="list-group-item"
                          >{{p.titulo}} S/. {{p.precio}}</li>
                        </ul>
                        <div class="modal-footer justify-content-center">
                          <button
                            type="button"
                            :data-dismiss="!saldoInsuficiente ? 'modal' : ''"
                            class="btn blue darken-4 text-white"
                            @click="confirmarAlquiler(), comprobarSaldo()"
                          >Confirmar alquiler</button>
                        </div>
                        <div
                          v-if="saldoInsuficiente"
                          class="d-flex justify-content-center flex-column"
                        >
                          <h6 class="m-auto">Usted no cuenta con saldo suficiente</h6>
                          <button
                            type="button"
                            class="text-white btn blue darken-4"
                            data-dismiss="modal"
                            @click="recargar()"
                          >Recargar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./Navbar";
import { mapState } from "vuex";
import { mapActions, mapMutations } from "vuex";
export default {
  name: "Profile",
  components: {
    navbar
  },
  methods: {
    ...mapMutations("user", [
      "agregarPeliculas",
      "confirmarAlquiler",
      "cambiarSaldoInsuficiente"
    ]),
    comprobarSaldo() {
      if (this.saldo > this.costoAlquiler) {
        this.$router.push("/opciones");
      }
    },
    recargar() {
      this.cambiarSaldoInsuficiente();
      this.$router.push("/recargar");
    }
  },
  computed: {
    ...mapState("user", [
      "saldo",
      "costoAlquiler",
      "listaPeliculas",
      "saldoInsuficiente"
    ])
  },
  data() {
    return {
      peliculas: [
        {
          titulo: "El joker",
          duracion: "122 min",
          director: "James Cameron",
          precio: 10,
          portada:
            "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
        },
        {
          titulo: "Harry Potter y la piedra filosofal",
          duracion: "120 min",
          director: "JK Rowling",
          precio: 5,
          portada:
            "http://es.web.img2.acsta.net/pictures/14/04/30/11/55/592219.jpg"
        },
        {
          titulo: "El camino",
          duracion: "126 min",
          director: "Aaron Paul",
          precio: 7,
          portada:
            "https://estaticos.efe.com/efecom/recursos2/imagen.aspx?lVW2oAh2vjOzyIHIDpsNd1CNneGhOhnkQ4TncnkXVSTX-P-2bAoG0sxzXPZPAk5l-P-2fU5UO-P-2f7-P-2bWRqPniVe-P-2bEj49EoTZw-P-3d-P-3d"
        },
        {
          titulo: "21 Black Jack",
          duracion: "110 min",
          director: "Morgan Dalton",
          precio: 8,
          portada:
            "https://allcalidad.net/wp-content/uploads/2016/05/178_2111.jpg"
        },
        {
          titulo: "Toy Story 4",
          duracion: "105 min",
          director: "Kirk Hammet",
          precio: 10,
          portada:
            "https://dw0qvtuyu4cw2.cloudfront.net//ima/0/0/2/0/2/202815.jpg"
        },
        {
          titulo: "En la hierba alta",
          duracion: "117 min",
          director: "Rod Stewart",
          precio: 7,
          portada:
            "http://pm1.narvii.com/6823/f7987ef07f3018b1e4cbac9bc633a8b5b7e3de83v2_00.jpg"
        },
        {
          titulo: "El cubo",
          duracion: "118 min",
          director: "Mary Klark",
          precio: 9,
          portada:
            "https://http2.mlstatic.com/el-cubo-cero-cube-zero-pelicula-dvd-D_NQ_NP_810341-MLM27897977672_082018-F.jpg"
        },
        {
          titulo: "Nada es lo que parece",
          duracion: "128 min",
          director: "Mark Ruffalo",
          precio: 12,
          portada:
            "http://3.bp.blogspot.com/-wAXWxQ75SlE/UfkTWUKKIhI/AAAAAAAAFFU/z9fRbl28vuQ/s1600/Ahora_me_ves-137911516-large.jpg"
        },
        {
          titulo: "How I Met Your Mother - Los mejores capítulos",
          duracion: "176 min",
          director: "Cobbie Smulders",
          precio: 15,
          portada: "https://k41.kn3.net/6/4/0/5/5/B/DF4.jpg"
        }
      ]
    };
  }
};
</script>

<style scopped>
</style>
