import Fastify from "fastify";

export function buildFastify(logger = false) {
  const fastify = Fastify({
    logger,
  });

  // Declare a route
  fastify.get("/", async function handler(request, reply) {
    return { message: "HOLA 3" };
  });

  return fastify;
}

const fastify = buildFastify(true);

// Determine the host based on an environment variable
const host = process.env.HOST || "localhost";

// Run the server!
try {
  await fastify.listen({ port: 3000, host });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
