import React from 'react';
import { Edit, SimpleForm, TextInput, ListProps } from 'react-admin';

const ProductEdit = (props: ListProps) => (
  <Edit title="Edit a product" {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="size" />
      <TextInput source="color" />
      <TextInput source="price" />
      <TextInput source="category" />
    </SimpleForm>
  </Edit>
);

export default ProductEdit;
