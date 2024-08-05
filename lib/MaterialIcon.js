import { DomNode } from "@common-module/app";
export default class MaterialIcon extends DomNode {
    constructor(iconName) {
        super(("span.icon.material-icon.material-symbols-outlined.notranslate." +
            iconName));
        this.text = iconName;
    }
}
//# sourceMappingURL=MaterialIcon.js.map