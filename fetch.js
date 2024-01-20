//const object_that_will_post =
// it will get from user and designed as object

fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'POST',
    body: JSON.stringify(object_that_will_post),
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))