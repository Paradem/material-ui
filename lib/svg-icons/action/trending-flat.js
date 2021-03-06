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

var ActionTrendingFlat = function ActionTrendingFlat(props) {
  return _react2.default.createElement(
    _svgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M22 12l-4-4v3H3v2h15v3z' })
  );
};
ActionTrendingFlat = (0, _pure2.default)(ActionTrendingFlat);
ActionTrendingFlat.displayName = 'ActionTrendingFlat';

exports.default = ActionTrendingFlat;