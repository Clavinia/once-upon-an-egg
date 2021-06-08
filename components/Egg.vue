<template>
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col col-md-8">
                <h1 class="mb-3">Oh, it's an egg!</h1>
                <h2 class="mb-3">I wonder which animal is inside.</h2>
                <img class="ini-egg p-3" src="~/assets/img/egg-test.svg" alt="">

                
                <h3 class="mt-3 mb-3">Maybe it's a... {{inputValue}} </h3>  
                <input class="input-field mb-3 mt-3" v-model="inputValue" type="text">
                <button class="btn btn-lg btn-block">Let's check!</button>
                
                
            </div>
        </div>
    </div>
</template>



<script>

const animals = import('~/data/animals.json');

export default {
    props: {
        inputValue: 'patito',

    }
}
</script>




<style lang="scss" scoped>
@import '~assets/css/variables';

.ini-egg {
    max-height: 30vh;
    max-width: 100%;
}

.input-field {
    @include transition(all, ease, .1s);
    display: block;
    margin: auto;
    width: 100%;
    font-size: 2rem;
    letter-spacing: .15rem;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    // border-radius: 1rem;
    color: $color-accent;
    border: 0px none transparent;
    border-bottom: .25rem solid $color-accent;
    &:focus-visible {
        outline: -webkit-focus-ring-color auto 0px;
        border-bottom: .25rem solid $color-accent2;
        color: $color-accent2;
    }
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