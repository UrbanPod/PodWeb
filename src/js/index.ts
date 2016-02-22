declare var angular : any;
declare var require : any;

export var UrbanPodApp = angular.module("UrbanPodApp", []);

// UrbanPodApp.directive("directiveFoundation", function() : any {
//   return {
//     restrict: 'AE',
//     replace: true,
//     templateUrl: "js/components/foundation/directive_foundation.html"
//   }
// });

// import * as foundation from "./components/foundation/directive_foundation.ts";
require("./components/foundation/directive_foundation.ts");
