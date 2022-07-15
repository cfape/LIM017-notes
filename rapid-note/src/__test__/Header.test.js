import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Header } from "../components/Header.js";

jest.mock("../contex/authContext.js");

describe("renders texto logOut", () => {
  it("Render texto", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );
    const welcomeHeader = screen.getByTestId("welcome");
    expect(welcomeHeader).toBeInTheDocument();
  });
});

describe("usuario retorna al home", () => {
  it("usuario cerrando sesión", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );
    const btnHeader = await screen.findByTestId("btnLogOutNote");
    fireEvent.click(btnHeader);
    await waitFor(() => {
      expect(history.location.pathname).toBe("/");
    });
  });
});

