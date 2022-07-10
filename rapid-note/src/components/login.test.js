/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Login }  from "./Login.js";
import { AuthProvider } from "../contex/authContext.js";

jest.mock('../contex/authContext.js')

describe("renders Iniciar sesión", () => {
  it("Iniciar sesión", () => {
    const history = createMemoryHistory();
    render(
      <AuthProvider>
        <Router location={history.location} navigator={history}>
          <Login />
        </Router>
      </AuthProvider>
    );
    const btnLogin = screen.getByText("Inicia Sesión");
    expect(btnLogin).toBeInTheDocument();
  });
});

describe('usuario identificado', () => {
  it('usuario identificado', async () => {

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
    const btnLogin = await screen.findByText("Inicia Sesión");

    fireEvent.change(emailInput, {target: {value: "correo@ejemplo.com"}});
    fireEvent.change(pswInput, {target: {value: "******"}});
    fireEvent.click(btnLogin);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/rapidnote');
    });
  });
});

describe('usuario no identificado', () => {
  fit('usuario falla en ingresar email', async () => {

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
    const btnLogin = screen.getByText("Inicia Sesión");
    fireEvent.change(emailInput, { target: { value: "ana" } });
    fireEvent.change(pswInput, { target: { value: "123456" } });
    fireEvent.click(btnLogin);

      await waitFor(() => {
      expect(history.location.pathname).toBe('/LIM017-notes/');
    });
  });
});

describe('link volver al home', () => {
  it('link route home', async () => {

    const history = createMemoryHistory();
    render(
      <AuthProvider>
        <Router location={history.location} navigator={history}>
          <Login />
        </Router>
      </AuthProvider>
    );
    const linkGoHome =  await screen.findByText('Volver al inicio');
    fireEvent.change(linkGoHome);
      expect(history.location.pathname).toBe('/LIM017-notes/');
    });
  });

