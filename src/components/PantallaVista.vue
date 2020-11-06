<template>
  <div class="hello">
    <header>
      <h1>STYLE GUIDE GENERATOR</h1>
      <h2>{{ msg }}</h2>
    </header>
    <router-link to="/preview"><button>GENERA VISTA</button></router-link>
  </div>
</template>

<script>

export default {
  name: "PantallaInicial",
  props: {
    msg: String,
  }
 
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: bisque;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
