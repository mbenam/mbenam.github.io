var url = "https://api.airtable.com/v0/appWd2eNiHpNACu1X/Monthly%20Summary?view=Monthly%20Profit&fields[]=Profit";

var authorization = {headers: { Authorization: "Bearer keypLu3etR0QPhcYf" }};
months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const getRecords = async () => {
    const response = await fetch(url, authorization);
    const json = await response.json();
    var temp = JSON.stringify(json).slice(11,-1);
    var myRe = /Profit":([-]?\d*)/g;
    var myArray = temp.match(myRe);
    var tmpArray = [];
    myArray.forEach(function(element){
      tmpArray.push(parseInt(element.slice(element.indexOf(':')+1)));
    });
    //console.log(tmpArray);
    return(tmpArray);
};

const main = async () => {
  var profit = await getRecords();
  //console.log(profit);
  var d = new Date();
  var n = d.getMonth();
  //console.log(n);
  var totalProfit = 0;
  var hash = '#';
  for (i = 0; i < n+1; i++) {
    var x = Math.floor(profit[i]/200);
    //console.log(x);
    document.write('<pre>'+months[i]+' '+hash.repeat(x)+' $'+profit[i]+'</pre><p>');
    totalProfit = totalProfit + profit[i];
    
  }
  document.write('<pre>Total YTD Profit: $'+totalProfit+'</pre><p>'); 
  
}

main();





  