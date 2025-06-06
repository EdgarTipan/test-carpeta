<template>
  <div class="container">
    <div class="container-2"></div>
    <div class="form-container">
      <button @click="fetchCharacter">Get New Character</button>
      <form @submit.prevent="submitCharacter">
        <div class="form-group">
          <label>First Name:</label>
          <input v-model="formData.firstName" readonly />
        </div>
        <div class="form-group">
          <label>Last Name:</label>
          <input v-model="formData.lastName" readonly />
        </div>
        <div class="form-group">
          <label>Gender:</label>
          <input v-model="formData.gender" readonly />
        </div>
        <div class="form-group">
          <label>City:</label>
          <input v-model="formData.city" readonly />
        </div>
        <div class="form-group">
          <label>Country:</label>
          <input v-model="formData.country" readonly />
        </div>
        <div class="form-group">
          <label>Image URL:</label>
          <input v-model="formData.image" readonly />
        </div>
        <button type="submit" :disabled="!formData.firstName">Add to Table</button>
      </form>
    </div>
  </div>
</template>

<script>
import { fetchRandomCharacterFacade } from "@/clients/RandomUserClient.js";

export default {
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        gender: '',
        city: '',
        country: '',
        image: '',
      },
    };
  },
  methods: {
    async fetchCharacter() {
      // Clear form data
      this.formData = {
        firstName: '',
        lastName: '',
        gender: '',
        city: '',
        country: '',
        image: '',
      };

      const response = await fetchRandomCharacterFacade();
      const character = response.results[0];

      // Update form data with API response
      this.formData.firstName = character.name.first;
      this.formData.lastName = character.name.last;
      this.formData.gender = character.gender;
      this.formData.city = character.location.city;
      this.formData.country = character.location.country;
      this.formData.image = character.picture.large;

      // Log object with used parameters
      const logObject = {
        firstName: this.formData.firstName,
        lastName: this.formData.lastName,
        gender: this.formData.gender,
        city: this.formData.city,
        country: this.formData.country,
        image: this.formData.image,
      };
      console.log('Fetched Character Data:', logObject);
    },
    submitCharacter() {
      // Emit the form data to the parent
      this.$emit('add-character', { ...this.formData });
      // Clear form after submission
      this.formData = {
        firstName: '',
        lastName: '',
        gender: '',
        city: '',
        country: '',
        image: '',
      };
    },
  },
};
</script>

<style scoped>
.container-2 {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.form-container {
  position: relative;
  text-align: center;
}

button {
  margin: 20px 10px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.form-group {
  margin: 10px 0;
}

label {
  color: #fff;
  font-size: 18px;
  margin-right: 10px;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

input[readonly] {
  background-color: #f0f0f0;
  cursor: not-allowed;
}

input:focus {
  outline: none;
}
</style>