import React from 'react';

import { Field, FieldHint, FieldError, TextInput } from '@strapi/design-system';

import { useIntl } from 'react-intl';

const displayNoneStyle = {
  display: 'none',
};

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
  onChange({ target: { name, value: attribute?.options?.defaultName } });

  // Return TextInput, but always disabled and hidden
  return (
    <Field name={name} id={name} error={error} hint={description} style={displayNoneStyle}>
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
