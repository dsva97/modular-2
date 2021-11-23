import { template, tagName } from "./template.js";
import { Component } from "../../lib/Component.js";

const server = () => {
  const send = (body) => {
    body.status = "Pasó por el servidor :)";
    console.log("Hola en el servidor! :D");
    return body;
  };
  return { send };
};

export const FormComponent = Component({
  server,
  template,
  tagName,
});
