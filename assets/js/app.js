var mainApp  =  angular.module("mainApp" , []);

mainApp.controller("todoController" , function($scope){

    $scope.todo = [];
    $scope.completed = [];
    $scope.count = 0;
    $scope.completedCount = 0;
    $scope.onSubmit = function(){
        $scope.todo.push({"name": $scope.todoName,"active":false});
        console.log($scope.todo);
        $scope.count++;
    };
    $scope.deleteTodo = function($index){
            $scope.todo.splice($index,1);
            console.log($index);
        };
    $scope.deleteCompleted = function($index){
            $scope.completed.splice($index,1);
        };
    $scope.itemCompleted = function($index){
            if($scope.todo[$index].active == true){
                // console.log($scope.todo[$index].name);
                $scope.completed.push({"name":$scope.todo[$index].name, "active":true});
                $scope.deleteTodo($index);
                $scope.count--;
                $scope.completedCount++;
                // console.log($scope.completed);
        }
    };
    $scope.itemTodoAgain = function($index){
            if($scope.completed[$index].active == false){
                $scope.todo.push({"name":$scope.completed[$index].name, "active":false});
                $scope.deleteCompleted($index);
                $scope.completedCount--;
                $scope.count++;  
        }
    };
})