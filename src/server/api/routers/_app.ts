//Defining a Router

import * as trpc from '@trpc/server';
import { publicProcedure,router, mergeRouters } from './trpc';


//defining procedure with Zod
import { z } from "zod";
export const appRouter = router({
    greeting: publicProcedure
        .input(
            z.object({
                    text: z.string(),
                })
                .optional() //para que el input no sea required
        )
        .query(({ input }) => {
            return {
                greeting: `hello ${input?.text ?? "world"}`,
            };
        }),
});
export type AppRouter = typeof appRouter;

// merging routers with mergeRouters

import {userRouter} from './user'
import { postRouter } from './post';

export const appRouter2= mergeRouters(userRouter,postRouter)

export type AppRouter2 = typeof appRouter2;

