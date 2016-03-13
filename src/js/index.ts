declare var angular : any;
declare var require : any;

export var UrbanPodApp = angular.module("UrbanPodApp", []);

require("./components/user/directive_user.ts");
require("./components/foundation/directive_foundation.ts");
require("./components/navbar/directive_navbar.ts");
