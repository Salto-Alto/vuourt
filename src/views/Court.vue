<template>
    <div class="view">
        <new-lawsuit-form
            :possibleOpponents="possibleOpponents"
        ></new-lawsuit-form>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import NewLawsuitForm from "@/components/NewLawsuitForm.vue";
import Person from "../types/Person";

export default Vue.extend({
    components: {
        NewLawsuitForm,
    },
    data() {
        return {
            possibleOpponents: [
                {
                    id: "0",
                    firstName: "Nassim",
                    lastName: "Yagoub",
                    nickname: "The Ultimate Cuck",
                },
                {
                    id: "1",
                    firstName: "Martin",
                    lastName: "Lehoux",
                    nickname: "Master Protected",
                },
                {
                    id: "2",
                    firstName: "Samuel",
                    lastName: "Rincé",
                    nickname: "En Pause",
                },
                {
                    id: "3",
                    firstName: "Robin",
                    lastName: "Troesch",
                    nickname: "Auto-confirmation",
                },
                {
                    id: "4",
                    firstName: "Paul",
                    lastName: "Cacheux",
                    nickname: "En Chien",
                },
                {
                    id: "5",
                    firstName: "Erwan",
                    lastName: "de Lépinau",
                    nickname: "JetBrains",
                },
            ] as Person[],
        };
    },
});
</script>
<style lang="scss" scoped></style>
