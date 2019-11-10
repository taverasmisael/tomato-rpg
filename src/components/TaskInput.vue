<template>
  <label for="taskNameInput" class="container">
    <span class="t--placeholder label">Task name</span>
    <input
      autocomplete="off"
      id="taskNameInput"
      name="taskNameInput"
      class="input"
      placeholder="Task name"
      :value="value"
      @input="input"
  /></label>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class TaskINput extends Vue {
  @Prop() input!: Function
  @Prop() value!: String
}
</script>

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: block;
  margin: 4px 0;
  padding: 4px;
  position: relative;
}

.label {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.input,
.input::placeholder {
  appearance: none;
  background: transparent;
  border: 0;
  display: block;
  outline: none;
  padding: 0;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1em;
  line-height: 1.19;
  padding: 8px;
  text-align: left;
}

.input::placeholder {
  padding: 0;
}
</style>
