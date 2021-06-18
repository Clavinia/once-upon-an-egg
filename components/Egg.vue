<template>
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col col-md-10 col-lg-8 col-xl-6">
                <h1 class="mb-3">Oh, it's an egg!</h1>
                <h2 class="mb-4">I wonder which animal is inside.</h2>
                <div class="egg-container p-3 mt-2 mb-2" ref="eggcontainer">
                    <img 
                        :class="[ animate ? 'animateEgg' : '', 'ini-egg']"
                        :data-anicount="animationCount" 
                        src="~/assets/img/egg_whatisinside.svg" alt="">    
                </div>

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
            unknown: unknown,
            animate: false,
            animationCount: 3
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
        },
        getRandomInt: function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
        shakeTheEgg: function() {
            this.animate = true;
            console.log("I'm shaking " + this.animationCount + " times");
            setTimeout(() => { 
                this.animate = false; 
                this.animationCount = this.getRandomInt(1,5);
                this.$refs.eggcontainer.style.setProperty('--ani-iteration-count', this.animationCount);
                this.shakeTimer(this.getRandomInt(0,6), this.shakeTheEgg) 
                } , 1500);
        },
        shakeTimer: function(delay, e) {
            setTimeout(function(){
                e();
                console.log( "It took (mseconds): " + (delay * 1000 + 1500) );
            }, delay * 1000);
        }
    },
    mounted() {
        this.shakeTimer(this.getRandomInt(2,5), this.shakeTheEgg);
    }
}
</script>




<style lang="scss" scoped>
@import '~assets/css/variables';

#eggcontainer {
    --ani-iteration-count: 3;
}

// Animations
@keyframes eggShake1 {
    0% { transform:rotate(0deg) skew(0deg); }
    33% { transform:rotate(-5deg) skewX(3deg); }
    66% { transform:rotate(5deg) skewX(-3deg); }
    100% { transform:rotate(0deg) skew(0deg); }
}

@keyframes eggShake2 {
    0% { transform:rotate(0deg) skew(0deg); }
    33% { transform:rotate(5deg) skewY(3deg); }
    66% { transform:rotate(-5deg) skewX(-3deg); }
    100% { transform:rotate(0deg) skew(0deg); }
}

.ini-egg {
    // max-height: 30vh;
    height: clamp(25vh, 30vw, 30vh);
    width: auto;
    transition: all ease .2s;
    transform-origin: 50% 80%;
    // border: 1px solid red;
}

.animateEgg {
    animation-name: eggShake2;
    animation-duration: 250ms;
    animation-iteration-count: var(--ani-iteration-count, 3);
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