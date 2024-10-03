import { DomNode } from "@common-module/app";
import { DomSelector } from "@common-module/universal-page";

export default class MaterialIcon extends DomNode {
  constructor(iconName: string) {
    super(
      ("span.icon.material-icon.material-symbols-outlined.notranslate." +
        iconName) as DomSelector,
    );
    this.text = iconName;
  }
}
