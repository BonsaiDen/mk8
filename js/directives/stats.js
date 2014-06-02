angular.module('app').directive('stats', function() {

    var ranges = {

        character: {
            speed: [2.5, 3.75, 4.25, 5],
            acceleration: [2.25, 2.5, 3, 4],
            weight: [2.5, 3.5, 4.0, 5],
            handling: [2.5, 3, 4.25, 5],
            traction: [3.5, 3.75, 4.25, 5]
        },

        part: {
            speed: [-1.0, 0, 1, 2],
            acceleration: [-1.0, 0, 1, 2],
            weight: [-1.0, 0, 1, 2],
            handling: [-1.0, 0, 1, 2],
            traction: [-1.0, 0, 1, 2]
        }

    };


    var rating = ['horrible', 'bad', 'good', 'excellent'];
    function info(element, $scope, attr) {

        var e = element.find('.' + attr);

        e.removeClass('horrible normal bad good excellent');

        if ($scope[attr] === 0) {
            e.addClass('normal');

        } else {
            for(var i = 0, l = $scope.range[attr].length; i < l; i++) {
                if ($scope[attr] < $scope.range[attr][i]) {
                    break;
                }
            }

            e.addClass(rating[i]);

        }

    }

    function directive($scope, element, attrs) {

        $scope.speed = 0;
        $scope.acceleration = 0;
        $scope.weight = 0;
        $scope.handling = 0;
        $scope.traction = 0;

        $scope.info = attrs.info;
        $scope.range = attrs.range ? ranges[attrs.range] : [];

        $scope.$watch('data', function(s) {

            if (s) {

                $scope.speed = s.speed;
                $scope.acceleration = s.acceleration;
                $scope.weight = s.weight;
                $scope.handling = s.handling;
                $scope.traction = s.traction;

                if ($scope.info) {
                    info(element, $scope, 'speed');
                    info(element, $scope, 'acceleration');
                    info(element, $scope, 'weight');
                    info(element, $scope, 'handling');
                    info(element, $scope, 'traction');
                }

            }

        });

    }

    return {
        restrict: 'A',
        scope: {
            data: '=stats',
            change: '@change'
        },
        templateUrl: 'template/directives/stats.html',
        link: directive
    };

});


