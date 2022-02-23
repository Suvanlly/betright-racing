import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from "history";
import { Link } from 'react-router-dom';
import Header from './components/Header/Header';

test('should allow to navigate to Greyhound if button is clicked', async () => {
  const history = createMemoryHistory();
  history.push = jest.fn()

  render(
    <MemoryRouter history={history}>
      <Header />
    </MemoryRouter>
  );
  fireEvent.click(screen.getByText('Greyhound'))

  expect(history.push).toHaveBeenCalledWith('/greyhound')

});
