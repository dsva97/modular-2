import { Router } from "express";
import { App } from "./_app.js";
import { FormComponent } from "../components/x-form/server.js";
import { ButtonComponent } from "../components/x-button/server.js";

const router = Router();

const IndexPage = App({
  head: "<title>Index!! 😛</title>",
  main: /*html*/ `
    ${ButtonComponent({ children: "Click me!" })}
    ${FormComponent()}
  `,
});

router.get("/", (_req, res) => {
  res.send(IndexPage);
});

export const routerPages = router;
