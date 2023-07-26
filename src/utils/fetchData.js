export const exerciseOptions =  {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
  };
  

export const youtubeOptions= {
  method: 'GET',
  headers: {
   
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '4b8f79d638msh12cc8181d66560dp1bad07jsnd25ebf7f7467'
  }
};


export const fetchData = async (url,options) =>{
    const response = await fetch(url, options);
    const data= await response.json();
    return data ;

}