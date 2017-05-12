/*global angular*/
/*global data */
/*global users */
var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http) {
  angular.forEach(data, function(ev, index) {
    ev.date = new Date(ev.date);
    ev.index = index+1;
  });

  $scope.data = data;
  $scope.win = {};
  $scope.win.lakku = noOfWins('lakku');
  $scope.win.raghu = noOfWins('raghu');
  $scope.win.siva = noOfWins('siva');
  $scope.win.bugga = noOfWins('bugga');
  $scope.win.arcot = noOfWins('arcot');
  $scope.win.ramesh = noOfWins('ramesh');
  $scope.win.harsh = noOfWins('harsh');
  $scope.win.sai = noOfWins('sai');
  $scope.win.khushboo = noOfWins('khushboo');
  $scope.total = total();
  $scope.amount = 25;
  
  $scope.users = users;
  $scope.allAmount = 0;
  $scope.allPaid = 0;
  for(var i=0; i<$scope.users.length; i++){
    $scope.allAmount += ($scope.total-$scope.win[users[i].key])*$scope.amount
    $scope.allPaid += users[i].paid;   
  };
  
  var us = {};
  us.lakku = data.lakku;
  us.raghu = data.raghu;
  us.siva = data.siva;
  us.bugga = data.bugga;
  us.arcot = data.arcot;
  us.ramesh = data.ramesh;
  us.harsh = data.harsh;
  us.sai = data.sai;
  us.khushboo = data.khushboo;
  
  findRank();
  
  var dataUrl = 'https://spreadsheets.google.com/feeds/list/1GiCFwCbMREQYUmHbEcOrn-DAsF24G9JyC6kQw3veaZk/od6/public/values?alt=json';
  var dataUrl = 'https://spreadsheets.google.com/feeds/list/0AtMEoZDi5-pedElCS1lrVnp0Yk1vbFdPaUlOc3F3a2c/od6/public/values?alt=json-in-script&callback=findRank';
  $http({method: 'JSONP', url: dataUrl}).success(function(res) {
    console.log(res);
  });
  
  //methods
  function noOfWins(attr) {
    var count = 0;
    for(var i=0; i<data.length; i++) {
      for(var j=0; j<data[i].users.length; j++) {
        if(data[i].users[j].name === attr) {
          if(data[i].result === data[i].users[j].team && data[i].result) {
            count++;
          }
          break;
        }
      }
    }
    return count;
  }
  
  function total() {
    var count = 0;
    for(var i=0; i<data.length; i++) {
      if(data[i].result) {
        count++;
      }
    }
    return count;
  }
  
  function findRank() {
    var i, j;
    for(i=0; i<data.length; i++) {
      for(j=0; j<data[i].users.length; j++) {
        data[i].users[j].wins = $scope.win[data[i].users[j].name];
      }
    }
  }
});

