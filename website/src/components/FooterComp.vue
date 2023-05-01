<template>
    <footer>
        <div class="container">
            <nav id="footer-nav">
                <ul class="categories">
                    <li v-for="category in nav_categories" class="category">
                        <h3>{{ category.name }}</h3>
                        <ul class="links">
                            <li v-for="link in category.links" class="link">
                                <router-link :to="link.href">{{ link.name }}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <p>© 2023</p>
        </div>
    </footer>

</template>

<script>
export default {
    name: "FooterComp",
    data() {
        return {
            nav_categories: [
                {
                    name: "Company",
                    links: [
                        {
                            name: "About",
                            href: "/about"
                        },
                        {
                            name: "Contact",
                            href: "/contact"
                        },
                        {
                            name: "Impressum",
                            href: "/impressum"
                        }
                    ]
                },
                {
                    name: "Product",
                    links: [
                        {
                            name: "Features",
                            href: "/features"
                        },
                        {
                            name: "Pricing",
                            href: "/pricing"
                        },
                        {
                            name: "FAQ",
                            href: "/faq"
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../style.scss";

footer {
  background-color: $dark;
  color: $light;
  padding: 1rem;
  font-size: 1.2rem;
  height: 200px;
  width: calc(100% - 2rem);

  p {
    margin: 0;
  }
}

li {
  list-style: none;
}


#footer-nav .categories {
  display: flex;
  justify-content: flex-end;

  .category {
    margin-inline: 1rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    padding: 0;

    a {
      color: $dark_accent;
    }
  }

}

</style>