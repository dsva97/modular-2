import { template, tagName } from "./template.js";
import { Component } from "../../lib/Component.js";

class User {
  constructor(obj) {
    for (const key in obj) {
      this[key] = obj[key];
    }
  }
  save() {
    this._id = "123123";
    return this;
  }
}

const server = () => {
  const hello = ({ email }) => `Hello ${email}`;

  const send = (body) => {
    console.log(body);
    const user = new User(body);
    return user.save();
  };
  return { send, hello };
};

export const FormComponent = Component({
  server,
  template,
  tagName,
});
