// Declare an async function
const url = "https://script.google.com/macros/s/AKfycbw1qI1o-xbDFGVNdo9rreIPRk3JoYNJCgDM9VvPG0JNgpiIsoFSvE4Ueq9VproYQjJnhQ/exec";
const getData = async () => {
  // Use the await keyword to let JS know this variable has some latency so it should wait for it to be filled 
  // When the variable is fetched, use the .then() callback to carry on 
    const DataJSON = await fetch(url).then(response => 
        response.json()
    )
    
    return await DataJSON
  };