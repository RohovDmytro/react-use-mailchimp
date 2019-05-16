'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = useMailchimp;

var _jsonp = require('jsonp');

var _jsonp2 = _interopRequireDefault(_jsonp);

var _react = require('react');

var _toQuerystring = require('to-querystring');

var _toQuerystring2 = _interopRequireDefault(_toQuerystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postFormData = function postFormData(data) {
  return 'TODO';
};

var BASE_URL = 'https://<dc>.api.mailchimp.com/3.0';

var getURL = function getURL(url) {
  return url.replace('/post?', '/post-json?');
};

function useMailchimp(_ref) {
  var url = _ref.url;

  var _useState = (0, _react.useState)({
    status: 'YO'
  }),
      state = _useState[0],
      setState = _useState[1];

  var subscribe = function subscribe(data) {
    var params = (0, _toQuerystring2.default)(data);
    var requestURL = getURL(url) + '&' + params;
    setState(_extends({}, state, {
      status: 'LOADING'
    }));
    var requestOpts = {
      param: 'c',
      timeout: 2000
    };

    var process = function process(err, data) {
      console.log('process');
      console.log(err);
      console.log(data);
      if (err) {
        setState(_extends({}, state, {
          status: 'ERROR',
          message: err
        }));
      } else if (data.result !== 'success') {
        setState(_extends({}, state, {
          status: 'ERROR',
          message: data.msg
        }));
      } else {
        setState(_extends({}, state, {
          status: 'SUCCESS',
          message: data.msg
        }));
      }
    };
    console.log('calling jsonp');
    console.log(requestURL);

    (0, _jsonp2.default)(requestURL, requestOpts, process);
  };

  return [state, subscribe];
}
module.exports = exports['default'];