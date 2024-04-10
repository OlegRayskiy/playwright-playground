import { test } from "@playwright/test";
import example1 from "./example1";
import example2 from "./example2";

test.describe.serial(() => {
  example1();
  example2();
});
