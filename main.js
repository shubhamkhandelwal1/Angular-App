
var mainApp = angular.module("mainApp", ['ngRoute']);

  mainApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                    when('/home', {
                        templateUrl: 'home.html',
                        controller: 'UserController'
                    }).
                    when('/users', {
                        templateUrl: 'users.html',
                        controller: 'UserController'
                    }).
                    when('/users/:id', {
                        templateUrl: 'singleUser.html',
                        controller: 'IdController'
                    }).
                    when('/post', {
                        templateUrl: 'post.html',
                        controller: 'PostController'
                    }).
                    when('/post/:id', {
                        templateUrl: 'singlePost.html',
                        controller: 'IdPostController'
                    }).
                    when('/post/new', {
                        templateUrl: 'home.html',
                        controller: 'PostController'
                    }).
                    otherwise({
                        redirectTo: '/home'
                    });
        }]);

 
mainApp.controller('UserController', function($scope) {
    $scope.users = [
        {id : 1000,name: 'Mark Waugh', city:'New York', phone:'9888831309'},
        {id : 2000, name: 'Steve Jonathan', city:'London',phone:'9888831909'},
        {id : 3000, name: 'John Marcus', city:'Paris',phone:'8888831309'}
    ];
    
    $scope.message = "Click on the hyper link to view the students list.";
});
var details = [
         {id : 1000,name: 'Mark Waugh', city:'New York', phone:'9888831309',todo:['Learn Angular2','Create app']},
         {id : 2000, name: 'Steve Jonathan', city:'London',phone:'9888831909',todo:['Learn Bootstrap4','Create app']},
         {id : 3000, name: 'John Marcus', city:'Paris',phone:'8888831309',todo:['Learn Angular2','Create app']}
     ];
var commentDetail =[
                    {id : 1000 , postid:1 ,comments:['first','second']},
                    {id : 2000 , postid:2 ,comments:['first 2000','second 2000']},
                    {id : 3000 , postid:3 ,comments:['first 3000','second 3000']}
     ];
var post = [
               {postid : 1, title: 'Post on Angular', description:'Learn Materials.angular', author:'Smith'},
               {postid : 2, title: 'Post on Bootstrap', description:'Responsive design building',author:'John'},
               {postid : 3, title: 'Post on HTML5', description:'HTML5 is cool',author:'Tim'}
           ];
mainApp.controller('PostController', function($scope) {
    $scope.post = [
        {postid : 1, title: 'Post on Angular', description:'Learn Materials.angular', author:'Smith'},
        {postid : 2, title: 'Post on Bootstrap', description:'Responsive design building',author:'John'},
        {postid : 3, title: 'Post on HTML5', description:'HTML5 is cool',author:'Tim'}
    ];
    $scope.addEntry = function() {
    	$scope.post.push($scope.newdata);
    	$scope.newdata='';
    }
    
});

mainApp.controller('IdController', function($scope,$routeParams) {
    //$scope.detail=$routeParams;
	for(i=0;i<details.length;i++)
	{
		if(details[i].id==$routeParams.id)
		{
			$scope.detail=details[i];
		}
		
	}
	for(i=0;i<commentDetail.length;i++)
	{
		if(commentDetail[i].id==$routeParams.id)
		{
			$scope.comment= commentDetail[i];
		}
		
	}
 
});
mainApp.controller('IdPostController', function($scope,$routeParams) {
    var userid;
	for(i=0;i<post.length;i++)
	{
		if(post[i].postid==$routeParams.id)
		{
			$scope.postdetail=post[i];
		}
		
	}
	for(i=0;i<commentDetail.length;i++)
	{
		if(commentDetail[i].postid==$routeParams.id)
		{
			$scope.commentpost=commentDetail[i];
			 userid=commentDetail[i].id;
	
		}
		
	}
	for(i=0;i<details.length;i++)
	{
		if(details[i].id==userid)
		{
			$scope.postUserDetail=details[i];
		}
		
	}
 
});