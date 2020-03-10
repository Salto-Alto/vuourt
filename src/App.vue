<template>
    <div class="container">
        <NavBar />
        <Court />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "@/components/navigation/NavBar.vue";
import Court from "@/views/Court.vue";

type TodoItemProps = {
    message: string;
    id: number;
};

export default Vue.extend({
    name: "App",
    components: {
        NavBar,
        Court,
    },
});
</script>

<style lang="scss">
@import "@/styles/globalStyles.scss";

.title {
    align-self: center;
}
.new-item-form {
    display: flex;
    align-items: flex-end;
    align-self: flex-end;
}
</style>
