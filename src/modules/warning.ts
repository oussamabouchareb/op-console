import { colors } from "./colors";
import { isBrowser } from "./utils/isBrowser.js";
/**
 * warningLog
 *
 * @function warningLog
 * @param str string
 * @returns a colored console.warn() in terminal and a plain one in the browser because browser will automatically color it
 */

export function warningLog(str: string) {
  const message =
    colors.reset + colors.bgBlack + colors.yellow + str + colors.reset;
  return console.warn(isBrowser ? str : message);
}
