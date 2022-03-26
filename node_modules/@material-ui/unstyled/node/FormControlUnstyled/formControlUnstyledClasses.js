"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormControlUnstyledUtilityClasses = getFormControlUnstyledUtilityClasses;
exports.default = void 0;

var _generateUtilityClass = _interopRequireDefault(require("../generateUtilityClass"));

var _generateUtilityClasses = _interopRequireDefault(require("../generateUtilityClasses"));

function getFormControlUnstyledUtilityClasses(slot) {
  return (0, _generateUtilityClass.default)('MuiFormControl', slot);
}

const formControlUnstyledClasses = (0, _generateUtilityClasses.default)('MuiFormControl', ['root', 'disabled']);
var _default = formControlUnstyledClasses;
exports.default = _default;