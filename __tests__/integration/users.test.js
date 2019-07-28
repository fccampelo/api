import app from "../../src/app";
import faker from "faker";
import request from "supertest";
import { getConsoleOutput } from "@jest/console";

describe("Register Users", () => {
  const user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: 1233654,
  };

  it("create a new user", async () => {
    const response = await request(app)
      .post("/users")
      .send(user);
    const { name, email, password } = response.body.data;

    expect(response.status).toBe(200);
    expect(name).toBe(user.name);
    expect(email).toBe(user.email);
    expect(password).toBe(user.password.toString());
  });

  it("verifying if the user exists if there is a user with the same email", async () => {
    const response = await request(app)
      .post("/users")
      .send(user);
    expect(response.status).toBe(400);
  });
});
