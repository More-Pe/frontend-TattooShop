import React from "react";

export const CSelect = ({category, options, handler}) => {


    return (
      <select defaultValue="" onChange={handler}>
        <option disabled hidden value="">
          {category}
        </option>
        {options.map((option) => {
          return <option value={option.id} key={option.id}>{option.serviceName}</option>
        })}
      </select>
    );
  };