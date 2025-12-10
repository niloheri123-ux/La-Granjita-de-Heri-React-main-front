import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../../pages/Home";

describe("Home Page", () => {
  it("renderiza el título de la página de inicio", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("Bienvenido a Ruteando")).toBeTruthy();
  });

  it("renderiza el párrafo de bienvenida", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/Explora los mejores productos/i)).toBeTruthy();
  });

  it("renderiza el contenedor de Bootstrap", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(document.querySelector(".container")).toBeTruthy();
  });
});
