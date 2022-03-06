;
(function (win) {
  var doc = win.document;
  var docE1 = doc.documentElement;
  var tid;

  function refreshRem() {
    var width = docE1.getBoundingClientRect().width;
    if (width > 640) {
      width = 640;
    }
    var rem = width / 6.4;
    docE1.style.fontSize = rem + "px";
  }

  win.addEventListener('resize', function () {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);
  win.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);

  refreshRem();

})(window);
