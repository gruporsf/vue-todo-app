<template>
  <h1>Todo APP</h1>

  <div v-if="!editMode">
    <Button @click="newTodo">Novo</Button>

    <!--Envia os dados da  variavel todos para o componente todo-list atraves das props-->
    <todo-list v-bind:todos="todos"></todo-list>
  </div>

  <todo-item v-if="editMode" @cancel="cancel" @saveTodo="saveTodo"></todo-item>
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
      todos: [],
    }
  },
  methods: {
    newTodo() {
      this.editMode = true;
    },
    cancel() {
      this.editMode = false;
    },
    saveTodo(todo) {
      this.todos.push(todo);

      //guarda os valor da variavél no navegador do usuário para serem recuperados posteriormente
      localStorage.setItem("todos", JSON.stringify(this.todos));

      this.editMode = false;
    },
  },
  created() {
    const todos = localStorage.getItem("todos");

    if(todos){
      this.todos = JSON.parse(todos);
    }

    console.log(todos);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
