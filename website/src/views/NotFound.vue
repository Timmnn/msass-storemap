<template>
    <div class="page404">
        <h1>404</h1>
        <VButton href="/" size="1">Go back home</VButton>

    </div>
</template>

<script>

import VButton from "../components/VButton.vue";

export default {
    name: "NotFound",
    components: {VButton},
}
</script>

<style scoped>
h1 {
    text-align: center;
    font-size: clamp(50px, 25vw, 300px);
}

.page404{
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>