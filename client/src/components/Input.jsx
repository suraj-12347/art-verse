import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/slices/searchSlice";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setSearchQuery(value)); // Redux me store
    navigate("/explore");           // Explore page par redirect
  };

  return (
    <input
      type="text"
      placeholder="Search artworks, artists..."
      className="border-none outline-none bg-transparent w-full text-sm"
      onChange={handleChange}
    />
  );
};

export default Input;
