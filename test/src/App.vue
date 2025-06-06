<template>
  <div class="app-container">
    <FormComponent @add-character="addCharacter" />
    <TableComponent :characters="characters" />
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import TableComponent from "./components/TableComponent.vue";

export default {
  components: {
    FormComponent,
    TableComponent,
  },
  data() {
    return {
      characters: [], // Array to store character data
    };
  },
  methods: {
    addCharacter(characterData) {
      this.characters.push(characterData); // Add new character to array
    },
  },
};
</script>

<style scoped>
.app-container {
  text-align: center;
}
</style>


