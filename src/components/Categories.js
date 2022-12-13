import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../redux/categories/categories';

const Cateories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);
  const check = (e) => {
    e.preventDefault();
    dispatch(Creators());
  };

  return (
    <div>
      <h2>{categories}</h2>
      <button type="button" onClick={check}>Check status</button>
    </div>
  );
};
export default Cateories;
