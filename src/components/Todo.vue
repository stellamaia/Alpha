<template>
  <div>
    <div class="back">
      <b-row>
        <b-col class="descricao" cols="1"></b-col>
        <b-col cols="9" class="descricao">
          <button
            class="task-list"
            @click="$emit('toggle', todo)"
            :class="{ checkedButton: todo.checked }"
          >
          </button>
          <label :class="{ checked: todo.checked }" class="task-label">
            {{ todo.description }}</label
          >
        </b-col>

        <b-col cols="2" class="botao-deletar">
          <button @click="$emit('remove', todo)" class="button" title="Delete Task">
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
.checked {
  color: rgb(151, 151, 151) !important;

  text-decoration: line-through;
}
.checkedButton {
background-color: rgb(207, 87, 161)!important;
}
.descricao {
  text-align: start;
  padding: 10px;
}

.task-list {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid rgb(207, 87, 161);
  transition: 0.2s;
  background-color: rgb(255, 255, 255);
  appearance: none;
  cursor: pointer;
}
.task-list:hover {
  border-color: rgb(207, 87, 161);
  background-color: rgb(207, 87, 161);
  box-shadow: 0 0 0 2px rgba(238, 156, 167, 0.2);
}

span {
  padding-left: 20px;
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