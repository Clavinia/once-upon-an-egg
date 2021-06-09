
<template>
    <div class="header p-3">
        <div class="container text-center">
            <nav>
                <div class="row justify-content-right">
                    <div class="col">I'm a header</div>
                </div>
            </nav>

        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '~assets/css/variables';

.header {
    background-color: $color-accent;
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
