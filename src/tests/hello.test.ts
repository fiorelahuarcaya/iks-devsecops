import { beforeEach, expect, test } from "vitest";
import { buildFastify } from "../hello";

beforeEach(async () => {
  const fastify = buildFastify();
  // Clear mocks and add some testing data after before each test run
  fastify.close();
});

test("GET `/` route", async () => {
  const fastify = buildFastify();

  const res = await fastify.inject({
    method: "GET",
    url: "/",
  });

  expect(res.statusCode).toBe(200);
  expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
  expect(JSON.parse(res.payload)).toEqual({ hello: "hello" });
});
