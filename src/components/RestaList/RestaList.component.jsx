import React from 'react';

import RestaItem from '../../components/RestaItem/RestaItem.component';


function RestaList({ restaListData }) {
  return (
    <div>
      {restaListData.map((restaData) => (
        <RestaItem restaData={restaData} />
      ))}
    </div>
  );
};


export default RestaList;
