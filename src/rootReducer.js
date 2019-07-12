import { combineReducers } from 'redux';
import forFutureParent from './containers/forFutureParents/reducer';
import infoAboutChild from './containers/InformationAboutChildren/reducer';
import youAreParent from './containers/youAreParent/reducer';
import persons from './containers/specialist/reducer';
import personsProfile from './containers/staff/reducer';
import categories from './containers/categories/reducer';
import formData from './containers/InformationAboutChildrenForm/reducer';

export default combineReducers({
  forFutureParent: forFutureParent,
  infoAboutChild: infoAboutChild,
  youAreParent: youAreParent,
  persons: persons,
  personsProfile: personsProfile,
  categories: categories,
  formData: formData
})