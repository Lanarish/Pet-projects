import React from 'react';
import { Edit, SimpleForm, TextInput, EditProps, SelectInput } from 'react-admin';

const ProductEdit = (props: EditProps) => (
  <Edit title="Edit a product" {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="size" />
      <TextInput source="color" />
      <TextInput source="price" />
      <SelectInput
        label="Category"
        source="category.id"
        choices={[
          { id: '1', name: 'Jackets' },
          { id: '2', name: 'Trench coats' },
        ]}
      />
    </SimpleForm>
  </Edit>
);

export default ProductEdit;
