const isBrowser =
  typeof window !== "undefined" && typeof window.document !== "undefined";

module.exports = { isBrowser };
