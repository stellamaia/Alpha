<template>
  <div class="app">
  
    <Pages msg="Welcome to Your Vue.js App"/>
    <div id="app">
    <h1 class="titulo">Alpha</h1>
    
    <img src="../img/fotoalpha.png" alt="" />
    <h2 class="login">Login</h2>
    <b-container class="content">
      <b-form>
        <b-form-input
          v-model="form.email"
          id="email"
          type="email"
          placeholder="User email"
        >
        </b-form-input>
  
        <b-form-input
          v-model="form.password"
          id="password"
          type="password"
          placeholder="User password"
        >
        </b-form-input>
      </b-form>
    </b-container>
    <b-container>
      <b-link class="link" href="#">Forgot Password</b-link>
    </b-container>
<router-link  to="/adicionartarefa"><button class="botao-hover color-1" >Sign in</button></router-link>
    
  </div>

    
  </div>
</template>

<script>
// @ is an alias to /src
import Pages from '@/components/Pages.vue'

export default {
  name: 'PaginaPrincipal',
   data() {
    return {
      form: {
        nome: "",
        password: "",
      },
    };
  },
  components: {
    Pages
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}
.app{
background: linear-gradient(#e66464bd, #6e78e0d7);
   
}
.titulo {
  color: rgba(148, 32, 100, 0.849);
}
img {
  height: 200px;
}
.login {
  color: white;
  font-size: 30px;
}
#email,
#password {
  border-radius: 18px;
  border: none;
  padding: 15px;
  height: 40px;
  outline: none;
}
.form-control {
  margin-bottom: 10px;
}
.link {
  color: rgb(255, 255, 255);
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 11px;
}
.link:hover {
  color: rgb(155, 155, 155);
  cursor: pointer;
}
.botao-hover {
  width: 120px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 40px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.botao-hover:hover {
  background-position: 100% 0;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.botao-hover:focus {
  outline: none;
}
.botao-hover {
  background-image: linear-gradient(
    to right,
    #ed6ea0,
    #6972ec,
    #ed6ea0,
    #6972ec
  );
  box-shadow: 0 4px 15px 0 rgba(106, 52, 194, 0.75);
}
</style>