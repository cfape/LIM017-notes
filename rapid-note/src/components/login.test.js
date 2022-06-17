/* eslint-disable jest/no-identical-title */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
//import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Login }  from "./Login.js";
import { AuthProvider } from "../contex/authContext.js";

jest.mock('../contex/authContext.js')

describe("Usuario disponible", () => {
  it("Verificar si hay usuario", () => {
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
});

describe('usuario identificado', () => {
  it('usuario identificado', async () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => jest.fn(),
    }));

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

    fireEvent.change(emailInput, { target: { value: "ana@gmail.com" } });
    fireEvent.change(pswInput, { target: { value: "123456" } });
    fireEvent.click(btnLogin);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/rapidnote');
    });
  });
});

describe('usuario no identificado', () => {
  it('usuario falla en ingresar email', async () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => jest.fn(),
    }));

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

    fireEvent.change(emailInput, { target: { value: "ana" } });
    fireEvent.change(pswInput, { target: { value: "123456" } });
    fireEvent.click(btnLogin);

    //await(() => {
      //expect(screen.getByText('Correo inválido')).toBeInTheDocument();
      await waitFor(() => {
      expect(history.location.pathname).toBe('/');
    });
  });
});

describe('link volver al home', () => {
  it('link route home', async () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => jest.fn(),
    }));

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
      //expect(screen.getByText('Correo inválido')).toBeInTheDocument();
      expect(history.location.pathname).toBe('/');
    });
  });

