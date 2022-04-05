<template>
  <div class="tasklist">
    <div class="container">

      <b-row>
        <b-col cols="1">
          <router-link to="/">
            <img class="menu-img" src="../img/menu.png" alt="menu" />
          </router-link>
        </b-col>
      </b-row>

      <b-container>
        <b-form @submit.prevent="addTodo(todo)">
          <b-row>
            <b-col cols="10">
              <b-form-group id="input-group-1" label-for="input-1">
                <b-form-input
                  v-model="todo.description"
                  class="task-input"
                  type="text"
                  placeholder="Add New Task"
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="2">
              <button class="ad" type="submit" value="">
                <img v-if="todo.description" class="submit-task" src="../img/botao.png" alt="" />
                 <img v-else class="submit-task" src="../img/botao-2.png"  alt="" />
              </button>
              
            </b-col>
          </b-row>
        </b-form>
      </b-container>
    <h5  v-if="todos.length < 1" class="frase">Add a task to get started</h5>
 
        <img class="main-img" src="../img/ilustracao.png" alt="ilustracao" />
    
  <div style="height:30px; ">
      <todo class="todo-list"  v-for="t in todos" :key="t.id" @toggle="toggleTodo" :todo="t" />
  </div>
  </div>

  </div>
</template>
<script>
import  Todo from '../components/Todo'

export default {
  name: "AdicionarTarefa",
  components:{ Todo},
  
  data() {
    return { todos: [], todo: { checked: false } };
  },
  methods: {
    addTodo(todo) {
     if(todo.description){
        todo.id = Date.now();
      this.todos.push(todo);
      this.todo = { checked: false };
     }
    
    },
   toggleTodo (todo){
      const index = this.todos.findIndex(item => item.id === todo.id)
      if(index > -1){
        const checked = !this.todos[index].checked
        this.$set(this.todos, index, {...this.todos[index], checked});
      }
    }
  },
};
</script>

<style scoped>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  border: 0;
  padding: none;
  
  
}
.todo-list{
   z-index: 2;
  bottom: 350px;
  position:relative;
}
.tasklist {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#e906066b, #6e77e0b6);
}
.container {
  max-width: 480px;
  width: 100%;
  max-height: 100%;

  background-color: rgb(255, 255, 255);
  padding: 25px;
  border-radius: 25px;
  overflow: auto;
}
.menu-img {
  height: 30px;
}

.submit-task {
  width: 25px;
  height: 25px;
  cursor: pointer;

  border: none;
  color: #272727;
}

.imagem {
  padding: 0 20px 0 20px;
  z-index: 1;
  position: fixed;
}
.main-img {
  height: 340px;
}

.task-input {
  width: 100%;
  padding: 0 1px;
  outline: none;

  border: none;
  border-bottom: 1px solid #c0c0c0a9;
  background-color: transparent;
  box-shadow: none;
  border-radius: 0;
}
.task-input::placeholder {
  color: #272727;
}



.frase {
  color: #a4a4a788;
  height: 30px;
  text-align: center;
  padding-top: 30px;
}






.ad {
  background-color: #e6646400;
}
</style>