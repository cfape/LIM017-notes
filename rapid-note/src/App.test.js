import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router, Routes} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import  Home  from "./components/Home.js";
import Login from "./components/Login.js";



//jest.mock('../contex/authContext.js')
/*test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });*/

test("renders Home", async () => {
  const history = createMemoryHistory();
  render(
    <Routes>
    <Router location={history.location} navigator={history}>
      <Home />
      <Login />
    </Router>
    </Routes>
  );
  const user = userEvent.setup();
  expect(screen.getByText(/Escribe tus notas, sin temor a perderlas/i)).toBeInTheDocument()
  await user.click(screen.getByText('Iniciar Sesión'));
  expect(screen.getByText()).toBeInTheDocument()
});
