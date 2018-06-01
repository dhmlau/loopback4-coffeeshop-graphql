"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Following https://github.com/strongloop/loopback-next/blob/master/examples/todo/src/datasources/db.datasource.ts
const path = require("path");
// The juggler reference must exist for consuming code to correctly infer
// type info used in the "db" export (contained in juggler.DataSource).
// tslint:disable-next-line:no-unused-variable
const repository_1 = require("@loopback/repository");
const dsConfigPath = path.resolve(__dirname, '../../../config/datasources.json');
const config = require(dsConfigPath);
// TODO(bajtos) Ideally, datasources should be created by @loopback/boot
// and registered with the app for dependency injection.
// However, we need to investigate how to access these datasources from
// integration tests where we don't have access to the full app object.
// For example, @loopback/boot can provide a helper function for
// performing a partial boot that creates datasources only.
exports.db = new repository_1.juggler.DataSource(config);
//# sourceMappingURL=db.datasource.js.map