<template>
  <div>
    <h1>Welcome to the Dashboard</h1>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'DashBoard',
  methods: {
    ...mapActions(['logout']),
    handleLogout() {
      this.logout();
      this.$router.push('/');
    }
  }
};
</script>

<style>
/* Stilizare de bază */
</style>
