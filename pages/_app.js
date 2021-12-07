const isFunction = (fn) => typeof fn === "function";
export function App({ head = "", scripts = "", main = "" }) {
  head = isFunction(head) ? head() : head || "";
  scripts = isFunction(scripts) ? scripts() : scripts || "";
  main = isFunction(main) ? main() : main || "";
  return /*html*/ `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    ${head}
  </head>
  <body>
    <div id="naxt"> ${main} </div>
    <script src="/components/index.js" type="module"></script>
    ${scripts}
  </body>
</html>
`;
}
