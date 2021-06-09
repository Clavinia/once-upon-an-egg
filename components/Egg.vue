<template>
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col col-md-10 col-lg-8 col-xl-6">
                <h1 class="mb-3">Oh, it's an egg!</h1>
                <h2 class="mb-3">I wonder which animal is inside.</h2>
                <img class="ini-egg p-3 mt-2 mb-2" src="~/assets/img/egg-test.svg" alt="">

                <!-- Check the Egg logic -->
                <h3 class="mt-3 mb-3">Maybe it's a... <strong>{{ inputValue }}</strong> ? </h3>  
                <input class="input-field mb-3 mt-3" v-model="inputValue" type="text" placeholder="type what you think" @keydown.enter="checkTheEgg()">
                <button class="btn btn-lg btn-block" :disabled="inputValue ? false : true" @click="checkTheEgg()">Let's check!</button>
                
                <!-- Logs -->
                <!-- <p>JSON: {{ animalList }}</p>
                <p>Array: {{ animalList.length }}</p>
                <p>Length: {{ Object.keys(animalList).length }}</p> -->
                
                
            </div>
        </div>
    </div>
</template>



<script>

import animalsArray from '~/data/animalsArray.json';
import unknown from '~/data/unknown.json';

export default {
    props: {
        result: false,
    },
    asyncData ({ params }) {
        return { animals }
    },
    data() {
        return {
            inputValue: '',
            animalList: animalsArray,
            unknown: unknown
        };
    },
    methods: {
        checkTheEgg: function() {
            if (this.inputValue !== '') {

                let egg;
                let suggestedEgg = this.inputValue.toLowerCase();
                let possibleEggs = this.animalList;

                for ( let i = 0; i < possibleEggs.length; i++ ) {
                    if (possibleEggs[i].namesArray.includes(suggestedEgg)) {
                        egg = possibleEggs[i];
                        break;
                    }
                }
                if (egg) {
                    console.log("It's a match! It was a: " + egg.name);
                    this.$store.commit('addEgg', egg);
                }
                else {
                    console.log("Sorry, this egg doesn't contain that...");
                    this.$store.commit('addEgg', this.unknown);
                }

                // Go to results page
                this.$router.push('cracked');

            }

            else {
                console.log('Error! Input is empty');
            }
        }
    }
}
</script>




<style lang="scss" scoped>
@import '~assets/css/variables';

.ini-egg {
    // max-height: 30vh;
    max-height: clamp(25vh, 30vw, 30vh);
    max-width: 100%;
}

.input-field {
    @include transition(all, ease, .1s);
    display: block;
    margin: auto;
    width: 99%;
    font-size: 2rem;
    letter-spacing: .15rem;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    min-height: 30px;
    color: $color-accent;
    border: 0px none transparent;
    border-bottom: .25rem solid $color-accent;
    &:focus-visible {
        outline: -webkit-focus-ring-color auto 0px;
        border-bottom: .25rem solid $color-accent2;
        color: $color-accent2;
    }
    &::placeholder {
        opacity: .5;
        font-size: clamp(1rem, 3vw, 2rem); 
    }
}

.btn {
    @include transition(all, ease, .2s);
    background: $color-accent;
    color: $color-lightest;
    border-radius: 1rem;
    font-size: 1.5rem;
    &:hover, &:active, &:focus {
        &:not(:disabled) {
            background: $color-accent2;
        }
        
    }
    &:disabled {
        opacity: .5;
        cursor: not-allowed;
    }
}
</style>