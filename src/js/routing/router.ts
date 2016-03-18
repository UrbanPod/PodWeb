declare var module : any;
import { UrbanPodApp } from "../index";

module.exports = function(UrbanPodApp : any) {
  UrbanPodApp.config(router);
}

function router($stateProvider : any, $urlProvider : any) : void {
  $stateProvider
    .state("users", {
      url: "/users",
      template: "<directive_user/>"
    })
    ;
}
