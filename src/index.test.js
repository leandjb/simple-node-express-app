const request = require("supertest");
const app = require("./index");

describe("[ src | index ]", () => {
    describe("GET /", () => {
        it("should return EXPRESS API Server Running...", async () => {
            const res = await request(app).get("/");
            expect(res.statusCode).toEqual(200);
            expect(res.text).toBe("EXPRESS API Server Running...");
        });
    });
});
