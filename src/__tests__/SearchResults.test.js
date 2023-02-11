import { render, screen} from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe("Search results", () => {
  let resultsMock = ["test1", "test2"];

    it("renders correctly", () => {

      const { asFragment } = render(<SearchResults results={resultsMock} />);
  
      expect(asFragment()).toMatchSnapshot();
    });

    it("renders 'no results' if there are no results", () => {
      resultsMock = [];
      render(<SearchResults results={resultsMock} />)
      const errorMessage = screen.getByText("No results");

      expect(errorMessage).toBeInTheDocument()
    })
  });