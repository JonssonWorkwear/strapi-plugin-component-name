import React from 'react';

import { Field, FieldHint, FieldError, TextInput } from '@strapi/design-system';

import { useIntl } from 'react-intl';

const ComponentNameField = ({
  intlLabel,
  name,
  onChange,
  value,
  labelAction,
  required,
  error,
  description,
  attribute,
}) => {
  const { formatMessage } = useIntl();

  // Always set the value to the default value
  onChange({ target: { name, value: attribute.default } });

  // Return TextInput, but always disabled and hidden
  return (
    <Field name={name} id={name} error={error} hint={description}>
      <TextInput
        label={formatMessage(intlLabel)}
        name={name}
        value={value}
        disabled
        labelAction={labelAction}
        required={required}
      />

      <FieldHint />
      <FieldError />
    </Field>
  );
};

export default ComponentNameField;
