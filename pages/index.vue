<template>
    <div id="app">
    </div>
</template>

<script setup>
definePageMeta({
  redirect: '/home'
})
</script>

<style scoped>
#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background-color: #42b983;
    color: white;
    padding: 1rem;
    text-align: center;
}

main {
    flex: 1;
    padding: 1rem;
}

footer {
    background-color: #35495e;
    color: white;
    text-align: center;
    padding: 1rem;
}
</style>