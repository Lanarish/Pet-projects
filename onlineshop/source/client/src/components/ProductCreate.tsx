import React from 'react';
import { Create, SimpleForm, TextInput, CreateProps, SelectInput } from 'react-admin';

import { CATEGORY_ONE, CATEGORY_TWO } from 'src/store/constants';

const ProductCreate = (props: CreateProps) => (
  <Create title="Create a product" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="size" />
      <TextInput source="color" />
      <TextInput source="price" />
      <SelectInput defaultValue="2" source="category" choices={[CATEGORY_ONE, CATEGORY_TWO]} />
    </SimpleForm>
  </Create>
);

export default ProductCreate;
