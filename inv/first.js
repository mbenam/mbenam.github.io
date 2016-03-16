var firstApp = angular.module('myApp', []);
firstApp.controller('myController', function ($scope) {
    $scope.price = 150000;
    $scope.rent = 1500;
    $scope.interest_rate = 4.5;
    $scope.term = 30;
    $scope.down_payment = 20;
    $scope.closing_cost = 3.5;
    $scope.tax_rate = 1.2;
    $scope.insurance = 1000;
    $scope.flood_insurance = 1200;
    $scope.hoa = 50;
    $scope.maintenance = 50;

});

firstApp.filter('monthly_payment', function(){
    return function(loan, interest, down_payment, term){
    var interest = interest/12/100;
    var term = term*12;
    var loan = loan*(100-down_payment)/100;
    var tmp1 = Math.pow(1+interest ,term ); 
    var payment =  (interest *loan *tmp1)/(tmp1-1); 
       
return payment;
    }
})