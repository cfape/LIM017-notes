import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Notes } from "./Notes.js";

jest.mock("../contex/authContext.js");

describe("renders texto notes", () => {
  it("renders texto en form", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Notes />
      </Router>
    );
    const textNotes = screen.getByText("Agregar nota");
    expect(textNotes).toBeInTheDocument();
  });
});

describe("renders texto btn", () => {
  it("renders texto btn form", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Notes />
      </Router>
    );
    const textBtn = screen.getByText("Guardar");
    expect(textBtn).toBeInTheDocument();
  });
});
