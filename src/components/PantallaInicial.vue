<template>
  <div class="hello">
    <header>
      <h1>STYLE GUIDE GENERATOR</h1>
      <h2>{{ msg }}</h2>
    </header>
    <div id="block-fonts">
      <span>Heading 1</span><span id="selectFont"></span> 
    </div>

    <router-link to="/preview"><button>GENERA VISTA</button></router-link>
  </div>
</template>

<script>
import { createDropDown, changeFont } from "@/components/fontChanger.js";

export default {
  name: "PantallaInicial",
  props: {
    msg: String,
  },
  data() {
    return {
      listOfFonts: [
        "Itim",
        "Roboto",
        "Open Sans",
        "Lato",
        "Nunito",
        "Montserrat",
        "Roboto Condensed",
        "Oswald",
        "Trispace",
        "Poppins",
        "Ubuntu",
      ],
    };
  },
  mounted() {
    createDropDown(this.listOfFonts);

    document.getElementById("listoffonts").addEventListener("change", () => {
      //Captura el valor
      console.log(document.getElementById("listoffonts").value);
      //Canvia la font
      changeFont(document.getElementById("listoffonts").value);
    });
  },
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
