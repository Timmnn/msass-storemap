<template>
    <button :class="['size-'+size, type].join(' ')" class="v-button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "VButton",
    props: {
        size: {
            type: Number,
            default: 1
        },
        type: {
            type: String,
            default: "primary"
        }

    }
}
</script>

<style lang="scss" scoped>
@import "../style.scss";

.v-button {
  &.primary {
    background-color: $main;
    color: $light;
  }

  &.light {
    background-color: $light;
    color: $dark;
  }

  &.size-1 {
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

}
</style>