import app from "../server";
import supertest from "supertest";

describe("GET /", () => {
  it("should send back some data", async () => {
    const res = await supertest(app).get("/");
    expect(res.body.message).toBe("hello");
  });
});

describe("POST /user", function () {
  it("responds with json", async () => {
    const res = await supertest(app)
      .post("/user")
      .send({ username: "hello", password: "hola" })
      .set("Accept", "application/json");

    expect(res.headers["Content-Type"]).toMatch(/json/);
    expect(res.status).toEqual(200);
  });
});
