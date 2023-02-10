import { fireEvent, render, screen } from '@testing-library/react';
import DarkMode from '../components/DarkMode';

describe("DarkMode", () => {

    it("renders correctly", () => {
      const { asFragment } = render(<DarkMode />);
  
      expect(asFragment()).toMatchSnapshot();
    });

    it("button toggles Darkmode when clicked", () => {
        render(<DarkMode />)
        
        const button = screen.getByRole('button')
        const theme = screen.getByTestId('light')

        fireEvent.click(button)

        expect(theme).toHaveStyle("background-color: black")

    })
  });
