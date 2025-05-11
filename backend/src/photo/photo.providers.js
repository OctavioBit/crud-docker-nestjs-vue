"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.photoProviders = void 0;
var photo_entity_1 = require("./photo.entity");
exports.photoProviders = [
    {
        provide: 'PHOTO_REPOSITORY',
        useFactory: function (dataSource) { return dataSource.getRepository(photo_entity_1.Photo); },
        inject: ['DATA_SOURCE'],
    },
];
