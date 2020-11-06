

export function createDropDown(listOfFonts) {
  // Crea Select
  var sel = document.createElement("Select");
  sel.setAttribute("id", "listoffonts");

  //Add inside the span
  document.getElementById("selectFont").appendChild(sel);

  listOfFonts.forEach((element) => {
    //Crea opcio
    let opt = document.createElement("option");
    opt.setAttribute("value", element);
    var nod = document.createTextNode(element);
    opt.appendChild(nod);
    //append
    document.getElementById("listoffonts").appendChild(opt);
  });
}

export function changeFont(font) {
  WebFont.load({
    google: {
      families: [font] //listOfFonts, //xtoni  Només la font que toca.
    },
    fontactive: function (familyName, fvd) {
      //This is called once font has been rendered in browser
      // Your business logic goes here
      document.getElementsByTagName("span")[0].style.fontFamily = font;
        //"'Nunito', cursive";
      // Font Weight
      document.getElementsByTagName("span")[0].style.fontWeight = 700;
      // Italic
      // document.getElementsByTagName("p")[0].style.fontStyle = "italic";
      // font-weight bold = 700
      // font-weight normal = 400
    },
  });
}
