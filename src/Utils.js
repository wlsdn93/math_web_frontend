const errorRedirectHandler = ((HttpStatusCode) => {
        if (HttpStatusCode === 403) {
            alert("You will be redirected to login page because your access-token is not valid")
            window.location.replace("http://localhost:8081/login")
        } else if (HttpStatusCode === 401) {
            alert("You are not allowed to access here")
            window.location.replace("http://localhost:8081/")
        }
    })


export {errorRedirectHandler}