import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
//import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import  { Home }  from "./components/Home.js";
//import * as RouterObj from 'react-router-dom';

//jest.mock(userEvent);
/*jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));*/

/*
test("renders Home", async () => {
  const history = createMemoryHistory();
  console.log(RouterObj);
  //const spyForNavigate = jest.spyOn(RouterObj, 'useNavigate')
  render(
  <Routes>
    <Router location={history.location} navigator={history}>
      <Home />
    </Router>
    </Routes>
  );
  const user = userEvent.setup();
  expect(screen.getByText(/Escribe tus notas, sin temor a perderlas/i)).toBeInTheDocument()
  await user.click(screen.getByText('Iniciar Sesión'));
  expect(spyForNavigate).toHaveBeenCalledWith()
});
*/
