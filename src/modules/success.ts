import { colors } from "./colors";
import { isBrowser } from "./utils/isBrowser.js";
/**
 * successLog
 *
 * @function successLog
 * @param str string
 * @returns a colored console.log() in terminal and a plain one in the browser because browser will automatically color it
 */

export function successLog(str: string) {
  const message =
    colors.reset + colors.bgBlack + colors.green + str + colors.reset;
  return console.log(isBrowser ? str : message);
}
