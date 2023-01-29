import { createTRPCRouter } from "./trpc";
import { rsvpRouter } from "./routers/rsvp";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  rsvp: rsvpRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
