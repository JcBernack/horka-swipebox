Package.describe({
  name: "jcbernack:swipebox",
  summary: "Swipebox image viewer plugin for Meteor.",
  version: "1.1.0",
  git: "https://github.com/jcbernack/meteor-swipebox",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("1.2.1");
  api.addFiles([
    "swipebox/css/swipebox.css",
    "swipebox/js/jquery.swipebox.js"
  ], "client");
  api.addAssets([
    "swipebox/img/loader.gif",
    "swipebox/img/icons.png",
    "swipebox/img/icons.svg"
  ], "client");
});
