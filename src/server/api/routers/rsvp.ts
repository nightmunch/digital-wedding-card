import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const rsvpRouter = createTRPCRouter({
  sendrsvp: publicProcedure
    .input(
      z.object({
        id: z.string().cuid().optional(),
        name: z.string(),
        attendance: z.boolean(),
        inviting: z.number().optional(),
        message: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.rsvp.create({ data: input });
    }),
});
