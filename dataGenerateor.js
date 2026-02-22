import { formatData } from "./dataFormat.js";

export function* generator() {
  if (!formatData) {
    yield "no data";
    return;
  }

  for (const user of formatData) {
    yield user;
  }
}
