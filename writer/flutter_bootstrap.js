// Custom Flutter web bootstrap.
//
// This file is used by `web/index.html` and is copied into `build/web/`.
// We keep it in source control so we can force a stable renderer on mobile.
//
// NOTE: This file is intentionally small; it defers to Flutter's generated loader.

(function () {
  // `flutter.js` is emitted by Flutter into build/web and exposes `_flutter.loader`.
  var script = document.createElement("script");
  script.src = "flutter.js";
  script.type = "application/javascript";

  script.onload = function () {
    // Force a non-WebGL renderer to avoid black screens on mobile caused by
    // `CONTEXT_LOST_WEBGL` when CanvasKit loses the GL context.
    _flutter.loader.load({
      config: {
        renderer: "skwasm"
      }
    });
  };

  document.head.appendChild(script);
})();

