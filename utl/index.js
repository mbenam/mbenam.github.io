expense_url = 'https://api.airtable.com/v0/appXiTCoSdTmd4bDY/Expenses?fields[]=Expense%20Type&fields[]=Date';

authorization = {headers: { Authorization: "Bearer keypLu3etR0QPhcYf" }};

months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

monthlyExp = [];
datasets = [];
exp_types = 'Expense Type';

properties.forEach((value)=>{
  expense_url = expense_url + '&fields[]=' + value;
});


const getExpense = async () => {
    const response = await fetch(expense_url, authorization);
    const json = await response.json();
    temp = JSON.stringify(json).slice(11,-1);
    expense = JSON.parse(temp);
};  
  
const getMonthlyExp = async() => {
  properties.forEach(()=> monthlyExp.push([0,0,0,0,0,0,0,0,0,0,0,0]));
  
  expense.forEach((exp_record)=>{
  exp_date = exp_record.fields.Date;
  exp_type = exp_record.fields[exp_types];
    
  properties.forEach((property,index)=>{
  
    property_exp = exp_record.fields[property];
    if(property_exp != 0 && exp_type == 'recgilpnZrKSIDaWk'){
       month = Number(exp_date.slice(5,-3))-1;
       monthlyExp[index][month] = monthlyExp[index][month] + property_exp;
    }
    
  });
  
});
  
};


const createDataset = async() => {
  properties.forEach((property, index)=>{
  
  datasets.push({data:monthlyExp[index],
          label:properties[index],
          borderColor:colors[index],
          fill:false
         });
  
     });
};

const createChart = async() => {
  
  linedata = {type:'line',
           data:{
                  labels:months,
                  datasets:datasets,
                },
           options:{
             title: {
                      display: true,
                      text: 'Utilities Expense by Month'
                    }
                   }
          
          };

  new Chart(document.getElementById("line-chart"),linedata);
  
};



const main = async () => {
  //await getProperties();
  await getExpense();
  await getMonthlyExp();
  await createDataset();
  await createChart();

}

main();
