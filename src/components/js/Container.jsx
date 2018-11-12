import React from 'react';

const Container = (props) => {
  return (
    <div className="row">
      <div className="container-fluid shadow-lg p-4 mb-4 bg-white">
        {props.children}
      </div>
    </div>
  );
}

export default Container;
