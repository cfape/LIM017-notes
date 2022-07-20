
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Login } from "../components/Login.js";

jest.mock("../contex/authContext.js");

const setUser = jest.fn();

describe("renders Iniciar sesión", () => {
  it("Iniciar sesión", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Login setUser = {setUser}/>
      </Router>
    );
    const btnLogin = screen.getByText("Inicia Sesión");
    expect(btnLogin).toBeInTheDocument();
  });
});

describe("usuario identificado", () => {
  it("usuario identificado", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Login setUser = {setUser}/>
      </Router>
    );
    const emailInput = screen.getByPlaceholderText("correo@ejemplo.com");
    const pswInput = screen.getByPlaceholderText("******");
    const btnLogin = await screen.findByText("Inicia Sesión");

    fireEvent.change(emailInput, { target: { value: "correo@ejemplo.com" } });
    fireEvent.change(pswInput, { target: { value: "******" } });
    fireEvent.click(btnLogin);

    await waitFor(() => {
      expect(history.location.pathname).toBe("/");
    });
  });
});

describe("usuario no identificado", () => {
  it("usuario falla en ingresar email", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Login setUser = {setUser}/>
      </Router>
    );
    const emailInput = screen.getByPlaceholderText("correo@ejemplo.com");
    const pswInput = screen.getByPlaceholderText("******");
    const btnLogin = screen.getByText("Inicia Sesión");
    fireEvent.change(emailInput, { target: { value: "ana" } });
    fireEvent.change(pswInput, { target: { value: "123456" } });
    fireEvent.click(btnLogin);

    await waitFor(() => {
      expect(history.location.pathname).toBe("/");
    });
  });
});

describe("link volver al home", () => {
  it("link route home", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Login setUser = {setUser}/>
      </Router>
    );
    const linkGoHome = await screen.findByText("Volver al inicio");
    fireEvent.change(linkGoHome);
    expect(history.location.pathname).toBe("/");
  });
});

describe("usuario identificado con Google", () => {
  it("usuario identificado", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Login setUser = {setUser}/>
      </Router>
    );
    const btnLogin = await screen.findByTestId("btnGoogle");
    fireEvent.click(btnLogin);
    await waitFor(() => {
      expect(history.location.pathname).toBe("/rapidnote");
    });
  });
});
