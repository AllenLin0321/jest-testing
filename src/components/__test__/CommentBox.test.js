import React from 'react';
import { mount } from 'enzyme';
import ComponentBox from 'components/ComponentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<ComponentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped
      .find('textarea')
      // 第二個參數: mock 會將資料merge進傳入的參數
      .simulate('change', { target: { value: 'new comment' } });

    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submitted, text area gets emptied', () => {
    //   Submit the form
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});