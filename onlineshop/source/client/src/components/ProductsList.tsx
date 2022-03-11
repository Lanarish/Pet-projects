import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, ListProps } from 'react-admin';

const ProductsList = (props: ListProps) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="size" />
      <TextField source="color" />
      <TextField source="price" />
      <TextField source="category.name" />
      <EditButton basePath="/product" />
      <DeleteButton basePath="/product" />
    </Datagrid>
  </List>
);
export default ProductsList;
