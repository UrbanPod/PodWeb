import { toDirective } from "../../utils/angular_wrappers/to_directive";

class DirectiveFoundation {
  constructor() {
    console.log("Hello world!");
  }
}

toDirective("directiveFoundation", "js/components/foundation/directive_foundation.html", DirectiveFoundation);
