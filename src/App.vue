<template>
  <h1>Todo APP</h1>

  <div v-if="!editMode">
    <Button @click="newTodo">Novo</Button>

    <!--Envia os dados da  variavel todos para o componente todo-list atraves das props-->
    <todo-list v-bind:todos="todos" @deleteTodo="deleteTodo" @editTodo="editTodo"></todo-list>
  </div>

  <todo-item v-if="editMode" @cancel="cancel" @saveTodo="saveTodo" v-bind:todo="todo"></todo-item>
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
      todo: null,
      nextId: 1,
    }
  },
  methods: {
    newTodo() {
      this.todo = null;
      this.editMode = true;
    },
    cancel() {
      this.editMode = false;
    },
    saveTodo(todo) {

      //Se for alteração
      if(todo.id){
        
        const index = this.todos.findIndex((item) => item.id === todo.id);

        this.todos[index] = todo;
      }
      else{
        //inclusão

        todo = {id: this.nextId, ...todo};

        this.todos.push(todo);       

        this.nextId++;
        localStorage.setItem("nextId", this.nextId);
      }

      //guarda os valor da variavél no navegador do usuário para serem recuperados posteriormente
      localStorage.setItem("todos", JSON.stringify(this.todos));

      this.editMode = false;
    },
    deleteTodo(index) {

      const todo = this.todos[index];

      if(confirm(`Deseja apagar a posição ${todo.id}`)){
        
        this.todos.splice(index, 1);

        //guarda os valor da variavél no navegador do usuário para serem recuperados posteriormente
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    },
    editTodo(index) {
      
      this.todo = this.todos[index];

      this.editMode = true;
    }
  },
  created() {
    const todos = localStorage.getItem("todos");

    if(todos){
      this.todos = JSON.parse(todos);
    }

    const nextId = localStorage.getItem("nextId");

    if(nextId){
      this.nextId = parseInt(nextId);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
