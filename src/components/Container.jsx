import React from 'react';

const Container = (props) => {
  return (
    <div className="row">
      <Container>{props}</Container>

    </div>
  );
}

export default Container;
