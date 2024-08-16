//Fri Aug 16 2024 18:18:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
document.addEventListener("DOMContentLoaded", function () {
  function _0x13198d(_0x18e36a, _0x2ee0b0) {
    if (!_0x2ee0b0) {
      _0x2ee0b0 = Date.now().toString();
    }
    const _0x281526 = "http://s1.mcsol.cn:27581/yunyzkm/verify?api_version=1&app_id=05022c0ae6f7eab10000242d50cf1fbd&app_version=2.3&secret=" + _0x18e36a + "&device_code=" + _0x2ee0b0;
    fetch(_0x281526).then(_0x4d0a77 => _0x4d0a77.json()).then(_0x48add2 => {
      if (_0x48add2.status === 1 && _0x48add2.result.code != 104) localStorage.setItem("cardKey", _0x18e36a), localStorage.setItem("machineCode", _0x2ee0b0), function () {
        if (typeof VConsole !== "undefined") {
          window.vConsole = new VConsole();
        }
        var _0x3032d1 = document.getElementById("splash");
        _0x3032d1.style.display = "block";
        function _0x4c5ad0(_0x2d1fa8, _0x1d2a7b) {
          function _0x1e7f0c() {
            document.body.removeChild(_0x495bec);
            _0x495bec.removeEventListener("load", _0x1e7f0c, false);
            _0x1d2a7b && _0x1d2a7b();
          }
          var _0x495bec = document.createElement("script");
          _0x495bec.async = true;
          _0x495bec.src = _0x2d1fa8;
          _0x495bec.addEventListener("load", _0x1e7f0c, false);
          document.body.appendChild(_0x495bec);
        }
        var _0x108a78 = new Date().getTime(),
          _0x70b79d = ["src/settings.9b232.js", "config.cdcee.js", "main.cf073.js"],
          _0x596a86 = () => {
            if (_0x70b79d.length > 0) {
              var _0x38f53b = _0x70b79d.shift();
              _0x4c5ad0(_0x38f53b + "?v=" + _0x108a78, _0x596a86);
            } else {
              var _0x5127c1 = window._CCSettings.debug;
              _0x4c5ad0(_0x5127c1 ? "cocos2d-js.js" : "cocos2d-js-min.94c71.js", function () {
                CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON ? _0x4c5ad0(_0x5127c1 ? "physics.js" : "physics-min.js", window.boot) : window.boot();
              });
            }
          };
        _0x596a86();
      }();else _0x48add2.status === 0 ? (alert(_0x48add2.result.msg), _0xf678e2()) : (alert("验证失败，请重新输入"), _0xf678e2());
    }).catch(_0x522dce => {
      console.error("Error:", _0x522dce);
      alert("请求失败，请检查网络连接");
      _0xf678e2();
    });
  }
  function _0xf678e2() {
    const _0x20af50 = prompt("请输入卡密:");
    _0x20af50 ? _0x13198d(_0x20af50) : (alert("卡密不能为空"), _0xf678e2());
  }
  const _0x2b23f9 = localStorage.getItem("cardKey"),
    _0x475d36 = localStorage.getItem("machineCode");
  _0x2b23f9 && _0x475d36 ? _0x13198d(_0x2b23f9, _0x475d36) : _0xf678e2();
});
location.host != "s1.mcsol.cn:27581" && (window.location.href = "http://www.baidu.com");
document.onkeydown = function (_0x2d0570) {
  if (_0x2d0570.keyCode == 123) {
    return alert("F12审查元素已被禁用！"), false;
  }
  if (_0x2d0570.ctrlKey && _0x2d0570.shiftKey && _0x2d0570.keyCode == "I".charCodeAt(0)) {
    return alert("F12审查元素已被禁用！"), false;
  }
  if (_0x2d0570.ctrlKey && _0x2d0570.shiftKey && _0x2d0570.keyCode == "C".charCodeAt(0)) return alert("F12审查元素已被禁用！"), false;
  if (_0x2d0570.ctrlKey && _0x2d0570.shiftKey && _0x2d0570.keyCode == "J".charCodeAt(0)) return alert("F12审查元素已被禁用！"), false;
  if (_0x2d0570.ctrlKey && _0x2d0570.keyCode == "U".charCodeAt(0)) return alert("查看源代码已被禁用！"), false;
};