var array = ["4758TL1",
              "4758TL2",
              "4758TL3",
              "4758TL4",
              "8426BFA",
              "8426BFB",
              "8426BFC",
              "8426BFD",
"8291A", "8291B", "8291D", "8165-3"];

//Create and append select list
var unitDiv = document.getElementById("unit");
var selectList = document.createElement("select");
selectList.setAttribute("id", "unitSelect");
selectList.setAttribute("class", "mdl-textfield__input");

unitDiv.appendChild(selectList);
var option = document.createElement("option");
option.setAttribute("value", "");
selectList.appendChild(option);

//Create and append the options
for (var i = 0; i < array.length; i++) {
    option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    selectList.appendChild(option);
}
