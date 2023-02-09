import { render } from '@testing-library/react';
import Search from '../components/Search';

describe("Search", () => {
  const setSearchResults = jest.fn();

    it("renders correctly", () => {
      const { asFragment } = render(<Search setSearchResults={setSearchResults} />);
  
      expect(asFragment()).toMatchSnapshot();
    });
  });