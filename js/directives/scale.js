angular.module('app').directive('scale', function() {

    var rating = ['horrible', 'bad', 'good', 'excellent'];
    function info(element, $scope, attr) {

        var e = element.find('.' + attr);

        e.removeClass('horrible normal bad good excellent');

        e.css({
            width: ((100 / 6) * $scope[attr]) + '%'
        });

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
        $scope.range = {
            speed:        [2.5, 3.5,   4.5,  6],
            acceleration: [2,   3.5,   4.5,  6],
            weight:       [2,   3.25,  4.75, 6],
            handling:     [2.5, 3.5,   4.75, 6],
            traction:     [2,   3.5,   4.75, 6]
        };

        $scope.$watch('data', function(s) {

            if (s) {

                $scope.speed = s.speed;
                $scope.acceleration = s.acceleration;
                $scope.weight = s.weight;
                $scope.handling = s.handling;
                $scope.traction = s.traction;

                info(element, $scope, 'speed');
                info(element, $scope, 'acceleration');
                info(element, $scope, 'weight');
                info(element, $scope, 'handling');
                info(element, $scope, 'traction');

            }

        });

    }

    return {
        restrict: 'A',
        scope: {
            data: '=scale',
            change: '@change'
        },
        templateUrl: 'template/directives/scale.html',
        link: directive
    };

});



