import { UrbanPodApp } from '../../index.ts';

export function toDirective(
  directiveName : string,
  templateUrl : string,
  controller : Object // TODO: This should be typed as a class.
) : void {
  UrbanPodApp.directive(directiveName, function() : any {
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: templateUrl
    }
  });
}
