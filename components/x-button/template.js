export const tagName = "x-button";

export const template = ({ children }) => {
  return /*html*/ `
    <button id="btn">${children}</button>
  `;
};

export const component = (_props = {}) => {
  return `<${tagName} rendered="true">${template({
    children: "Hi",
  })}</${tagName}>`;
};
