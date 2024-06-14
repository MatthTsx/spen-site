/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const AdminRouter = createTRPCRouter({
  createMachineData: publicProcedure
    .mutation(async ({ctx}) => {
        return await ctx.db.machineData.create({
            data: {
                Data1: 69, Data2: 69, temperature: 25, Data3: 69, localeName: "cu do rafael"
            }
        })
    }),
    getAll: publicProcedure
        .query(({ctx}) => ctx.db.machineData.findMany() ),
    
    DeleteAll: publicProcedure
        .mutation(({ctx}) => ctx.db.machineData.deleteMany()),
});
