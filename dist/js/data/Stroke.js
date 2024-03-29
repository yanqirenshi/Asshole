"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stroke = /*#__PURE__*/function () {
  function Stroke() {
    _classCallCheck(this, Stroke);
  }

  _createClass(Stroke, [{
    key: "template",
    value: function template() {
      return {
        color: '#afafb0',
        type: 'solid',
        width: 1
      };
    }
  }, {
    key: "build",
    value: function build(data) {
      var out = this.template();
      if (!data) return null;
      if (data.color) out.color = data.color;
      if (data.width) out.width = data.width;
      if (data.type) out.type = data.type;
      return out;
    }
  }]);

  return Stroke;
}();

exports.default = Stroke;