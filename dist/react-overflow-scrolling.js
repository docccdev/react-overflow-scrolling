'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var setScrollPadding = function setScrollPadding(node) {
    var scrollTop = node.scrollTop,
        offsetHeight = node.offsetHeight,
        scrollHeight = node.scrollHeight;


    if (scrollTop <= 0) {
        node.scrollTop = 1;
    }

    if (scrollTop + offsetHeight >= scrollHeight) {
        node.scrollTop = scrollHeight - offsetHeight - 1;
    }
};

var OverflowScrolling = function (_React$Component) {
    _inherits(OverflowScrolling, _React$Component);

    function OverflowScrolling(props) {
        _classCallCheck(this, OverflowScrolling);

        var _this = _possibleConstructorReturn(this, (OverflowScrolling.__proto__ || Object.getPrototypeOf(OverflowScrolling)).call(this, props));

        _this.state = {
            isScrollable: false
        };
        _this.onTouchStart = _this.onTouchStart.bind(_this);
        _this.onTouchMove = _this.onTouchMove.bind(_this);
        _this.onTouchEnd = _this.onTouchEnd.bind(_this);
        return _this;
    }

    _createClass(OverflowScrolling, [{
        key: 'onTouchStart',
        value: function onTouchStart() {
            var parentNode = _reactDom2.default.findDOMNode(this);
            var isScrollable = parentNode.scrollHeight > parentNode.offsetHeight;

            if (isScrollable) {
                setScrollPadding(parentNode);
            }

            this.setState({
                isScrollable: !isScrollable
            });
        }
    }, {
        key: 'onTouchMove',
        value: function onTouchMove(e) {
            if (this.state.isScrollable) {
                e.preventDefault();
            }
        }
    }, {
        key: 'onTouchEnd',
        value: function onTouchEnd() {
            this.setState({
                isScrollable: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var newProps = {
                className: this.props.className,
                style: this.props.style,
                onTouchStart: this.onTouchStart,
                onTouchMove: this.onTouchMove,
                onTouchEnd: this.onTouchEnd,
                onTouchCancel: this.onTouchEnd
            };
            return _react2.default.createElement('div', newProps, this.props.children);
        }
    }]);

    return OverflowScrolling;
}(_react2.default.Component);

OverflowScrolling.displayName = 'OverflowScrolling';
OverflowScrolling.propTypes = {
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    children: _propTypes2.default.node
};
exports.default = OverflowScrolling;