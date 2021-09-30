// Add your code here
function submitData(userName, userEmail){
    const url = 'http://localhost:3000/users'; 
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    };
    return fetch(url, configurationObject)
        .then(resp => resp.json())
        .then(results => {
            const newP = document.createElement('p');
            newP.textContent = results.id;
            document.querySelector('body').append(newP);
        }).catch(error => {
            console.error(error);
            console.error('Attempted URL:', url);
            console.error('Attempted Options:', configurationObject);
            const newP = document.createElement('p');
            newP.textContent = error;
            document.querySelector('body').append(newP);
        });
}