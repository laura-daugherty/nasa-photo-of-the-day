import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'

import App from './App';
import Hero from "./components/hero"
import Header from "./components/header"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<Hero />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Hero />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<Heading />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

