const url = "http://localhost:3000/api/todo/";

const apiRequest = (options) => {
fetch(url, options)
.then(res => {
    if(!res .ok){
        if(res.status >= 400 && res.status < 500) {
           return res.json().then(data => {
               let err = {error: data.message};
               throw err;
           })
        } else {
            let err = {error: 'Sorry, the server is not responding. Please try again later.'}
            throw err;
        }
    }
        return res.json();
    }).catch(err => console.log(err))
}
    export default apiRequest;