<script setup lang="ts">
import { ref } from "vue";
  const users = ref([]);

  const setUsers = async () => {
    const result = await fetch('api/users').then(res => res.json());
    users.value = result?.users || [];
  }
</script>

<template>
  <div>
    <header>
      <img alt="Vue logo" src="./assets/logo.png" />

      <h1>Olá Vue</h1>
      <button @click="setUsers">Carregar usuários</button>
    </header>

    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.age }} anos
      </li>
    </ul>
  </div>

</template>

<style scoped>
header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
