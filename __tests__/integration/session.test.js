import jwt from "jsonwebtoken";
import app from "../../src/app";
import faker from "faker";
import request from "supertest";

import oauthConfig from "../../src/config/oauth";

import { checkPassword } from "../../src/utils";

describe("Session Users", () => {
  const user = {
    email: "teste@gmail3.com.br",
    password: "123321",
  };

  it("Verify user Exists", async () => {
    const userFake = {
      email: faker.internet.email(),
      password: 1233654,
    };

    const response = await request(app)
      .post("/session")
      .send(userFake);

    const error = response.body.error;
    expect(response.status).toBe(404);
    expect(error).toBe("user not found");
  });
});
