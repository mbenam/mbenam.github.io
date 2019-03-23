var array = ["Kentrell Ambrose",
              "Darius Lanehart",
              "Ashley Batcher",
              "Lakia Flot",
              "Romaro Mathews",
              "Latanya Gibson"];

//Create and append select list
var tenantDiv = document.getElementById("tenant");
var selectList = document.createElement("select");
selectList.setAttribute("id", "tenantSelect");
tenantDiv.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    selectList.appendChild(option);
}
