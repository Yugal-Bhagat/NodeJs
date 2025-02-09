// const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT)
// module.exports = PORT

// this is zod validation 
const { z, ZodError } = require('zod')
const portSchema = z.coerce.number().min(1).max(65000).default(2000)
let port
try {
    port = portSchema.parse(process.env.PORT)
} catch (error) {
    if (error instanceof ZodError) {
        console.log(error.issues[0].message);
    }
    else {
        console.log("unexpected error : " + error);
    }
}
module.exports = port