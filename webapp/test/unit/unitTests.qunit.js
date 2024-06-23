/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comtushar/project2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
