<template>
    <div class="centered-container container">
        <base-text-input
            v-model="title"
            label="Lawsuit name (max. 40 characters)"
            class="name-field"
            :maxLength="40"
        />
        <base-select v-model="opponent" label="Opponent" class="opponent-field">
            <option
                v-for="person in possibleOpponents"
                :key="person.id"
                :value="person.id"
            >
                <span class="complete-name" v-if="!isOnMobile">{{
                    person.firstName
                }}</span
                ><span> "{{ person.nickname }}" </span
                ><span class="complete-name" v-if="!isOnMobile">{{
                    person.lastName
                }}</span>
            </option>
        </base-select>
        <base-text-input
            v-model="details"
            multiline
            label="Details of the case"
            class="details-field"
        />
        <base-text-input
            v-model="requiredSentence"
            label="Required sentence (max. 50 characters)"
            :maxLength="50"
            class="sentence-field"
        />
        <div class="buttons-container">
            <base-button color="error" @click.native="resetForm">
                Reset Form
            </base-button>
            <base-button variant="contained" @click.native="submitForm">
                Let the trial begin !
            </base-button>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Person from "../types/Person";
import DetectMobileMixin from "./mixins/DetectMobileMixin";

export default Vue.extend({
    data() {
        return {
            title: "",
            opponent: "",
            details: "",
            requiredSentence: "",
        };
    },
    props: {
        possibleOpponents: {
            type: Array as () => Person[],
            required: true,
        },
    },
    methods: {
        resetForm(): void {
            console.log("reset");
        },
        submitForm(): void {
            console.log("reset");
        },
    },
    mixins: [DetectMobileMixin],
});
</script>
<style lang="scss" scoped>
.container {
    width: 100%;
    max-width: 700px;
}
.buttons-container {
    margin-top: 4em;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.name-field {
    width: 300px;
}

.opponent-field {
    width: 350px;
}

.details-field {
    width: 100%;
}

.sentence-field {
    max-width: 400px;
    width: 100%;
}
</style>
