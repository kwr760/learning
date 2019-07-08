import expect from 'expect';
import { fromJS } from 'immutable';
import linkFormContainerReducer from '../reducer';

describe('linkFormContainerReducer', () => {
  it('returns the initial state', () => {
    expect(linkFormContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
