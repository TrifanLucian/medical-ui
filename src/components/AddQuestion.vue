<template>
  <div>
    <h2>Add a new question</h2>
    <form @submit.prevent="addQuestion">
      <div>
        <label for="question_text">Question:</label>
        <textarea id="question_text" v-model="question.question_text"></textarea>
      </div>
      <div>
        <label for="answer_a">Answer A:</label>
        <input type="text" id="answer_a" v-model="question.answer_a">
      </div>
      <div>
        <label for="answer_b">Answer B:</label>
        <input type="text" id="answer_b" v-model="question.answer_b">
      </div>
      <div>
        <label for="answer_c">Answer C:</label>
        <input type="text" id="answer_c" v-model="question.answer_c">
      </div>
      <div>
        <label for="answer_d">Answer D:</label>
        <input type="text" id="answer_d" v-model="question.answer_d">
      </div>
      <div>
        <label for="answer_e">Answer E:</label>
        <input type="text" id="answer_e" v-model="question.answer_e">
      </div>
      <div>
        <label for="correct_answer">Correct Answer:</label>
        <input type="text" id="correct_answer" v-model="question.correct_answer">
      </div>
      <button type="submit">Add Question</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      question: {
        question_text: '',
        answer_a: '',
        answer_b: '',
        answer_c: '',
        answer_d: '',
        answer_e: '',
        correct_answer: ''
      },
      message: ''
    };
  },
  methods: {
    addQuestion() {
      const token = localStorage.getItem('token');
      axios.post('http://localhost:3000/api/biology-questions', this.question, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        this.message = response.data.message;
      })
      .catch(error => {
        console.error('There was an error adding the question:', error);
        this.message = 'Error adding question';
      });
    }
  }
};
</script>

<style>
/* Stilizare de bază */
</style>
