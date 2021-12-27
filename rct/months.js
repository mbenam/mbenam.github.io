var year = "2022";
var array = ["January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"];


//Create and append select list
var monthDiv = document.getElementById("month");
var selectList = document.createElement("select");
selectList.setAttribute("id", "monthSelect");
selectList.setAttribute("class", "mdl-textfield__input");

monthDiv.appendChild(selectList);
var option = document.createElement("option");
option.setAttribute("value", "");
selectList.appendChild(option);

//Create and append the options
for (var i = 0; i < array.length; i++) {
    option = document.createElement("option");
    var s  = array[i]+", "+year;
    option.setAttribute("value", s);
    option.text = s;
    selectList.appendChild(option);
}
