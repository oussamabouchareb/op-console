import { colors } from "./colors";
import { isBrowser } from "./utils/isBrowser.js";

/**
 * errorLog
 *
 * @function errorLog
 * @param str string
 * @returns a colored console.error() in terminal and a plain one in the browser because browser will automatically color it
 */

export function errorLog(str: string) {
  const message =
    colors.reset + colors.bgBlack + colors.red + str + colors.reset;
  return console.error(isBrowser ? str : message);
}
