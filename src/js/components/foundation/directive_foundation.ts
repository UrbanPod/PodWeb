import { toDirective } from "../../utils/angular_wrappers/to_directive";
import { getPath } from "../../utils/path_provider";
declare var __filename : any;
declare var __dirname : any;

class DirectiveFoundation {
  constructor() {
    console.log("Hello world!");
  }
}

console.log(getPath());
toDirective("directiveFoundation", "js/components/foundation/directive_foundation.html", DirectiveFoundation);
