'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _merge2 = require('lodash/merge');

var _merge3 = _interopRequireDefault(_merge2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _moment = require('../helpers/moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _HelpBlock = require('react-bootstrap/lib/HelpBlock');

var _HelpBlock2 = _interopRequireDefault(_HelpBlock);

var _reduxForm = require('redux-form');

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Input: {
    displayName: 'Input'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Types/DateTime.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Input = _wrapComponent('Input')(function (_React$Component) {
  (0, _inherits3.default)(Input, _React$Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this));

    _this.renderField = _this.renderField.bind(_this);

    if (!(typeof _this.renderField === 'function')) {
      throw new TypeError('Value of "this.renderField" violates contract.\n\nExpected:\n(any) => any\n\nGot:\n' + _inspect(_this.renderField));
    }

    return _this;
  }

  (0, _createClass3.default)(Input, [{
    key: 'renderField',
    value: function renderField(props) {
      var _this2 = this;

      if (this.props.field && this.props.field.hidden && (0, _isFunction3.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden()) === true) {
          return null;
        }
      }

      var input = props.input,
          label = props.label,
          help = props.help,
          _props$meta = props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          valid = _props$meta.valid,
          custom = (0, _objectWithoutProperties3.default)(props, ['input', 'label', 'help', 'meta']);

      var size = (0, _get3.default)(props.field, 'bsSize', props.size);

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return { bsSize: size };
        }
      };

      var labelSize = function labelSize() {
        if ((0, _has3.default)(_this2.props.field, 'labelSize')) {
          return _this2.props.field.labelSize;
        }
        if (_this2.props.horizontal) {
          return { sm: 2 };
        }
      };

      var fieldSize = function fieldSize() {
        if ((0, _has3.default)(_this2.props.field, 'fieldSize')) {
          return _this2.props.field.fieldSize;
        }
        if (_this2.props.horizontal) {
          return { sm: 10 };
        }
      };

      var add = (0, _pick3.default)(custom, ['placeholder', 'inputProps']);
      var conf = (0, _merge3.default)(props.conf, props.locale.datetimepicker);

      var validationState = function validationState() {
        if (touched && error) {
          return 'error';
        }

        if (touched && valid) {
          return 'success';
        }
      };

      var disabled = false;
      if (this.props.field && this.props.field.diabled && (0, _isFunction3.default)(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled());
      }

      var component = function component() {
        return _react3.default.createElement(_reactDatetime2.default, (0, _extends3.default)({
          key: props.name,
          onChange: input.onChange,
          value: (0, _moment2.default)(input.value)
        }, add, conf, {
          inputProps: {
            disabled: disabled
          }
        }));
      };

      return _react3.default.createElement(
        _FormGroup2.default,
        (0, _extends3.default)({}, thisSize(), {
          validationState: validationState()
        }),
        _react3.default.createElement(
          _Col2.default,
          (0, _extends3.default)({ componentClass: _ControlLabel2.default }, labelSize()),
          label
        ),
        _react3.default.createElement(
          _Col2.default,
          fieldSize(),
          component(),
          touched && error && _react3.default.createElement(_FormControl2.default.Feedback, null),
          help && (!touched || !error) && _react3.default.createElement(
            _HelpBlock2.default,
            null,
            help
          ),
          touched && error && _react3.default.createElement(
            _HelpBlock2.default,
            null,
            error
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(_reduxForm.Field, (0, _extends3.default)({
        component: this.renderField
      }, this.props.field, {
        size: this.props.size,
        'static': this.props.static,
        locale: this.props.locale
      }));
    }
  }]);
  return Input;
}(_react3.default.Component));

Input.propTypes = {
  'field': _propTypes2.default.object,
  'checkDisabled': _propTypes2.default.func,
  'checkHidden': _propTypes2.default.func,
  'size': _propTypes2.default.string,
  'static': _propTypes2.default.bool,
  'locale': _propTypes2.default.object,
  'horizontal': _propTypes2.default.bool.isRequired
};
Input.defaultProps = {};

exports.default = Input;

function _inspect(input, depth) {
  var maxDepth = 4;
  var maxKeys = 15;

  if (depth === undefined) {
    depth = 0;
  }

  depth += 1;

  if (input === null) {
    return 'null';
  } else if (input === undefined) {
    return 'void';
  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
  } else if (Array.isArray(input)) {
    if (input.length > 0) {
      var _ret = function () {
        if (depth > maxDepth) return {
            v: '[...]'
          };

        var first = _inspect(input[0], depth);

        if (input.every(function (item) {
          return _inspect(item, depth) === first;
        })) {
          return {
            v: first.trim() + '[]'
          };
        } else {
          return {
            v: '[' + input.slice(0, maxKeys).map(function (item) {
              return _inspect(item, depth);
            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
          };
        }
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
    } else {
      return 'Array';
    }
  } else {
    var keys = (0, _keys2.default)(input);

    if (!keys.length) {
      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
        return input.constructor.name;
      } else {
        return 'Object';
      }
    }

    if (depth > maxDepth) return '{...}';
    var indent = '  '.repeat(depth - 1);
    var entries = keys.slice(0, maxKeys).map(function (key) {
      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
    }).join('\n  ' + indent);

    if (keys.length >= maxKeys) {
      entries += '\n  ' + indent + '...';
    }

    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
    } else {
      return '{\n  ' + indent + entries + '\n' + indent + '}';
    }
  }
}

module.exports = exports['default'];