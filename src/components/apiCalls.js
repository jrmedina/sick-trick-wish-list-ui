const apiCall = () => {
  return fetch(`http://localhost:3001/api/v1/tricks`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response);
      }
    })
    .catch((error) => {
      return true;
    })

    
}

    const getData = () => {
        const promise = Promise.all([apiCall()]).then(tricks => {
            
            return tricks
        })
        return promise
    }

    export {getData}