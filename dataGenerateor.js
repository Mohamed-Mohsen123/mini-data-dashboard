import { formatData } from "./dataFormat.js";

export function* generator() {
  if (!formatData) {
    return "no data";
  }

  for (const user of formatData) {
    yield user;
  }
}
