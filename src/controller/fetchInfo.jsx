
const URL= 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json'

function getRestaurants () {
    return new Promise ((resolve,reject)=> {
        fetch(URL).then(
            (response=>response.json())
        ).then(result =>{

            const dataArray =result.map(element =>{
                const restaurants ={
                    'name': element.name,
                    'location':element.location,
                };
                console.log(restaurants)
                return restaurants
            });
            resolve (dataArray)
        })
        .catch(error=>{
            console.log('error',error);
            reject(error);
        });
    });
}


