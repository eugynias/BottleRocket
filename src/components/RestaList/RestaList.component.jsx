import React ,{useState} from 'react';

import RestaItem from '../../components/RestaItem/RestaItem.component';


const RestaList= ({ restaurants }) => {

  return (
    <div>
      {restaurants.map(( restaItem ) => (  
          <RestaItem restaItem={restaItem} />
  
      ))}
    </div>
  )
};


export default RestaList;
