const LogInF = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // The signed-in user info.
        window.location = "Home.html"
        var user = result.user;
        console.log("User == > ", user)
        // ...
    }).catch(function (error) {
        console.log(error.message)
    });
}


const LogInG = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // The signed-in user info.
        window.location = "Home.html"
        var user = result.user;
        console.log("User == > ", user);
        // ...
    }).catch(function (error) {
        console.log(error.message);

    });
}

const LogInGitHub = () => {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // The signed-in user info.
        var user = result.user;
        console.log("User == > ", user);

        // ...
    }).catch(function (error) {
        console.log(error.message);

    });
}


const SignOut = () => {
    firebase.auth().SignOut()
        .then(() => {
            window.location = "index.html"

        })
        .catch(() => {

        })
}
