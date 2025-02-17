import { PrismaClient } from "@prisma/client/extension";
import { Hono } from 'hono'
import { cors } from "hono/cors";
import { IndexRouter } from './routes/index'

const app = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_secret  : string
    }
    Variables:{
        prisma: PrismaClient
    }
}>();

app.options('/api/v1/*', cors());
app.use('/api/v1/*',cors());
app.route('/api/v1',IndexRouter);

export default app
