import React from 'react';
import { Create, SimpleForm, TextInput, CreateProps, SelectInput } from 'react-admin';

const ProductCreate = (props: CreateProps) => (
  <Create title="Create a product" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="size" />
      <TextInput source="color" />
      <TextInput source="price" />
      <SelectInput
        defaultValue="2"
        source="category"
        choices={[
          { id: '1', name: 'Jackets' },
          { id: '2', name: 'Trench coats' },
        ]}
      />
    </SimpleForm>
  </Create>
);

export default ProductCreate;
