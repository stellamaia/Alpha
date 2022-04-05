<template>
  <div>
    <div class="back">
      <b-row>
        <b-col cols="1"></b-col>
        <b-col cols="8" class="descricao">
          <button @click="$emit('toggle', todo)" class="task-list"></button>
          <label class="task-label">{{ todo.description }} </label>
        </b-col>

        <b-col cols="3" class="botao-deletar">
          <button class="button" title="Delete Task">
            <img class="delete-btn" src="../img/delete.png" alt="deletar" />
          </button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: { type: Object, required: true },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.back {
  background-color: #db98cb6b;
  z-index: 1;

  align-items: center;
  margin: 10px;
  border-radius: 35px;
}
.descricao {
  text-align: start;
  padding: 10px;
}

.task-list {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid rgb(211, 130, 180);
  transition: 0.2s;
  background-color: rgb(255, 255, 255);
  appearance: none;
  cursor: pointer;
}
.task-list:hover {
  border-color: rgb(148, 0, 128);
  box-shadow: 0 0 0 2px rgba(238, 156, 167, 0.2);
}
.task-list:checked {
  background-size: 10px;
  border: 2px solid rgb(211, 130, 180);
  background-color: rgb(182, 40, 127);
}

.task-label {
  color: #272727;
  font-size: 14px;
  margin-left: 7px;
  transition: 0.2s;
  cursor: pointer;
}
.botao-deletar {
  padding: 10px;
}

.button {
  background-color: #cf1b1b00;
  border: none;
}
.delete-btn {
  width: 18px;
  height: 18px;

  cursor: pointer;
}
</style>