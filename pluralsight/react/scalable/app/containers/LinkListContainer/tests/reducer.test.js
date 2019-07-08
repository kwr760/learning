import expect from 'expect';
import { fromJS } from 'immutable';
import linkListContainerReducer from '../reducer';

describe('linkListContainerReducer', () => {
  it('returns the initial state', () => {
    expect(linkListContainerReducer(undefined, {})).toEqual(
      fromJS({ links: [] }),
    );
  });
});
