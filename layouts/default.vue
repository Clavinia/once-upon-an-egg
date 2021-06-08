<template>
    <div class="wrapper">
        <Header />
        <Nuxt id="nuxt" />
        <Footer />
    </div>
</template>

<style lang="scss" scoped>

.wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    #nuxt {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
}

</style>