import React ,{useState} from 'react';

import RestaItem from '../../components/RestaItem/RestaItem.component';
import * as Style from './RestaList.styles';


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
