const express = require("express");
const request = require("supertest");
const bookRoute = require("../routes/books.route");
const app = require("../app");

describe("integration for the books api", () => {
  test("GET /api/books - Success - get all the books", async () => {
    const res = await request(app).get("/api/books");

    console.log(res.body);
    expect.assertions(1);
    expect(res.statusCode).toBe(200);
  });
});

console.log("hello");
