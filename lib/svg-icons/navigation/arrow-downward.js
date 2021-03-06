'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _svgIcon = require('../../svg-icon');

var _svgIcon2 = _interopRequireDefault(_svgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationArrowDownward = function NavigationArrowDownward(props) {
  return _react2.default.createElement(
    _svgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z' })
  );
};
NavigationArrowDownward = (0, _pure2.default)(NavigationArrowDownward);
NavigationArrowDownward.displayName = 'NavigationArrowDownward';

exports.default = NavigationArrowDownward;