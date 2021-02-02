<template>
  <h1>Todo APP</h1>

  <div v-if="!editMode">
    <Button @click="newTodo">Novo</Button>

    <todo-list></todo-list>
  </div>

  <todo-item v-if="editMode"></todo-item>
</template>

<script>
import TodoList from './components/TodoList.vue';
import TodoItem from './components/TodoItem.vue';

export default {
  components: {
    TodoList,
    TodoItem,
  },
  data() {
    return {
      editMode: false,
    }
  },
  methods: {
    newTodo() {
      this.editMode = true;
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
