app.directive('lessonHider', function(){
  return{
    restrict: 'E',
    templateUrl: 'lessonHider.html',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(s, e, a){
      s.getSchedule.then(function(response){
        s.schedule = response.data;

          s.schedule.forEach(function(scheduleDay){
            if(scheduleDay.lesson === s.lesson) {
              s.lessonDay = scheduleDay.weekday;
              element.css('text-decoration', 'line-through');
              return;
            }
          });
      });
    }
  }
})
