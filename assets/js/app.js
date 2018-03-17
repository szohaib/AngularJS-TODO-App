var mainApp  =  angular.module("mainApp" , []);

mainApp.controller("todoController" , function($scope){

    $scope.todo = [];
    $scope.count = 0;
    $scope.onSubmit = function(){
        $scope.todo.push({"name": $scope.todoName,"active":false});
        console.log($scope.todo);
        $scope.count++;
    }
    
    // $scope.toggleActive = function(s){
    //     s.active  = !s.active;
    // }
    $scope.sub = function(s){
    for(var i=0;i< $scope.todo.length;i++)
    {
        // console.log($scope.todo[i].active)
       
        if($scope.todo[i].active == true)
        {
            $scope.count--;
            
            
        }
        else if($scope.todo[i].active == false){
            $scope.count++;
        }
       
    }
};
})