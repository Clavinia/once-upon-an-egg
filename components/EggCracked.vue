<template>
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col col-md-8">
                <h1 class="mb-3">{{ crackedEgg.text.title }}</h1>
                <h2 v-if="isItUnknown" class="mb-3">{{ crackedEgg.text.subtitle }}</h2>
                <img class="ini-egg p-3 mt-2 mb-2" :src="require(`~/assets/img/${crackedEgg.img}`)" alt="">

                <button class="btn btn-lg btn-block" @click="resetGame()">Try again</button>

                <!-- Logs -->
                <p class="mb-3">Egg: {{crackedEgg}}</p>
                <p>Unknown egg data variable state: {{isItUnknown}}</p>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [],
    data() {
        return {
        }
    },
    methods: {
        resetGame: function() {
            this.$router.push('/');
            this.$store.commit('clearEgg');
        },
    },
    computed: {
        crackedEgg: function() {
            if (this.$store.state.crackedEgg) {
                return this.$store.state.crackedEgg;
            }
            else {
                return this.$store.state.unknownEgg;
            }
        },
        isItUnknown: function() {
            if (this.crackedEgg.name === 'unknown') {
                return true;
            }
            else {
                return false;
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables';

.ini-egg {
    // max-height: 30vh;
    max-height: clamp(25vh, 30vw, 30vh);
    max-width: 100%;
}

.btn {
    @include transition(all, ease, .2s);
    background: $color-accent;
    color: $color-lightest;
    border-radius: 1rem;
    font-size: 1.5rem;
    &:hover, &:active, &:focus {
        background: $color-accent2;
    }
}

</style>