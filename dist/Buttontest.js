"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Buttontest;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Buttontest() {
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary"
  }, "Hello I am on.");
}