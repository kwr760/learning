import { createSelector } from 'reselect';
import selectLoginContainer from '../LoginContainer/selectors';

/**
 * Direct selector to the navigationContainer state domain
 */
const selectNavigationContainerDomain = () => state =>
  state.get('navigationContainer');

/**
 * Other specific selectors
 */

/**
 * Default selector used by NavigationContainer
 */

const selectNavigationContainer = () =>
  createSelector(
    selectNavigationContainerDomain(),
    selectLoginContainer(),
    (substate, loginSubState) => Object.assign(substate.toJS(), loginSubState),
  );

export default selectNavigationContainer;
export { selectNavigationContainerDomain };
