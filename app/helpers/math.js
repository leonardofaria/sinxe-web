import Ember from 'ember';

export function math(params) {
  let lvalue = params[0],
      rvalue = params[2],
      operator = params[1];

  return {
    "+": lvalue + rvalue,
    "-": lvalue - rvalue,
    "*": lvalue * rvalue,
    "/": lvalue / rvalue,
    "%": lvalue % rvalue
  }[operator];
}

export default Ember.Helper.helper(math);
