import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="age" source="age" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="mobile" source="mobile" />
        <TextInput label="name" source="name" />
        <TextInput label="test" source="test" />
      </SimpleForm>
    </Edit>
  );
};
