var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
console.log("function was called");
// console.log(response.location);
// console.log(response.followers);
};

getUserRepos();