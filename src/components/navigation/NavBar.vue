<template>
    <nav>
        <img src="@/assets/logo.png" class="logo" />
        <div class="tabs">
            <BaseTab text="Court" isActive />
            <BaseTab text="Groceries" />
            <BaseTab text="Recipes" />
        </div>
    </nav>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
<style lang="scss" scoped>
nav {
    height: 4.5em;
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100vw;
    background-color: $color-white-bg;
    box-shadow: 0 3px 5px $color-separator;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 0 30px;
}
.logo {
    height: 80%;
}
.tabs {
    display: flex;
    height: 100%;
}
</style>
