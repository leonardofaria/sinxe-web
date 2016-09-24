import Ember from 'ember';

export function boolOr([left, right]/*, hash*/) {
  return left === right;
}

export default Ember.Helper.helper(boolOr);
