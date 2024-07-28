<template>
  <div>
    <h1>Home</h1>
    <form @submit.prevent="login" v-if="!isLoggedIn">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      message: '',
      isLoggedIn: !!localStorage.getItem('token')
    };
  },
  methods: {
    login() {
      axios.post('http://localhost:3000/api/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', this.username);  // Stochează numele utilizatorului
        this.isLoggedIn = true;
        this.message = 'Login successful!';
        this.$router.push('/');
      })
      .catch(error => {
        console.error('There was an error logging in:', error);
        this.message = 'Invalid username or password';
      });
    },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      this.isLoggedIn = false;
      this.message = 'Logged out successfully!';
      this.$router.push('/');
    }
  }
};
</script>

<style>
/* Stilizare de bază */
</style>
