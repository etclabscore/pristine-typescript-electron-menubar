import { menubar } from "menubar";

console.log("env", process.env.NODE_ENV);
const mb = menubar({
  index: process.env.NODE_ENV === "development" ? "http://localhost:3000/index.html" : `file://${__dirname}/index.html`,
});

mb.app.on("ready", () => {
  console.log("app is ready") //tslint:disable-line
});
