<template>
    <footer>
        <p>© 2023</p>
    </footer>

</template>

<script>
export default {
    name: "footer"
}
</script>

<style lang="scss" scoped>
@import "../style.scss";

footer {
  background-color: $dark;
  color: $light;
  padding: 1rem;
  text-align: center;
  font-size: 1.2rem;
  position: fixed;
  bottom: 0;
  width: 100%;

  p {
    margin: 0;
  }
}

</style>