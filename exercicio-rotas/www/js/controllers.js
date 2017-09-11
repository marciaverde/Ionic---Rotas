angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('LoginController', function($scope, $state) {

    $scope.login = function(){
        $state.go('app.posts')
    }
})

.controller('PostsController', function($scope) {
    $scope.posts = [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 }
    ];
})

.controller('RedesController', function($scope) {
    $scope.redes = [
        { title: 'Facebook', id: 1 },
        { title: 'Twitter', id: 2 },
        { title: 'Instagram', id: 3 },
    ];
})

.controller('DetalhePostController', function($scope, $stateParams) {
    $scope.id = $stateParams.id;
})

.controller('DetalheRedeController', function($scope, $stateParams) {
    $scope.id = $stateParams.id;
});
