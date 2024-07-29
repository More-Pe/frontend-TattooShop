import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CSurfer = (
    {
        className,
        content,
        path
    }

) => {
    const navigate = useNavigate();

  return (
    <div className={className} onClick={ ()=> navigate(path) }>{ content }</div>
  )
}

