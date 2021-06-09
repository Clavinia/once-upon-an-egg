<template>
    <div>
        <div class="container text-center">

            <div v-if="this.$store.state.crackedEgg"><EggCracked /></div>

            <div v-else>
                <h2 class="mb-3" >Nothing to crack here yet...</h2>
                <h1>
                    <nuxt-link to="/"> Start the game</nuxt-link>
                </h1>
            </div>            

        </div>
    </div>

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>

