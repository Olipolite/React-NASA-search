import { fireEvent, render, screen } from '@testing-library/react';
import DarkMode from '../components/DarkMode';

describe("DarkMode", () => {

    it("renders correctly", () => {
      const { asFragment } = render(<DarkMode />);

      expect(asFragment()).toMatchSnapshot();
    });

    it("default state works properly", () => {
      render(<DarkMode />)
      const div = screen.getByTestId('div');
      
      expect(div).toHaveClass("light");
    });

    it("button toggles Darkmode when clicked", () => {
      render(<DarkMode />)

      const div = screen.getByTestId('div');
      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(div).toHaveClass("dark");

      fireEvent.click(button);

      expect(div).toHaveClass("light");
    })
  });
