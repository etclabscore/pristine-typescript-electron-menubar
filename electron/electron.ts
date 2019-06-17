import { menubar } from "menubar";
import * as path from "path";

const mb = menubar({
  index: process.env.NODE_ENV === "development"
    ? "http://localhost:3000/index.html"
    : `file://${path.join(__dirname, "../build/index.html")}`,
});

mb.on("ready", () => {
  console.log("app is ready") //tslint:disable-line
});
