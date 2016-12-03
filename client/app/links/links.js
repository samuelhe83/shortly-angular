angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // console.log(Links.getAll());
  // run(Links.getAll());
  // Links.getAll();
  $scope.data = {};
  
  Links.getAll().then(function(links) {
    $scope.data.links = links;
  });
  // $scope.data.links = Links.getAll();
  


});
