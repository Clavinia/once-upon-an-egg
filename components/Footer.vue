<template>
    <div class="footer">
        <div class="container p-2 text-center">
            <div>
                Need <nuxt-link to="/help">help</nuxt-link>?
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

@import '~assets/css/variables';

.footer {
    background: $color-accent;
    color: $color-lightest;
    a {
        font-weight: 600;
        &:link,
        &:hover,
        &:visited,
        &:active {
            color: $color-lightest;
        }
    }
}

</style>