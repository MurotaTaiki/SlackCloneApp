export const strict = false;

export const state = () => ({
    user: null
    // user: {
    //     email: 'test@example.com'
    // }
})

export const getters = {
    isAuthenticated(state){
        return !!state.user
    }
}

export const mutations = {
    setUser(state, user){
        state.user = user
    }
}

export const actions = {
    setUser(context, user){
        context.commit('setUser', user)
    }
}