import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import ProductsList from 'src/components/ProductsList';
import ProductCreate from 'src/components/ProductCreate';
import ProductEdit from 'src/components/ProductEdit';

const AdminPanel = () => {
  const dataProvider = jsonServerProvider('http://localhost:3001/api');
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="products" list={ProductsList} create={ProductCreate} edit={ProductEdit} />
    </Admin>
  );
};

export default AdminPanel;
