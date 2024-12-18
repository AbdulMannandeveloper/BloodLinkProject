const server = Bun.serve({
  port: process.env.BLOODLINK_BACKEND_PORT,
  fetch(req) {
    return new Response("Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
