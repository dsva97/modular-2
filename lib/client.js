const getCallbacks = (tagName) =>
  fetch("/callbacks")
    .then((res) => res.json())
    .then((callbackNames) => {
      const callbacks = {};

      callbackNames[tagName].forEach((callbackName) => {
        const callback = (body) => {
          const endpoint = `/callbacks/${tagName}/${callbackName}`;
          return fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }).then((res) => res.json());
        };
        callbacks[callbackName] = callback;
      });

      return callbacks;
    });

export const Cmp = async (tagName, getClassCmp) => {
  const callbacks = await getCallbacks(tagName);

  class Lib extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.root = this.shadowRoot;
      this.root.innerHTML = `
        <link rel="stylesheet" href="/components/${tagName}/style.css" />
        <slot></slot>
      `;
      this.server = callbacks;
    }
  }

  const classCmp = getClassCmp(Lib);

  window.customElements.define(tagName, classCmp);
};
