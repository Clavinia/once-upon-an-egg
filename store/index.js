
// Store - root file

// State - here you save data
export const state = () => ({
    crackedEgg: {},
    unknownEgg: require('~/data/unknown.json')
})

// Mutations - here we define methods to modify the state
// We access them with commit command: this.$store.commit('addEgg', egg)
export const mutations = {
    addEgg(state, egg) {
        state.crackedEgg = egg;
    },
    clearEgg(state) {
        state.crackedEgg = '';
    }
}

// Actions - Used to change the incoming data
// We access them with dispatch command: this.$store.dispatch(your info here)
export const actions = {

}

// Getters - Used to return filtered data
// We access them globally like this.$store.getters.yourGetters()
export const getters = {

}