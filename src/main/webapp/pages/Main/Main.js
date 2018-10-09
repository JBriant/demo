Application.$controller("MainPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action with the variables inside this block(on-page-load) */
    $scope.onPageVariablesReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. $scope.Variables.staticVariable1.getData()
         */
    };

    /* perform any action with widgets inside this block */
    $scope.onPageReady = function() {
        /*
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. $scope.Widgets.byId(), $scope.Widgets.byName()or access widgets by $scope.Widgets.widgetName
         */
        //   $scope.Widgets.text1.datavalue = "hello world";
    };


    $scope.text1Click = function($event, $isolateScope) {
        $scope.Widgets.text1.datavalue = "hello world";
        $scope.Widgets.text3.datavalue = $scope.Widgets.text1.datavalue + " BRIAN " + $scope.Widgets.text2.datavalue;
    };


    $scope.grid2Select = function($event, $data) {
        $scope.Widgets.text2.datavalue = $data.username;
    };

}]);

Application.$controller("grid2Controller", ["$scope",
    function($scope) {
        "use strict";

        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("grid2_1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("grid3Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("grid4Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);