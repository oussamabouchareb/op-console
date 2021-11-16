import { colors } from "./colors";
import { isBrowser } from "./utils/isBrowser.js";
/**
 * infoLog
 *
 * @function infoLog
 * @param str string
 * @returns a colored console.info() in terminal and a plain one in the browser because browser will automatically color it
 */

export function infoLog(str: string) {
  const message =
    colors.reset + colors.bgBlack + colors.blue + str + colors.reset;
  return console.info(isBrowser ? str : message);
}
