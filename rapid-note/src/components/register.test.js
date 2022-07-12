import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Register } from "./Register.js";

jest.mock("../contex/authContext.js");

describe("renders texte Regístrate", () => {
  it("Regístrate", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Register />
      </Router>
    );
    const btnRegister = screen.getByText("Regístrate");
    expect(btnRegister).toBeInTheDocument();
  });
});

describe("usuario registrado", () => {
  it("usuario ingresa correo correcto", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Register />
      </Router>
    );
    const emailInput = screen.getByPlaceholderText("correo@ejemplo.com");
    const pswInput = screen.getByPlaceholderText("******");
    const btnRegister = await screen.findByText("Regístrate");
    fireEvent.change(emailInput, { target: { value: "correo@ejemplo.com" } });
    fireEvent.change(pswInput, { target: { value: "******" } });
    fireEvent.click(btnRegister);
    await waitFor(() => {
      expect(history.location.pathname).toBe("/login");
    });
  });
});

describe("test cambio de route", () => {
  it("cambio de vista a login", async () => {
      const history = createMemoryHistory();
      render(
      <Router location={history.location} navigator={history}>
          <Register />
      </Router>
      );
      const btnRegister = await screen.findByTestId("btnRegister");
      fireEvent.click(btnRegister);
      await waitFor(() => {
      expect(history.location.pathname).toBe("/login");
      });
  });
  });


describe("link volver al home", () => {
  it("link route home", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Register />
      </Router>
    );
    const linkGoHome = await screen.findByText("Volver al inicio");
    fireEvent.change(linkGoHome);
    expect(history.location.pathname).toBe("/");
  });
});
