Package.on_use(function(api) {
	// api.use(["deps", "accounts-base", "accounts-password"], ["client", "server"]);
	// api.use(["accounts-ui"], ["client"]);

	api.use(["deps", "accounts-base", "templating", "handlebars", "spark", "session", "accounts-ui"], "client");
	api.use("accounts-base", "server");
	api.use("accounts-password", ["client", "server"]);

	api.add_files("server.js", "server");
	api.add_files(["client.js", "widgets.html", "widgets.js"], "client");
});