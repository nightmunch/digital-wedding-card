import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const rsvp2Router = createTRPCRouter({
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
      await ctx.prisma.rsvp2.create({ data: input });
    }),
  getall: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.rsvp2.findMany({ orderBy: { created_at: "desc" } });
  }),
});
