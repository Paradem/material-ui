'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _autoPrefix = require('../styles/auto-prefix');

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ScaleInChild = _react2.default.createClass({
  displayName: 'ScaleInChild',


  propTypes: {
    children: _react2.default.PropTypes.node,
    enterDelay: _react2.default.PropTypes.number,
    maxScale: _react2.default.PropTypes.number,
    minScale: _react2.default.PropTypes.number,

    /**
     * Override the inline-styles of the root element.
     */
    style: _react2.default.PropTypes.object
  },

  contextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  childContextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  mixins: [_reactAddonsPureRenderMixin2.default],

  getDefaultProps: function getDefaultProps() {
    return {
      enterDelay: 0,
      maxScale: 1,
      minScale: 0
    };
  },

  getInitialState: function getInitialState() {
    return {
      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
    };
  },
  getChildContext: function getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({ muiTheme: newMuiTheme });
  },
  componentWillUnmount: function componentWillUnmount() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
  },
  componentWillAppear: function componentWillAppear(callback) {
    this._initializeAnimation(callback);
  },
  componentWillEnter: function componentWillEnter(callback) {
    this._initializeAnimation(callback);
  },
  componentDidAppear: function componentDidAppear() {
    this._animate();
  },
  componentDidEnter: function componentDidEnter() {
    this._animate();
  },
  componentWillLeave: function componentWillLeave(callback) {
    var style = _reactDom2.default.findDOMNode(this).style;

    style.opacity = '0';
    _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')', this.state.muiTheme);

    this.leaveTimer = setTimeout(callback, 450);
  },
  _animate: function _animate() {
    var style = _reactDom2.default.findDOMNode(this).style;

    style.opacity = '1';
    _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')', this.state.muiTheme);
  },
  _initializeAnimation: function _initializeAnimation(callback) {
    var style = _reactDom2.default.findDOMNode(this).style;

    style.opacity = '0';
    _autoPrefix2.default.set(style, 'transform', 'scale(0)', this.state.muiTheme);

    this.enterTimer = setTimeout(callback, this.props.enterDelay);
  },
  render: function render() {
    var _props = this.props;
    var children = _props.children;
    var enterDelay = _props.enterDelay;
    var style = _props.style;

    var other = _objectWithoutProperties(_props, ['children', 'enterDelay', 'style']);

    var prepareStyles = this.state.muiTheme.prepareStyles;


    var mergedRootStyles = (0, _simpleAssign2.default)({}, {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
    }, style);

    return _react2.default.createElement(
      'div',
      _extends({}, other, { style: prepareStyles(mergedRootStyles) }),
      children
    );
  }
});

exports.default = ScaleInChild;