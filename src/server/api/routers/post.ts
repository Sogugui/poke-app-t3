import {router,publicProcedure} from './trpc'
import {z} from 'zod'
export const postRouter = router({
    postCreate: publicProcedure
    .input(z.object({
        title: z.string(),
    }),
    )
    .mutation(({input})=>{
        title: 'Hello from post'
    }),
    postList: publicProcedure.query(()=>{
        return ['Hello from postlist'];
    })
})