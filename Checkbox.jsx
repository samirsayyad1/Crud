import React, { useState } from 'react';

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const update = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={update}
        id="inp"
      />

      <p style={{ display: isChecked ? 'block' : 'none' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias itaque
        tempora, earum iure nam et ea ducimus ab reprehenderit, quis omnis,
        facilis voluptate dolore? Aspernatur labore facere ipsa quibusdam
        reiciendis?
      </p>
    </>
  );
}

export default Checkbox;

