<template>
    <p>Novo Item</p>

    <InputText v-model="description" />

    <div class="div-botoes">
        <Button @click="cancel" class="btn-voltar">Voltar</Button>
        <Button @click="saveTodo" class="p-button p-component p-button-success">Salvar</Button>
    </div>
</template>

<script>
export default {

  data() {
    return {
        description: '',
    }
  },
  props: {
    todo: Object
  },
  created() {
    if(this.todo){
      this.description = this.todo.description;
    }
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    saveTodo() {
        //Emite um evento para o componente pai, App.vue, passando o valor da variavel description
        this.$emit("saveTodo", { ...this.todo, description: this.description });
    },
  },
};
</script>

<style scoped>

.div-botoes{
    margin-top: 1rem;
}

.btn-voltar{
    margin-right: 1rem;
}

</style>