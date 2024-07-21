import * as dotenv from "dotenv";
dotenv.config();

import app from "./server";

app.listen(1601, () => {
  console.log("hello on http://localhost:1601");
});
