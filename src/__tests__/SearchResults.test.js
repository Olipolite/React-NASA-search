import { render } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe("Search results", () => {
    it("renders correctly", () => {
      const { asFragment } = render(<SearchResults />);
  
      expect(asFragment()).toMatchSnapshot();
    });
  });