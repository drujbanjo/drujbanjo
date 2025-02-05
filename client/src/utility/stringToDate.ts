export const stringToDate = (string: string) => string.split("T")[0].split("-").reverse().join(".")
