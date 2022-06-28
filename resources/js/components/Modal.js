import React, { useState } from 'react';
import Weather from './Weatherblock';

export default function ButtonOpen() {
  const [show, setShow] = React.useState(false);
  return (
    <div className="container text-center">
      <button className="btn-primary" onClick={() => setShow(true)}>
        Modal
      </button>
      <Weather show={show} onClose={() => setShow(false)}>
      </Weather>
    </div>
  );
}