const state = {
    saldo: 0,
    costoAlquiler: 0,
    listaPeliculas: [],
    saldoInsuficiente: false
};

const mutations = {
    actualizarSaldo(state, recarga) {
        state.saldo = state.saldo + parseInt(recarga);
    },
    agregarPeliculas(state, pelicula) {
        if (state.listaPeliculas.length < 3) {
            state.costoAlquiler = state.costoAlquiler + parseInt(pelicula.precio)
            state.listaPeliculas.push(pelicula)
        }
    },
    confirmarAlquiler(state) {
        if (state.saldo < parseInt(state.costoAlquiler)) {
            state.saldoInsuficiente = true
        } else {
            state.saldoInsuficiente = false
            state.saldo = state.saldo - parseInt(state.costoAlquiler);
        }
    },
    cambiarSaldoInsuficiente(state) {
        state.saldoInsuficiente = false;
    },
    devolverPeliculas(state) {
        state.costoAlquiler = 0
        state.listaPeliculas = []
    }
}

export const user = {
    namespaced: true,
    state,
    mutations
}