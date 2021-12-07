import express from "express";
import path from "path";

const app = express();
const PORT = 3033;

export const CALLBACKS = {};

app.get("/library", (_req, res) => {
  res.sendFile(path.resolve("./lib/client.js"));
});

app.use("/components", express.static(path.resolve("./components")));
app.use(express.static(path.resolve("./public")));
app.use(express.static(path.resolve("./node_modules")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/callbacks/:tagName/:callback", async (req, res) => {
  const { tagName, callback } = req.params;
  const body = req.body;

  const result = await CALLBACKS[tagName][callback](body);

  res.json(result);
});

let callbacksClient;
app.get("/callbacks", (_req, res) => {
  if (!callbacksClient) {
    callbacksClient = {};
    for (const tagName in CALLBACKS) {
      callbacksClient[tagName] = Object.keys(CALLBACKS[tagName]);
    }
  }
  res.json(callbacksClient);
});

import("./pages/index.js").then(({ routerPages }) => {
  app.use(routerPages);
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
