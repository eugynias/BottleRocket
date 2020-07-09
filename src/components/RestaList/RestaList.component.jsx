import React ,{useState} from 'react';

import RestaItem from '../../components/RestaItem/RestaItem.component';


const RestaList= ({ restaurants }) => {

  const [list,setList]= useState({restaurants})
  //console.log(restaurants)

  //Accedo a restaurants
  const array=(Object.keys(list) );

  
  console.log(array)
  
  // const array1=(Object.keys(array) );
  // console.log(array1)

  //console.log(Object.hasOwnProperty(array))


  return (
    <div>
      {/* {restaurants.map(( restaItem ) => (  
          <RestaItem restaItem={restaItem} />
  
      ))} */}
    </div>
  )
};


export default RestaList;
