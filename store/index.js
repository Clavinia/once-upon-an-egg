
// State - here you save data
export const state = () => ({
    crackedEgg: '',
    unknown: true,
    patito: "Soy un pato"
})

export const mutations = {
    addEgg(state, egg) {
        state.crackedEgg = egg;
    },
    clearEgg(state) {
        state.crackedEgg = '';
    },
    eggUnknown(state, unkwown) {
        state.unknown = unkwown;
    },
    resetUnknown(state) {
        state.unknown = true;
    }
}