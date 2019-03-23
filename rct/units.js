var array = ["4758TL1",
              "4758TL2",
              "4758TL3",
              "4758TL4",
              "8426BFA",
              "8426BFB",
              "8426BFC",
              "8426BFD"];

//Create and append select list
var unitDiv = document.getElementById("unit");
var selectList = document.createElement("select");
selectList.setAttribute("id", "unitSelect");
unitDiv.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    selectList.appendChild(option);
}
