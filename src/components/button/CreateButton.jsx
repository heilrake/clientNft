import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CREATE_ROUTE } from '../../untils/consts';
const CreateButton = () => {
  const navigate = useNavigate();
  return (
    <button className="header__create create-button" onClick={() => navigate(CREATE_ROUTE)}>
      Create
    </button>
  );
};

export default CreateButton;
