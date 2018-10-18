var app = angular.module( 'koriwasiApp',[]);


app.controller('mainCtrl',['$scope', function($scope)
{

}]);
// Fin
// ================================================
//   Rutas
// ================================================
app.config([ '$routeProvider', function($routeProvider){

	$routeProvider
	//ponemos orden de trabajo primero porque hay errores si lo quitamos
		.when('/',{
			templateUrl: 'index.html',


		})


		.otherwise({
			redirectTo: '/'
		})

}]);
