<template>
  <div>
    <div class="d-none d-md-block">
      <nav class="navbar navbar-expand-md navbar-dark blue darken-4 fixed-top" id="menu">
        <div class="container justify-content-between">
          <router-link to="/login" class="navbar-brand">
            <h5 class="text-white">Mundo de películas</h5>
          </router-link>
          <div>
            <p class="text-white pt-3">Saldo S/. {{saldo}}</p>
          </div>
        </div>
      </nav>
    </div>
    <div class="d-md-none">
      <nav class="navbar navbar-light blue darken-4 fixed-top justify-content-center mr-5 pt-3">
        <span class="navbar-brand mb-0 h1 d-flex align-items-center">
          <router-link to="/peliculas" class="navbar-brand ml-5">
            <h4 class="text-white">Saldo S/. {{saldo}}</h4>
          </router-link>
        </span>
      </nav>
      <div class="button_container" id="toggle">
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
      </div>

      <div class="overlay" id="overlay">
        <nav class="overlay-menu">
          <ul>
            <li>
              <a href="/login">Inicio</a>
            </li>
            <li>
              <a href="/peliculas">Peliculas</a>
            </li>
            <li>
              <a href="/recargar">Recargar</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["saldo"])
  },
  methods: {},
  beforeMount() {
    console.log(this.saldo);
    this.fullNameLoggedUser = localStorage.getItem("userFullName");
  },
  mounted() {
    $("#toggle").click(function() {
      $(this).toggleClass("active");
      $("#overlay").toggleClass("open");
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
    $(window).scroll(function() {
      if ($("#menu").offset().top > 56) {
        $("#menu").addClass("bg-light-black");
      } else {
        $("#menu").removeClass("bg-light-black");
      }
    });
    $(function() {
      //detectar scroll hacia abajo
      var obj = $(document); //objeto sobre el que quiero detectar scroll
      var obj_top = obj.scrollTop(); //scroll vertical inicial del objeto
      obj.scroll(function() {
        var obj_act_top = $(this).scrollTop(); //obtener scroll top instantaneo
        if (obj_act_top > obj_top) {
          $("#menu").addClass("d-none");
        } else {
          //scroll hacia arriba
          $("#menu").removeClass("d-none");
        }
        obj_top = obj_act_top; //almacenar scroll top anterior
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
.bg-black {
  background-color: #000;
  transition: all 1s ease;
}
.bg-light-black {
  background-color: rgba(0, 0, 0, 0.6);
}
@media screen and (max-width: 767px) {
  @import url(https://fonts.googleapis.com/css?family=Vollkorn|Roboto);

  $color-background: #f5f5f5;
  $color-main: #060303;
  $color-active: #cea11c;
  $color-link: #fff;
  $color-link-underline: #cea11c;

  $button-height: 27px;
  $button-width: 35px;

  body {
    background: $color-background;
  }

  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    top: 40%;
    left: 0;
    margin: 0 auto;
    font-family: "Roboto", sans-serif;

    p {
      font-size: 20px;
    }

    a {
      display: inline-block;
      position: relative;
      text-align: center;
      color: $color-main;
      text-decoration: none;
      font-size: 20px;
      overflow: hidden;
      top: 5px;

      &:after {
        content: "";
        position: absolute;
        background: $color-main;
        height: 2px;
        width: 0%;
        transform: translateX(-50%);
        left: 50%;
        bottom: 0;
        transition: 0.35s ease;
      }
      &:hover:after,
      &:focus:after,
      &:active:after {
        width: 100%;
      }
    }
  }

  h1 {
    position: relative;
    text-align: center;
    font-family: "Vollkorn", serif;
  }

  .button_container {
    position: fixed;
    top: 3%;
    left: 4%;
    height: $button-height;
    width: $button-width;
    cursor: pointer;
    z-index: 1050;
    transition: opacity 0.25s ease;

    &:hover {
      opacity: 0.7;
    }

    &.active {
      .top {
        transform: translateY(11px) translateX(0) rotate(45deg);
        background: $color-active;
      }
      .middle {
        opacity: 0;
        background: $color-active;
      }

      .bottom {
        transform: translateY(-11px) translateX(0) rotate(-45deg);
        background: $color-active;
      }
    }

    span {
      background: #cea11c;
      border: none;
      height: 5px;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.35s ease;
      cursor: pointer;

      &:nth-of-type(2) {
        top: 11px;
      }

      &:nth-of-type(3) {
        top: 22px;
      }
    }
  }

  .overlay {
    position: fixed;
    background: $color-main;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.35s, visibility 0.35s, height 0.35s;
    overflow: hidden;

    &.open {
      opacity: 0.9;
      visibility: visible;
      height: 100%;
      z-index: 50;
      li {
        animation: fadeInRight 0.5s ease forwards;
        animation-delay: 0.35s;

        &:nth-of-type(2) {
          animation-delay: 0.4s;
        }
        &:nth-of-type(3) {
          animation-delay: 0.45s;
        }
        &:nth-of-type(4) {
          animation-delay: 0.5s;
        }
      }
    }
    nav {
      position: relative;
      height: 70%;
      top: 50%;
      transform: translateY(-50%);
      font-size: 40px;
      font-family: "Vollkorn", serif;
      font-weight: 400;
      text-align: center;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0 auto;
      display: inline-block;
      position: relative;
      height: 100%;

      li {
        display: block;
        height: 25%;
        height: calc(100% / 4);
        min-height: 50px;
        position: relative;
        opacity: 0;

        a {
          display: block;
          position: relative;
          color: $color-link;
          text-decoration: none;
          overflow: hidden;

          &:hover:after,
          &:focus:after,
          &:active:after {
            width: 100%;
          }

          &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0%;
            transform: translateX(-50%);
            height: 3px;
            background: $color-link-underline;
            transition: 0.35s;
          }
        }
      }
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      left: 20%;
    }
    100% {
      opacity: 1;
      left: 0;
    }
  }
}
</style>


