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
                localeName: "cu do rafael", altitude: 2, chuva: 5, direVent: 1, pressao: 23, temperature: 34, umidade: 90,
                veloVent: 23
            }
        })
    }),
    getAll: publicProcedure
        .query(({ctx}) => ctx.db.machineData.findMany() ),
    
    DeleteAll: publicProcedure
        .mutation(({ctx}) => ctx.db.machineData.deleteMany()),
});
