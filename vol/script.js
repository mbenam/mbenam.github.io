function Init_html($scope) {
  $scope.ticker = 'SPY';
  $scope.t_price = 'http://www.ivolatility.com/nchart.j?charts=price,volume&amp;1=ticker*SPY,R*1,period*12,schema*options_big';
  $scope.t_volatility = 'http://www.ivolatility.com/nchart.j?charts=volatility,options_volume&amp;1=ticker*SPY,R*1,period*12,schema*options_big';
  $scope.t_chart = 'http://chart.finance.yahoo.com/z?s=SPY&t=1y&q=c&l=off&z=m&p=m50,m200';
}

function Ctrl($scope) {
  $scope.price = '';
  $scope.text = '';
  $scope.submit = function() {
    if (this.text) {
      this.ticker = this.text.toUpperCase();
      this.t_price = 'http://www.ivolatility.com/nchart.j?charts=price,volume&amp;1=ticker*'+this.text+',R*1,period*12,schema*options_big';
      this.t_volatility = 'http://www.ivolatility.com/nchart.j?charts=volatility,options_volume&amp;1=ticker*'+this.text+',R*1,period*12,schema*options_big';
      this.t_chart = 'http://chart.finance.yahoo.com/z?s='+this.text+'&t=1y&q=c&l=off&z=m&p=m50,m200';
      this.text = '';
    }
  };
}