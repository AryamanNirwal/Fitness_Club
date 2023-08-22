export const exerciseOptions = {
    method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5b45a1f89fmsh681fa32bdc49c24p1b8104jsn404157cc1cd5',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async(url , options)=>{
    const response  = await fetch(url , options);
    const data = await response.json();

    return data;
}