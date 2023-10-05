⚠️ **ARCHIVED**: This plugin has been dropped in favour of using `__typename` from the GraphQL API. It is not maintained or used anymore.

# Component name custom field

This package provides a custom field for Strapi that holds the name of the component that is being used. It is set in the Content-Type Builder, hidden in the Content Manager, and only available to the API.

![Component name custom field preview. Features a disabled text field.](https://github.com/JonssonWorkwear/strapi-plugin-component-name/assets/22895284/2d9854ef-efe6-428a-8b71-462cce511c52)


<div align="center">
  <a href="https://github.com/JonssonWorkwear/strapi-plugin-component-name/actions/workflows/release.yml">
    <img src="https://github.com/JonssonWorkwear/strapi-plugin-component-name/actions/workflows/release.yml/badge.svg?branch=release" alt="Release status">
  </a>
  <a href="https://www.npmjs.com/package/@jonssonworkwear/strapi-plugin-component-name">
    <img alt="npm (scoped)" src="https://img.shields.io/npm/v/%40jonssonworkwear/strapi-plugin-component-name?logo=npm&label=%40jonssonworkwear%2Fstrapi-plugin-component-name&color=%234845F5">
  </a>
</div>

## 🏖️ Features

* **Set component name:** to make it avaialbe for the API. 
* **Hide it:** to avoid confusion while content edition.

## 🔧 Installation

To install this plugin simply run this command in the Strapi project:

```
yarn add @jonssonworkwear/strapi-plugin-component-name
```

## ✨ Usage

When adding a new field to a content type, select **CUSTOM** (instead of **DEAFULT**), then select **Component name field**.

![Component name custom field preview inside the content type builder](https://github.com/JonssonWorkwear/strapi-plugin-component-name/assets/22895284/1440317e-237a-4f50-892c-75f92e62a5ac)


Inside a content-type, we can use the following schema:

```json
"icon": {
  "type": "customField",
  "customField": "plugin::component-name.ComponentNameField"
}
```

## 🪛 Development

Clone this repository in the Strapi directory.

```
git clone https://github.com/JonssonWorkwear/strapi-plugin-component-name.git src/plugins/strapi-plugin-component-name
```

Add the plugin to the yarn workspace, inside `./package.json` file, so we won't need to use `yarn` inside plugin itself.

```
"workspaces": ["./src/plugins/strapi-plugin-component-name"]
```

Install dependencies.

```
yarn
```

Register the plugin so Strapi can use it. Inside `./config/plugins.js` file add an entry:

```
module.exports = ({ env }) => ({
  "component-name": {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-component-name"
  },
});
```

Rebuild the project and start the server.

```
yarn build
yarn develop
```

Or perhaps use the `--watch-admin` flag to toggle hot reloading of the admin panel.

```
yarn develop --watch-admin
```

### Release changes

All the changes are commited and pushed to _this_ repository (or its forks), independently from the Strapi directory. The changes on the `release` branch will be published in the `@jonssonworkwear/strapi-plugin-component-name` package. If there is a new release published, plugins inside the Strapi project might need their version bumped.
