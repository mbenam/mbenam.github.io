  function loadImage(){

    const canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");

    var img = new Image();   // Create new img element
    img.onload = function() {
    context.drawImage(img, 0, 0);
    writeImage();

    };

    img.src = 'receipt.png';

  }

  function saveImage(){
  
  var canvas = document.getElementById('canvas');
  image1 = canvas.toDataURL("image/jpeg", 1.0) //.replace("image/jpeg", "image/octet-stream");
  var link = document.createElement('a');
  link.download = getReceiptNo()+".jpg";
  link.href = image1;
  link.click();
  }
  function getReceiptNo(){
    var d = new Date();
    var month = ("0" + (d.getMonth() + 1)).slice(-2);
    var year = (""+d.getYear()).slice(-2);
    var invNo =  document.getElementById("invoiceNo").value;
    var unit = document.getElementById("unitSelect").value;
    return(month+year+invNo+"-"+unit);
  }

  function getToday(){
    var today = new Date().toLocaleDateString('en-US', {  
	    day : 'numeric',
	    month : 'long',
	    year : 'numeric'
    });
    return(today);
  }

  function getTenant(){
    return(document.getElementById("tenantSelect").value);
  }

  function getRentMonth(){
    return(document.getElementById("monthSelect").value);
  }

  function getPrevBalance(){
    return(document.getElementById("prevBalance").value);
  }

  function getRemainingBalance(){
    return(document.getElementById("remainingBalance").value);
  }

  function getRent(){
    return(document.getElementById("rent").value);
  }

  function getRentToWords(){
    var rent = document.getElementById("rent").value;
    if (rent=="") return;
    var rentStr = numberToWords.toWords(rent);
    rentStr = rentStr[0].toUpperCase()+rentStr.slice(1);
    return(rentStr);
  }

  function getPaymentType(){
    return(document.getElementById("paymentType").value);
  }

  function writeImage(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    context.font = '32px serif';
    context.textAlign = 'left';
    context.fillText(getReceiptNo(), 680, 85);
    context.textAlign = 'center';
    context.fillText(getToday(), 335, 145);
    context.fillText(getTenant(), 340, 205);
    context.fillText(getRentToWords()+' dollars', 435, 270);
    context.fillText(getRentMonth(), 530, 330);
    context.textAlign = 'right';
    context.fillText('$'+getPrevBalance(), 250, 425);
    context.fillText('$'+getRemainingBalance(), 250, 505);
    context.font = '20px serif';
    context.fillText('X', 304, getPaymentType());
    context.font = '56px serif';
    context.fillText('$'+getRent(), 920, 195);

  }

  
  function writeBtnClick(){
    loadImage();
    const receiptPanel = document.getElementById('receiptPanel');
    receiptPanel.style.display="block";

    const inputPanel = document.getElementById('inputPanel');
    inputPanel.style.display="none";

    //writeImage();
      
  }

  function editBtnClick(){
    const receiptPanel = document.getElementById('receiptPanel');
    receiptPanel.style.display="none";

    const inputPanel = document.getElementById('inputPanel');
    inputPanel.style.display="block";

  }

  function saveBtnClick(){
    saveImage();
  }

  function pdfBtnClick(){
    var canvas = document.getElementById('canvas');
    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF();
    pdf.addImage(imgData, 'JPEG', 0, 0);
    pdf.save("download.pdf");
  }