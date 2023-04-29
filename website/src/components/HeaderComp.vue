<template>
    <header>
        <div class="logo">
            <img alt="logo" src="/map.png">
        </div>

        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

</template>

<script>
export default {
    name: "HeaderComp"
}
</script>

<style lang="scss" scoped>
.logo {
  height: 2.5rem;

  img {
    height: 100%;
  }
}


header {
  display: flex;

  nav {
    ul {
      display: flex;
      list-style: none;

      li {
        margin-left: 1rem;
      }
    }
  }
}

</style>