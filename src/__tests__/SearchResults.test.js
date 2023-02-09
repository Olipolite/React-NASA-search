import { render, } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe("Search results", () => {
  let resultsMock = ["test1", "test2"];

    it("renders correctly", () => {

      const { asFragment } = render(<SearchResults results={resultsMock} />);
  
      expect(asFragment()).toMatchSnapshot();
    });
  });