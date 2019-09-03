"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Import
 */

/**
 * Local import
 */
// Composants enfants éventuels
// Styles et assets
var Field = function Field(props) {
  var hey = props.onChange;
  return _react["default"].createElement("div", {
    className: "formulaire"
  }, _react["default"].createElement("input", {
    className: "hey"
  }), _react["default"].createElement("p", null));
};

var _default = Field;
exports["default"] = _default;
