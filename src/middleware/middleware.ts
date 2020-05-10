export default function middleware() {
  return async (req, res, next) => {
    console.log(`\n\n`)
    console.log(`@ ${new Date()}`)
    console.log(`\x1b[45m \x1b[0m\x1b[44m  \x1b[0m\x1b[46mRE\x1b[0m\x1b[42mQU\x1b[0m\x1b[43mES\x1b[0m\x1b[41mT  \x1b[0m\x1b[33m  ==>  \x1b[34m[${req.method}]\x1b[0m \x1b[0m\x1b[0m\x1b[35m${req.headers.host}${req.originalUrl}  \x1b[0m`)
    console.log(' ')
    next()

    return
  }
}
