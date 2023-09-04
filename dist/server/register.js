"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => {
    strapi.customFields.register({
        name: 'ComponentNameField',
        plugin: 'component-name',
        type: 'text',
    });
};
