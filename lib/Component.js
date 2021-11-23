import { CALLBACKS } from "../index.js";

export const Component =
  ({ server, template, tagName }) =>
  (props = {}) => {
    const callbacks = server ? server() || {} : {};
    CALLBACKS[tagName] = callbacks;
    const content = template(props);
    let html = `<${tagName} rendered="true">${content}</${tagName}>`;
    return html;
  };
