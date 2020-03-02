<template>
    <div class="input-container">
        <textarea
            v-if="multiline"
            :rows="rows"
            :class="[...classes, 'multiline-input']"
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
        />
        <input
            v-else
            v-bind="$attrs"
            type="text"
            :class="classes"
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
        />
        <label class="label">{{ label }}</label>
    </div>
</template>
<script lang="ts">
import Vue from "vue";

type ClassPropType = string | Array<string | Record<string, boolean>>;
export default Vue.extend({
    props: {
        value: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        multiline: {
            type: Boolean,
            default: false,
        },
        rows: {
            type: Number,
            default: 10,
        },
    },
    computed: {
        classes(): ClassPropType {
            return ["input", { "offset-label": this.value.length > 0 }];
        },
    },
    inheritAttrs: false,
});
</script>
<style lang="scss" scoped>
.input-container {
    position: relative;
    margin-top: 1em;
}

$final-top-offset: -1.3em;
$animation-duration: 0.2s;
$animation-delay: 0.1s;

.label {
    position: absolute;
    left: 0.3em;
    top: 0.2em;
    font-size: 0.8em;
    transition: top $animation-duration ease $animation-delay,
        color $animation-duration;
    color: $color-light-text;
    pointer-events: none;
}

.input {
    padding: 0.5em;
    width: 200px;
    resize: none;
    border: 1px solid transparent;
    border-radius: $border-radius;
    border-bottom-color: $color-separator;
    transition: border-color $animation-duration ease-out;
    &:hover,
    &:focus {
        & ~ label {
            top: $final-top-offset;
            transition: top $animation-duration ease;
        }
    }
    &:hover {
        border-color: $color-separator;
        transition: border-color $animation-duration ease-out $animation-delay;
    }
    &:focus {
        border-color: $color-primary;
        transition: border-color;
        & ~ label {
            color: $color-primary;
        }
    }
}

.multiline-input {
    border-color: $color-separator;
}

.offset-label {
    & ~ label {
        top: $final-top-offset;
        transition: top $animation-duration ease, color $animation-duration;
    }
    border-color: $color-separator;
}
</style>
