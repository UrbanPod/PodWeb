import { toDirective } from "../../utils/angular_wrappers/to_directive";
import { getPath } from "../../utils/path_provider";

class DirectiveUser {
}

toDirective("directiveUser", "js/components/user/directive_user.html", DirectiveUser);
