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
                localeName: "Itatiba - Merdadão", altitude: 200, chuva: 10.3, direVent: 4, pressao: 23, temperature: 32, umidade: 70,
                veloVent: 6
            }
        })
    }),
    getAll: publicProcedure
        .query(({ctx}) => ctx.db.machineData.findMany({orderBy: {id: "desc"}}) ),
    
    DeleteAll: publicProcedure
        .mutation(({ctx}) => ctx.db.machineData.deleteMany()),
});
