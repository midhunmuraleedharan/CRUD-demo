import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="age" source="age" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="mobile" source="mobile" />
        <TextInput label="name" source="name" />
        <TextInput label="something" source="something" />
        <TextInput label="test" source="test" />
      </SimpleForm>
    </Create>
  );
};
