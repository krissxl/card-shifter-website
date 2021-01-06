export default {
    state: () => ({
        name: null,
        id: null
    }),
    mutations: {
        userAuthStateChanged(state, payload) {
            state.name = payload.name;
            state.id = payload.id;
        }
    },
    actions: {
        userAuthStateChanged(context, user) {
            if (user) {
                context.commit('userAuthStateChanged', { name: user.displayName, id: user.uid })
            } else {
                context.commit('userAuthStateChanged', { name: null, id: null })
            }
        }
    }
}