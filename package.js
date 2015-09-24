Package.describe({
  name: "shilman80:bootstrap-3",
  summary: "HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",
  version: "3.3.0",
  git: "https://github.com/mizzao/meteor-bootstrap-3.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.0");

  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('bootstrap-3');
  // @shilman80 hack - configure bootstrap CSS by hand
  // api.addFiles(path.join(asset_path, 'css', 'bootstrap.css'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'bootstrap.js'), 'client');

  // fonts
  api.addAssets(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.eot'), 'client');
  api.addAssets(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.ttf'), 'client');
  api.addAssets(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.svg'), 'client');
  api.addAssets(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.woff'), 'client');

  // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard bootstrap css so
  // that its styles take precedence.

  // If this file is not added, browsers using the icon fonts will not be able
  // to load them if the page is initially accessed at an url other than /.
  api.addFiles(path.join('bootstrap-override.css'), 'client');
});
