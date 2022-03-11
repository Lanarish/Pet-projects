import React from 'react';
import { Create, SimpleForm, TextInput, ListProps } from 'react-admin';

const ProductCreate = (props: ListProps) => (
  <Create title="Create a product" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="size" />
      <TextInput source="color" />
      <TextInput source="price" />
      <TextInput source="category" />
    </SimpleForm>
  </Create>
);

export default ProductCreate;
