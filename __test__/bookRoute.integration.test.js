const express = require("express");
const request = require("supertest");
const bookRoute = require("../routes/books.route");
const app = require("../app");

describe("integration for the books api", () => {
  test("GET /api/books - Success - get all the books", async () => {
    const res = await request(app).get("/api/books");
    expect(res.body).toEqual([
      { name: expect, author: "jkRollings" },
      { name: "syllemon", author: "kishor" },
      { name: "hikings", author: "mausam" },

    ]);
    expect(res.statusCode).toBe(200);
  });
  //post


  //update

  //delete
});

console.log("hello");
