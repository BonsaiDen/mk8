angular.module('app').directive('selector', function($timeout, $interval, localStorageService) {

    function directive($scope, element, attrs) {

        var saved = localStorageService.get('selection.' + attrs.key) || {};

        $scope.selection = {
            character: +saved.character || 0,
            body: +saved.body || 0,
            tires: +saved.tires || 0,
            glider: +saved.glider || 0
        };

        $scope.elements = {
            character: element.find('.character'),
            body: element.find('.body'),
            tires: element.find('.tires'),
            glider: element.find('.glider')
        };

        $scope.overall = {
            speed: 0,
            acceleration: 0,
            weight: 0,
            handling: 0,
            traction: 0
        };

        $scope.app = app;

        $scope.$watch('selection.character', function(c) {
            if (!isNaN(c)) {
                localStorageService.set('selection.' + attrs.key, $scope.selection);
            }
        });

        $scope.$watch('selection.body', function(c) {
            if (!isNaN(c)) {
                localStorageService.set('selection.' + attrs.key, $scope.selection);
            }
        });

        $scope.$watch('selection.tires', function(c) {
            if (!isNaN(c)) {
                localStorageService.set('selection.' + attrs.key, $scope.selection);
            }
        });

        $scope.$watch('selection.glider', function(c) {
            if (!isNaN(c)) {
                localStorageService.set('selection.' + attrs.key, $scope.selection);
            }
        });

        $timeout(function() {

            $scope.elements.character.find('option').each(function(i, e) {
                if (e.value !== '?') {
                    $(e).data('imagesrc', app.core.data.Characters[+e.value].img);
                }
            });

            $scope.elements.character.ddslick({
                width: 200,
                defaultSelectedIndex: $scope.selection.character
            });

            $scope.elements.body.find('option').each(function(i, e) {
                if (e.value !== '?') {
                    $(e).data('imagesrc', app.core.data.Bodies[+e.value].img);
                }
            });
            $scope.elements.body.ddslick({
                width: 200,
                defaultSelectedIndex: $scope.selection.body
            });

            $scope.elements.tires.find('option').each(function(i, e) {
                if (e.value !== '?') {
                    $(e).data('imagesrc', app.core.data.Tires[+e.value].img);
                }
            });
            $scope.elements.tires.ddslick({
                width: 200,
                defaultSelectedIndex: $scope.selection.tires
            });

            $scope.elements.glider.find('option').each(function(i, e) {
                if (e.value !== '?') {
                    $(e).data('imagesrc', app.core.data.Gliders[+e.value].img);
                }
            });

            $scope.elements.glider.ddslick({
                width: 200,
                defaultSelectedIndex: $scope.selection.glider
            });

            $interval(function() {

                $scope.selection.character = +$scope.elements.character.val() || $scope.selection.character;
                $scope.selection.body = +$scope.elements.body.val();
                $scope.selection.tires = +$scope.elements.tires.val();
                $scope.selection.glider = +$scope.elements.glider.val();

                var a = ['speed', 'acceleration', 'weight', 'handling', 'traction'],
                    b = [
                        app.core.data.Characters,
                        app.core.data.Bodies,
                        app.core.data.Tires,
                        app.core.data.Gliders
                    ];

                $scope.overall = {
                    speed: 0,
                    acceleration: 0,
                    weight: 0,
                    handling: 0,
                    traction: 0
                };

                ['character', 'body', 'tires', 'glider'].forEach(function(option, index) {

                    // something put in twice?
                    var p = b[index][$scope.selection[option]];
                    if (p) {
                        a.forEach(function(attr, index) {
                            $scope.overall[attr] += p[attr];
                        });
                    }
                });

            }, 50);

        }, 0);

    }

    return {
        restrict: 'A',
        scope: {
            key: '@key'
        },
        templateUrl: 'template/directives/selector.html',
        link: directive
    };

});

