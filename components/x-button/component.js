import { template, tagName } from "./template.js";
import { Cmp } from "/library";

Cmp(tagName, (Lib) => {
  return class extends Lib {
    constructor() {
      super();
      if (!this.getAttribute("rendered")) {
        this.innerHTML = template;
      }
    }
  };
});
