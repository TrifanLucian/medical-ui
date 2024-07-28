<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
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
      message: ''
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
        this.message = 'Login successful!';
        this.$router.push('/protected');
      })
      .catch(error => {
        console.error('There was an error logging in:', error);
        this.message = 'Invalid username or password';
      });
    }
  }
};
</script>

<style>
/* Stilizare de bază */
</style>
