const request = require("supertest");
const app = require("./index");

describe("[ src | index ]", () => {
    describe("GET /", () => {
        it("should return a response with code status 200", async () => {
            //Arrange
            const expected = 200;
            
            //Act
            const {status: result} = await request(app).get("/");
            
            //Assert
            expect(result).toEqual(expected)
        });

        it("should send text with API server is running", async () => {
            const expected = "EXPRESS API Server Running...";
            const result = await request(app).get("/");
            
            expect(result.text).toBe(expected);
        });
    });
});
