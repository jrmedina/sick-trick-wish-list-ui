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

const postTrick = (trick) => {
      return fetch("http://localhost:3001/api/v1/tricks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trick),
      })
        .then((trick) => {
          if (trick.ok) {
            return trick.json();
          } else {
            throw Error(trick.status.Text);
          }
        })
        .catch((error) => console.log(error));
}


    const getData = () => {
        const promise = Promise.all([apiCall()]).then(tricks => {
            
            return tricks
        })
        return promise
    }

    export {getData, postTrick}