import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    user: { _id, name, email, role }
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className="shadow card">
        <div className="card-header">Admin Links</div>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/create/category">
              Create category
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/create/product">
              Create Product
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="shadow card mb-5">
        <div className="card-header">User Information</div>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title="Dashboard"
      description={`Hello ${name}!`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-3">
            {adminLinks()}
        </div>
        <div className="col-9">
            {adminInfo()}
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
