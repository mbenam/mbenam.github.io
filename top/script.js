function parseTOSOrder(order){
  const months = {
      'JAN':'01',
      'FEB':'02',
      'MAR':'03',
      'APR':'04',
      'MAY':'05',
      'JUN':'06',
      'JUL':'07',
      'AUG':'08',
      'SEP':'09',
      'OCT':'10',
      'NOV':'11',
      'DEC':'12'
  };
  
  const putCall = {
      'PUT':'P',
      'CALL':'C'
  };

  order = order.replace(/[\+|\-]/g,'');
  
  var pattern = new RegExp('(BUY|SELL)\\s(\\d+)\\s([\\s|\\S].*?[VERTICAL|BUTTERFLY|CONDOR])\\s([\\S]+).*?(\\d+)\\s(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)\\s(\\d{2})\\s(.*?)\\s(CALL|PUT)','g');
  
  var matches = Array.from(order.matchAll(pattern))[0];

// for (const match of result) {
//     console.log(match[1]);
//   }
// console.log(matches);
  const ticker = matches[4];
  const year = matches[7];
  const month = months[matches[6]];
  const day = matches[5].length == 1 ? '0' + matches[5] : matches[5];
  const priceList = matches[8] + '/';
  const putOrCall = putCall[matches[9]];
  const orderType = matches[3];
  const buyOrSell = matches[1];
  const numContracts = parseInt(matches[2]);
  const symbolPrefix = '.' + ticker + year + month + day + putOrCall;
  
  var prices = [];
  pattern = new RegExp('(.*?)\\/','g');
  matches = Array.from(priceList.matchAll(pattern));
  matches.forEach(element => {
      prices.push(symbolPrefix + element[1])
  });
  
  var multipliers = [];
  
  if (orderType == 'BUTTERFLY'){
    if(buyOrSell == 'BUY'){
      multipliers.push((numContracts * 1).toString() + '*');
      multipliers.push('-' + (numContracts * 2).toString() + '*');
      multipliers.push('+' + (numContracts * 1).toString() + '*');
    } else {
      multipliers.push('-' + (numContracts * 1).toString() + '*');
      multipliers.push('+' + (numContracts * 2).toString() + '*');
      multipliers.push('-' + (numContracts * 1).toString() + '*');
      
    }
  }
  
  if (orderType == 'VERTICAL'){
    if(buyOrSell == 'BUY'){
      multipliers.push((numContracts * 1).toString() + '*');
      multipliers.push('-' + (numContracts * 1).toString() + '*');
    
    } else {
      multipliers.push('-' + (numContracts * 1).toString() + '*');
      multipliers.push('+' + (numContracts * 1).toString() + '*');
  
    }
  }
  
  var orderString = '';
  
  multipliers.forEach((value,index) => orderString = orderString + value + prices[index]);
  var expDate = month + '/' + day + '/20' + year; 
  var returnList = [];
  returnList.push(orderString);
  returnList.push(ticker);
  returnList.push(expDate);
  return returnList
}

function symbolCopy() {
  let copyText = document.getElementById("symbol");
  copyText.select();
  document.execCommand("copy");

}

function orderCopy() {
  let copyText = document.getElementById("orderCode");
  copyText.select();
  document.execCommand("copy");

}

function dateCopy() {
  let copyText = document.getElementById("expDate");
  copyText.select();
  document.execCommand("copy");

}

function codeCopy() {
  let copyText = document.getElementById("orderText");
  copyText.select();
  document.execCommand("copy");

}


function parseOrder(){
  const order = document.getElementById("orderText").value;
  const returnList = parseTOSOrder(order);
  document.getElementById("orderCode").value = returnList[0];
  document.getElementById("symbol").value = returnList[1];
  document.getElementById("expDate").value = returnList[2];
}
