//import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Login } from "./Login.js";
import { AuthProvider } from "../contex/authContext";

// eslint-disable-next-line no-unused-expressions
describe("Usuario no disponible", () => {
  it("Verificar si no hay usuario", () => {
    const history = createMemoryHistory();
    render(
      <AuthProvider>
        <Router location={history.location} navigator={history}>
          <Login />
        </Router>
      </AuthProvider>
    );
    expect(screen.getByText("No hay usuario")).toBeInTheDocument();
  });

  it("components Login", async () => {
    const history = createMemoryHistory();
    render(
      <AuthProvider>
        <Router location={history.location} navigator={history}>
          <Login />
        </Router>
      </AuthProvider>
    );
    const emailInput = screen.getByPlaceholderText("correo@ejemplo.com");
    const pswInput = screen.getByPlaceholderText("******");
    fireEvent.change(emailInput, { target: { value: "ana@gmail.com" } });
    fireEvent.change(pswInput, { target: { value: "123456" } });
    const btnLogin = screen.getByText("Inicia Sesión");
    fireEvent.click(btnLogin);
    const btnGoogle = screen.getByText("Acceder con Google");
    fireEvent.click(btnGoogle);
  });
});
