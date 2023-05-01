<template>
    <header>
        <div class="logo">
            <router-link to="/"><img alt="logo" src="/map.png"></router-link>
        </div>
        <nav>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/pricing">Pricing</router-link>
                </li>
                <li><router-link to="/contact">Contact</router-link></li>
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