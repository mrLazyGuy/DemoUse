const request = require("supertest");
const app = require("../app");
const myLogger = require("../utilities/myLogger");
// describe("integration for the books api get verb", () => {
//   // test("GET /api/books - Success - get all the books", async () => {
//   //   const res = await request(app).get("/api/books");
//   //   myLogger.info(res.body);
//   //   expect(res.body).toEqual(
//   //     expect.arrayContaining([
//   //       expect.objectContaining({
//   //         name: expect.any(String),
//   //         author: expect.any(String),
//   //       }),
//   //     ])
//   //   );

//   //   expect(res.statusCode).toBe(200);
//   // });

//   //update

//   //delete
// });
describe("post verb for books api ", () => {
    const expectValidationError = async (payload, expectedMessage) => {
        const { body, statusCode } = await request(app)
            .post("/api/books")
            .send(payload);
        expect(statusCode).toBe(400);
        myLogger.info(body);
        expectedMessage.forEach((msg) => {
            expect(body.errors).toEqual(
                expect.arrayContaining([expect.objectContaining({ msg: msg })]),
            );
        });
    };

    test("POST /api/books -stores book in books array", async () => {
        const res = await request(app)
            .post("/api/books")
            .send({
                name: "dog is man best friend  ",
                author: "mr.factSpitter",
            })
            .set("Accept", "application/json")
            .expect(200);
        myLogger.info(res.body);
    });

    test("POST /api/books -failure if name and author property has empty value of body property", async () => {
        await expectValidationError({ name: "", author: "" }, [
            "book name is required",
            "author name is required",
        ]);
    });

    test("POST /api/books -failure if  author property has empty value of body property", async () => {
        await expectValidationError({ name: "kshitiz", author: "" }, [
            "author name is required",
        ]);
    });
});
