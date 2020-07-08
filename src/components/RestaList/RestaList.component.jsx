import React, { useState, useEffect } from 'react';

import RestaItem from '../../components/RestaItem/RestaItem.component';


function RestaList() {

  const [restaList, setRestaList] = useState([])

  const API_URL=`http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json`


  const getResta = async () => {
    const response = await fetch(API_URL);
    console.log(data)
    const data = await response.json();
    setRestaList(data);
    return data
  };

  useEffect(() =>{
		getResta();
	},[]);

  return (
    <div>
      
        { restaList.map((resta) => (
                <RestaItem data={resta} />
              
            ))}
    
    </div>
  )
}

export default RestaList;
