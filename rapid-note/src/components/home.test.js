import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Home } from "./Home.js";

jest.mock("../contex/authContext.js");

describe("renders texto h1", () => {
    it("renders texto h1", () => {
        const history = createMemoryHistory();
        render(
        <Router location={history.location} navigator={history}>
            <Home />
        </Router>
    );
    const textLogin = screen.getByText(
        "Escribe tus notas, sin temor a perderlas"
    );
    expect(textLogin).toBeInTheDocument();
    });
});

describe("renders texto btn", () => {
    it("renders texto btn", () => {
        const history = createMemoryHistory();
        render(
        <Router location={history.location} navigator={history}>
            <Home />
        </Router>
        );
        const btnLogin = screen.getByText("Iniciar Sesión");
        expect(btnLogin).toBeInTheDocument();
    });
    });

describe("renders texto link", () => {
    it("renders texto link", () => {
        const history = createMemoryHistory();
        render(
        <Router location={history.location} navigator={history}>
            <Home />
        </Router>
        );
        const btnLogin = screen.getByText("¿No tienes cuenta? Regístrate");
        expect(btnLogin).toBeInTheDocument();
    });
    });

describe("link envía a register", () => {
    it("link route home", async () => {
        const history = createMemoryHistory();
        render(
        <Router location={history.location} navigator={history}>
            <Home />
        </Router>
        );
        const linkGoRegister = await screen.findByText("¿No tienes cuenta? Regístrate");
        fireEvent.change(linkGoRegister);
        expect(history.location.pathname).toBe("/");
    });
    });

describe("test cambio de route", () => {
    it("cambio de vista", async () => {
        const history = createMemoryHistory();
        render(
        <Router location={history.location} navigator={history}>
            <Home />
        </Router>
        );
        const btnHome = await screen.findByTestId("btnLogin");
        fireEvent.click(btnHome);
        await waitFor(() => {
        expect(history.location.pathname).toBe("/login");
        });
    });
    });
