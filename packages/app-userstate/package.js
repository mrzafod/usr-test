Package.describe({
  summary: "Proveide online and last online status"
});

Package.on_use(function (api) {
  api.use(['templating'], 'client');

  api.add_files("userstate.html", "client");
  api.add_files("userstate.js", "server");

  api.export('UserState');
});
