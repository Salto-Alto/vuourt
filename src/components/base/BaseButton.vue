<template>
    <button v-on:click="$emit('click')" :class="variant">
        <slot />
    </button>
</template>

<script lang="ts">
import Vue from "vue";

type ButtonVariant = "contained" | "text";

export default Vue.extend({
    props: {
        variant: {
            type: String as () => ButtonVariant,
            default: "contained",
        },
    },
});
</script>

<style lang="scss" scoped>
@import "../../config/colorPalette.scss";
button {
    padding: 0.6em 1em 0.6em 1em;
    border-width: 0;
    font-size: 0.8em;
    position: relative;
}
button:enabled {
    cursor: pointer;
}
.contained {
    border-radius: 5px;
    background-color: $primary;
    box-shadow: 0 1px 3px grey;
    color: $white-bg;
    transition: box-shadow 0.15s ease-out, transform 0.15s ease-out;
}
.contained:disabled {
    box-shadow: none;
    background: $darker-bg;
}
.contained:hover:enabled:not(:active) {
    box-shadow: 0 2px 6px grey;
    transform: translate(0px, -2px);
    filter: brightness(105%);
}
.contained:active:enabled {
    box-shadow: none;
    filter: brightness(95%);
}

.text {
    color: $primary;
    font-size: 0.9em;
    font-weight: bold;
    background: rgba($primary, 0);
    transition: background 0.5s ease-in;
    &:disabled {
        color: $separator;
    }
    &:enabled {
        color: $primary;
        &::before,
        &::after {
            border: 1px solid transparent;
            width: 0;
            height: 0;
            box-sizing: inherit;
            content: "";
            position: absolute;
            transition: height 0.25s ease-out, width 0.25s ease-out 0.25s,
                border-color 0s 0.5s;
        }
        &::before {
            top: 0;
            left: 0;
        }
        &::after {
            bottom: 0;
            right: 0;
        }
        &:hover {
            background: rgba($primary, 0.08);
            transition: background 0.25s ease-in 0.25s;
            &::after,
            &::before {
                width: 100%;
                height: 100%;
                transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
            }
            &::before {
                border-top-color: $primary;
                border-right-color: $primary;
            }
            &::after {
                border-bottom-color: $primary;
                border-left-color: $primary;
            }
        }
        &:active {
            background: rgba($primary, 0.2);
            transition: background 0.25s;
        }
    }
}
</style>
