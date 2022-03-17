import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, ListProps, ChipField } from 'react-admin';

const ProductsList = (props: ListProps) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="size" />
      <TextField source="color" />
      <TextField source="price" />
      <ChipField label="Category" source="category.name" />
      <EditButton basePath="/products" />
      <DeleteButton basePath="/products" />
    </Datagrid>
  </List>
);

export default ProductsList;
