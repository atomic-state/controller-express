"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var express_1 = require("express");
function Controller(paths) {
    if (paths === void 0) { paths = {}; }
    var router = (0, express_1.Router)();
    for (var route in paths) {
        var _a = route.split(" "), method = _a[0], url = _a[1];
        router.route(url)[method.toLowerCase()](paths[route]);
    }
    return router;
}
exports.Controller = Controller;
