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
        <b-row>
          <b-col cols="9">
             <b-form >
              <b-form-group id="input-group-1" label-for="input-1">
            <b-form-input
              class="task-input"
              type="text"
              placeholder="Add New Task"
            ></b-form-input>
               </b-form-group>
               </b-form>
          </b-col>

          <b-col cols="2">
            <button class="ad" type="submit" value="">
              <img class="submit-task" src="../img/botao.png" alt="" />
            </button>
          </b-col>
        </b-row>
      </b-container>

      <div class="back">
        <b-row>
          <b-col cols="1">
            <input class="task-list" type="checkbox" />
          </b-col>
          <b-col cols="2">
            <label class="task-label" for="flexRadioDefault1"> Task </label>
          </b-col>
<b-col cols="7"> </b-col>
          <b-col cols="2" class="botao-deletar">
            <span title="Delete Task">
              <img class="delete-btn" src="../img/delete.png" alt="deletar" />
            </span>
          </b-col>
        </b-row>
      </div>

      <img class="main-img" src="../img/ilustracao.png" alt="ilustracao" />
      <h5 class="frase">Add a task to get started</h5>
    </div>
  </div>
</template>
<script>

export default {
  name:"AdicionarTarefa",
  data(){
    return{
      tarefas:[],
     




    }
  }
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

.back {
  background-color: #db98cb6b;

  align-items: center;
  padding: 8px;
  border-radius: 35px;
  margin-bottom: 12px;
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
.task-list {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid rgb(211, 130, 180);
  transition: 0.2s;

  flex-shrink: 0;
  appearance: none;
  cursor: pointer;
}
.task-list:hover {
  border-color: rgb(209, 80, 192);
  box-shadow: 0 0 0 2px rgba(238, 156, 167, 0.2);
}
.task-list:checked {
  background-size: 10px;
  border: 2px solid rgb(211, 130, 180);
  background-color: rgb(211, 130, 180);
}
.task-list:checked + label {
  color: #272727;
  text-decoration: line-through;
}
.task-label {
  color: #272727;

  font-size: 14px;

  transition: 0.2s;
  cursor: pointer;
}

.delete-btn {
  width: 18px;
  height: 18px;
  cursor: pointer;
}
input {
  outline: none;
}
ul {
  list-style: none;
  padding: 0;
}

.main-img {
  height: 340px;
}

.frase {
  color: #a4a4a788;
  height: 30px;
  text-align: center;
}
.ad {
  background-color: #e6646400;
}
</style>