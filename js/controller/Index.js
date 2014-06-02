app.controller.Index = function($scope, $timeout, $interval, $element, localStorageService) {

    var saved = localStorageService.get('selection') || {};

    $scope.selection = {
        character: +saved.character || 0,
        body: +saved.body || 0,
        tires: +saved.tires || 0,
        glider: +saved.glider || 0
    };

    $scope.elements = {
        character: $('#character'),
        body: $('#body'),
        tires: $('#tires'),
        glider: $('#glider')
    };

    $scope.overall = {
        speed: 0,
        acceleration: 0,
        weight: 0,
        handling: 0,
        traction: 0
    };

    $scope.hovered = {
        speed: null,
        acceleration: null,
        weight: null,
        handling: null,
        traction: null
    };

    $scope.app = app;

    $scope.$watch('selection.character', function(c) {
        if (!isNaN(c)) {
            localStorageService.set('selection', $scope.selection);
        }
    });

    $scope.$watch('selection.body', function(c) {
        if (!isNaN(c)) {
            localStorageService.set('selection', $scope.selection);
        }
    });

    $scope.$watch('selection.tires', function(c) {
        if (!isNaN(c)) {
            localStorageService.set('selection', $scope.selection);
        }
    });

    $scope.$watch('selection.glider', function(c) {
        if (!isNaN(c)) {
            localStorageService.set('selection', $scope.selection);
        }
    });

    $timeout(function() {

        $('#character > option').each(function(i, e) {
            if (e.value !== '?') {
                $(e).data('imagesrc', app.core.data.Characters[+e.value].img);
            }
        });

        $('#character').ddslick({
            width: 180,
            defaultSelectedIndex: $scope.selection.character + 1
        });

        $('#body > option').each(function(i, e) {
            if (e.value !== '?') {
                $(e).data('imagesrc', app.core.data.Bodies[+e.value].img);
            }
        });
        $('#body').ddslick({
            width: 220,
            defaultSelectedIndex: $scope.selection.body + 1
        });

        $('#tires > option').each(function(i, e) {
            if (e.value !== '?') {
                $(e).data('imagesrc', app.core.data.Tires[+e.value].img);
            }
        });
        $('#tires').ddslick({
            width: 200,
            defaultSelectedIndex: $scope.selection.tires + 1
        });

        $('#glider > option').each(function(i, e) {
            if (e.value !== '?') {
                $(e).data('imagesrc', app.core.data.Gliders[+e.value].img);
            }
        });

        $('#glider').ddslick({
            width: 210,
            defaultSelectedIndex: $scope.selection.glider + 1
        });

        $('#glider a').each(function(i, e) {
            $(e).on('mouseover', function() {
                console.log('over', i);
            });
            $(e).on('mouseout', function() {
                console.log('out', i);
            });
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

            // TODO does not work is random
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

};

