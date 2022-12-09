import fastifyStatic from "@fastify/static"
import fastifyView from "@fastify/view"
import fastify from "fastify"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"
import nunjucks from 'nunjucks'


nunjucks.configure('templates', {
    autoescape: true,
})

const app = fastify({logger: true})

const rootDir = dirname(fileURLToPath(import.meta.url))

app.register(fastifyStatic, {
    root: join(rootDir, 'public'),
    prefix: '/public/',
})

app.get('/', async (req, res) => {
    res.header('Content-Type', 'text/html')
    return nunjucks.render('index.njk')
})

const start = async () => {
    try{
        await app.listen({port : 3000})
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
start()