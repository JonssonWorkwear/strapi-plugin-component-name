import { prefixPluginTranslations } from '@strapi/helper-plugin';

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
            sectionTitle: {
              id: 'component-name.component.label',
              defaultMessage: 'Component options',
            },
            items: [
              {
                autoFocus: true,
                name: 'default',
                type: 'text',
                intlLabel: {
                  id: 'component-name.settings.default',
                  defaultMessage: 'Default component name',
                },
                validations: {},
              },
            ],
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
