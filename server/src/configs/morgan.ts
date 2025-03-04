import morgan from "morgan"

const morganMiddleware = morgan("combined", { stream: { write: message => console.log(message.trim()) } })

export default morganMiddleware
