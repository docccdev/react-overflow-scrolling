'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEasySwipe = require('react-easy-swipe');

var _reactEasySwipe2 = _interopRequireDefault(_reactEasySwipe);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OverflowScrolling = function (_React$Component) {
    _inherits(OverflowScrolling, _React$Component);

    function OverflowScrolling(props) {
        _classCallCheck(this, OverflowScrolling);

        var _this = _possibleConstructorReturn(this, (OverflowScrolling.__proto__ || Object.getPrototypeOf(OverflowScrolling)).call(this, props));

        _this.disableScroll = function (_ref, event) {
            var deltaY = _ref.deltaY;

            var scrollAllow = (0, _utils.isScrollAllow)(_this.currentNode);
            var moveTopAllow = deltaY < 0 && !(0, _utils.isScrollMoveTopAllow)(_this.currentNode);
            var moveBottomAllow = deltaY > 0 && !(0, _utils.isScrollMoveBottomAllow)(_this.currentNode);

            if (_this.childrenNode && (0, _utils.isScrollAllow)(_this.childrenNode)) {
                var childMoveTopAllow = deltaY < 0 && !(0, _utils.isScrollMoveTopAllow)(_this.childrenNode);
                var childMoveBottomAllow = deltaY > 0 && !(0, _utils.isScrollMoveBottomAllow)(_this.childrenNode);

                if (moveTopAllow && childMoveTopAllow || moveBottomAllow && childMoveBottomAllow) {
                    (0, _utils.stopEvent)(event);
                }
            } else if (scrollAllow) {
                if (moveTopAllow || moveBottomAllow) {
                    (0, _utils.stopEvent)(event);
                }
            } else {
                (0, _utils.stopEvent)(event);
            }
        };

        _this.onTouchStart = function (event) {
            _this.currentNode = event.currentTarget;
            _this.childrenNode = (0, _utils.getChildrenScrollNode)(event);
        };

        _this.onTouchEnd = function () {
            _this.currentNode = null;
            _this.childrenNode = null;
        };

        _this.onTouchMove = function (_ref2, event) {
            var y = _ref2.y;

            _this.disableScroll({
                deltaY: y * -1
            }, event);
        };

        _this.onWheel = function (event) {
            _this.currentNode = event.currentTarget;
            _this.childrenNode = (0, _utils.getChildrenScrollNode)(event);

            _this.disableScroll({
                deltaY: event.deltaY
            }, event);
        };

        _this.currentNode = null;
        _this.childrenNode = null;
        return _this;
    }

    _createClass(OverflowScrolling, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;

            var newProps = Object.assign({}, this.props, {
                onSwipeStart: this.onTouchStart,
                onSwipeMove: this.onTouchMove,
                onSwipeEnd: this.onTouchEnd,
                onWheel: this.onWheel
            });

            return _react2.default.createElement(_reactEasySwipe2.default, newProps, children);
        }
    }]);

    return OverflowScrolling;
}(_react2.default.Component);

OverflowScrolling.displayName = 'OverflowScrolling';
OverflowScrolling.propTypes = {
    children: _propTypes2.default.node.isRequired
};
exports.default = OverflowScrolling;