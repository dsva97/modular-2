import { template, tagName } from "./template.js";
import { Cmp } from "/library";
import * as redux from "/redux/dist/redux.js";

Cmp(tagName, (Lib) => {
  return class extends Lib {
    constructor() {
      super();
      if (!this.getAttribute("rendered")) {
        this.innerHTML = template;
      }
      console.log("Hola!");
      console.log(redux);
    }

    connectedCallback() {
      if (this.isConnected) {
        this.$button.addEventListener("click", () => {
          this.onSubmit();
        });
      }
    }

    disconnectedCallback() {
      this.$button.removeEventListener("click", this.onSubmit.bind(this));
    }

    async onSubmit() {
      const body = {
        email: this.email,
        password: this.password,
      };
      const res = await this.server.send(body);
      const hello = await this.server.hello(body);
      console.log(hello);
      console.log(res);
    }

    get email() {
      return this.querySelector("#inputEmail").value;
    }

    get password() {
      return this.querySelector("#inputPassword").value;
    }

    get $button() {
      return this.querySelector("button");
    }
  };
});
