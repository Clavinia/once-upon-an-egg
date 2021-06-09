<template>
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col col-md-8">
                <h1 class="mb-3">{{ crackedEgg.text.title }}</h1>
                <h2 v-if="unknownState" class="mb-3">{{crackedEgg.text.subtitle}}</h2>
                <img v-if="crackedEgg" class="ini-egg p-3" :src="require(`~/assets/img/${crackedEgg.img}`)" alt="">

                <button class="btn btn-lg btn-block" @click="resetGame()">Try again</button>

                <!-- Logs -->
                <p class="mb-3">Egg: {{crackedEgg}}</p>
                <p class="mb-3">Unknown: {{unknownState}}</p>
                
            </div>
        </div>
    </div>
</template>

<script>
import unknown from '~/data/unknown.json';
export default {
    data() {
        return {
            unknownEgg: unknown
        }
    },
    methods: {
        resetGame: function() {
            this.$router.push('/');
            this.$store.commit('clearEgg');
            this.$store.commit('resetUnknown');
        },
    },
    computed: {
        crackedEgg() {
            if (this.$store.state.crackedEgg) {
                return this.$store.state.crackedEgg;
            }
            else {
                return this.unknownEgg;
            }
        },
        unknownState() {
            return this.$store.state.unknown;
        }
    },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables';

.ini-egg {
    max-height: 30vh;
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