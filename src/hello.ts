import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return { message: "Este es un mensaja cambiado de prueba" };
});

// Determine the host based on an environment variable
const host = process.env.HOST || "localhost";

// Run the server!
try {
  await fastify.listen({ port: 3000, host });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
