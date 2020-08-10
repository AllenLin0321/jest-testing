import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import ComponentBox from 'components/ComponentBox';
import ComponentList from 'components/ComponentList';

let component;

beforeEach(() => {
  component = shallow(<App />);
});

it('shows a component box', () => {
  expect(component.find(ComponentBox).length).toEqual(1); // .find()回傳一個Array
});

it('shows a component list', () => {
  expect(component.find(ComponentList).length).toEqual(1);
});
