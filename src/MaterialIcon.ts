import { DomNode, DomSelector } from "@common-module/app";

export default class MaterialIcon extends DomNode {
  constructor(iconName: string) {
    super(
      ("span.icon.material-icon.material-symbols-outlined.notranslate." +
        iconName) as DomSelector,
    );
    this.text = iconName;
  }
}
