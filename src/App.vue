<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/protected">Protected</router-link>
      <router-link v-if="isLoggedIn" to="/add-questions">Add Questions</router-link>
      <router-link v-if="isLoggedIn" to="/test">Go To Test</router-link>
      <span class="welcome-message">Welcome{{ username ? ', ' + username : '' }}!</span>
      <button @click="logout" v-if="isLoggedIn" class="logout-button">Logout</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: localStorage.getItem('username') || '',
    };
  },
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem('token');
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      this.username = '';
      this.$router.push('/');
    }
  },
  watch: {
    $route() {
      // Update username when route changes if token exists
      if (localStorage.getItem('token')) {
        this.username = localStorage.getItem('username');
      }
    }
  }
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  gap: 10px;
}
.welcome-message {
  margin-left: auto;
  margin-right: 10px;
}
.logout-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
