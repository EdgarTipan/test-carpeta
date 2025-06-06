<template>
  <div class="table-container">
    <h2>Character List</h2>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>City</th>
          <th>Country</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(character, index) in characters" :key="index">
          <td>{{ character.firstName }}</td>
          <td>{{ character.lastName }}</td>
          <td>{{ character.gender }}</td>
          <td>{{ character.city }}</td>
          <td>{{ character.country }}</td>
          <td>
            <img :src="character.image" alt="Character Image" class="table-image" />
          </td>
        </tr>
        <tr v-if="!characters.length">
          <td colspan="6">No characters added yet.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.table-container {
  position: relative;
  margin-top: 20px;
  padding: 20px;
}

h2 {
  color: #fff;
  font-size: 24px;
}

table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  background-color: rgba(255, 255, 255, 0.8);
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
}

th {
  background-color: #007bff;
  color: #fff;
}

td[colspan="6"] {
  color: #333;
  font-style: italic;
}

.table-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}
</style>