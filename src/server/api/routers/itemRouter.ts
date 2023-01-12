import { z } from "zod"
import {createRouter} from "./context"
import { publicProcedure, router } from "./trpc"


// const itemRouter = createRouter().mutation('addItem',{
//     input: z.object({
//         name: z.string()
//     }),
//     resolve: async ({input,ctx}) => {
//         const {name} = input 
//          ctx.prisma        // await ctx.prisma.shoppingItem.create({
//         //     data: {
//         //         name,
//         //     }
//         // })
//     }
// })

const appRouter= router({
hello: publicProcedure
.input(z.object({
    name: z.string()
})).query(({input})=> {
return {
greeting: `Hello ${input?.name?? "world"}`,
}
}),
getAll: publicProcedure.query(({ctx})=> {
    return ctx.prisma
    )
}

    
})