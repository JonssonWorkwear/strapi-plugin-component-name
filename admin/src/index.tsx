import { prefixPluginTranslations } from '@strapi/helper-plugin';

import * as yup from 'yup';

import PluginIcon from './components/PluginIcon';

export default {
  register(app: any) {
    app.customFields.register({
      name: 'ComponentNameField',
      pluginId: 'component-name',
      type: 'text',
      icon: PluginIcon,
      intlLabel: {
        id: 'component-name.label',
        defaultMessage: 'Component name field',
      },
      intlDescription: {
        id: 'component-name.description',
        defaultMessage: 'Generates component name for the API',
      },
      components: {
        Input: async () => import('./components/ComponentNameField'),
      },
      options: {
        base: [
          {
            autoFocus: true,
            name: 'options.defaultName',
            type: 'text',
            intlLabel: {
              id: 'component-name.default.label',
              defaultMessage: 'Default component name',
            },
            description: {
              id: 'component-name.default.description',
              defaultMessage: 'The original name of the component',
            },
            required: true,
          },
        ],
        advanced: [
          {
            sectionTitle: {
              id: 'component-name.settings',
              defaultMessage: 'Settings',
            },
            items: [
              {
                name: 'required',
                type: 'checkbox',
                intlLabel: {
                  id: 'component-name.required.label',
                  defaultMessage: 'Required field',
                },
                description: {
                  id: 'component-name.required.description',
                  defaultMessage: "You won't be able to create an entry if this field is empty",
                },
              },
            ],
          },
        ],
        validator: (args) => ({
          defaultName: yup.string().required({
            id: 'component-name.default.error',
            defaultMessage: 'Default name is required',
          }),
        }),
      },
    });
  },

  bootstrap(app: any) {},

  async registerTrads(app: any) {
    const { locales } = app;

    const importedTrads = await Promise.all(
      (locales as any[]).map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, 'component-name'),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
