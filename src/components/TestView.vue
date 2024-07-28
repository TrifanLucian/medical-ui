<template>
  <div>
    <h1>Test Questions</h1>
    <form @submit.prevent="submitTest">
      <div v-for="(question, index) in questions" :key="question.id" class="question">
        <p>{{ index + 1 }}. {{ question.question_text }}</p>
        <div class="answers">
          <label>
            <input type="radio" :name="'question-' + question.id" :value="'a'" v-model="answers[question.id]">
            a. {{ question.answer_a }}
          </label>
          <label>
            <input type="radio" :name="'question-' + question.id" :value="'b'" v-model="answers[question.id]">
            b. {{ question.answer_b }}
          </label>
          <label>
            <input type="radio" :name="'question-' + question.id" :value="'c'" v-model="answers[question.id]">
            c. {{ question.answer_c }}
          </label>
          <label>
            <input type="radio" :name="'question-' + question.id" :value="'d'" v-model="answers[question.id]">
            d. {{ question.answer_d }}
          </label>
          <label>
            <input type="radio" :name="'question-' + question.id" :value="'e'" v-model="answers[question.id]">
            e. {{ question.answer_e }}
          </label>
        </div>
      </div>
      <button type="submit">Submit Test</button>
    </form>
    <div v-if="result">
      <h2>Results</h2>
      <p>You answered {{ correctAnswers }} out of {{ questions.length }} questions correctly.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      questions: [],
      answers: {},
      correctAnswers: 0,
      result: false
    };
  },
  created() {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:3000/api/biology-questions', {
      headers: {
        Authorization: token
      }
    })
      .then(response => {
        this.questions = response.data;
      })
      .catch(error => {
        console.error('There was an error fetching the questions:', error);
      });
  },
  methods: {
    submitTest() {
      this.correctAnswers = 0;
      this.questions.forEach(question => {
        if (this.answers[question.id] === question.correct_answer) {
          this.correctAnswers++;
        }
      });
      this.result = true;
    }
  }
};
</script>

<style>
.question {
  margin-bottom: 20px;
}
.answers {
  display: flex;
  flex-direction: column;
}
</style>
