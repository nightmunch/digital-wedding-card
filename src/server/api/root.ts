import { createTRPCRouter } from "./trpc";
import { rsvpRouter } from "./routers/rsvp";
import { rsvp2Router } from "./routers/rsvp2";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  rsvp: rsvpRouter,
  rsvp2: rsvp2Router,
});

// export type definition of API
export type AppRouter = typeof appRouter;
