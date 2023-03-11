import React from 'react';

const EditCreator = ({ creator }: any) => {
  return (
    <div>
      <h1>EDIT CREATOR</h1>
      {Object.keys(creator).map((key) => (
        <div>
          {key} : {creator[key]}
        </div>
      ))}
    </div>
  );
};

export default EditCreator;
