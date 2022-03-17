import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Link } from 'react-router-dom';

import ProductsList from 'src/components/ProductsList';
import ProductCreate from 'src/components/ProductCreate';
import ProductEdit from 'src/components/ProductEdit';

import './../styles/AdminPanel.scss';

const AdminPanel = () => {
  const dataProvider = jsonServerProvider('http://localhost:3001/api');
  return (
    <div className="admin-panel">
      <Admin dataProvider={dataProvider}>
        <Resource name="products" list={ProductsList} create={ProductCreate} edit={ProductEdit} />
      </Admin>

      <Link to={'/'} className="link-footer">
        Back to main page
      </Link>
    </div>
  );
};

export default AdminPanel;
