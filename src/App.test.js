/* eslint-disable testing-library/no-unnecessary-act */
import React from "react"
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

let container

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('should allow to navigate to different categories if button is clicked', () => {
  // should navigate to greyhound when greyhound button is clicked
  act(() => {
    ReactDOM.render(<App />, container)
  });
  act(() => {
    const goGreyHoundLink = container.querySelector("#greyhound")
    // mock an mouse event to click the element in the document with id of "greyhound"
    goGreyHoundLink.dispatchEvent(new MouseEvent("click", { bubbles: true}));
  })
  // find the component with test-id euqal to 'subtitle-greyhound' and its text context inside is "Greyhound"
  expect(document.body.querySelector('#greyhound')).toHaveTextContent('Greyhound');


  // should navigate to harness when harness button is clicked
  act(() => {
    const goHarnessLink = document.querySelector('#harness')
    goHarnessLink.dispatchEvent(new MouseEvent("click", { bubbles: true}))
  })
  expect(document.body.querySelector('#harness')).toHaveTextContent('Harness');


  // should navigate to thoroughbred when thoroughbred button is clicked
  act(() => {
    const goThoroughbredLink = document.querySelector('#thoroughbred');
    goThoroughbredLink.dispatchEvent(new MouseEvent("click", { bubbles: true}))
  });
  expect(document.body.querySelector('#thoroughbred')).toHaveTextContent('Thoroughbred');
})


