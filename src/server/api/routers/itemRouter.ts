import { z } from "zod"
import {createRouter} from "./context"

const itemRouter = createRouter().mutation('addItem',{
    input: z.object({
        name: z.string()
    }),
    resolve: async ({input}) => {
        return {
            id:1,
            name:input.name,
        }
    }
})