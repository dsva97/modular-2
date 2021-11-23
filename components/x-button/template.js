export const tagName = "x-button";

export const template = ({ children }) => {
  return /*html*/ `
    <button id="btn">${children}</button>
  `;
};
