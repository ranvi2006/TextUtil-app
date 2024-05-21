import React from 'react';

export default function Alart(props) {
  return (

  props.alart && 
   <div className="alert alert-success" role="alert">
   <h4>{props.alart.done}: {props.alart.message}</h4>
</div>
    
  );
}
