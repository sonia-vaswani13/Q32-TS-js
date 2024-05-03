//Q32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted
var currentUsers = ["john", "smith", "alex", "emma", "cheris"];
//list of new user
var newUsers = ["maria", "Alex", "peter", "miller", "smith"];
//function to check if username is available
function isUsernameAvailable(username) {
    //convert both usernam-e arrays to lowercase for case-intensitive comparision
    var currentUsersLowercase = currentUsers.map(function (user) { return user.toLowerCase(); });
    var usernameLowercase = username.toLowerCase();
    return !currentUsersLowercase.includes(usernameLowercase);
}
//loop through new_users list and check availibility of each usernsme
newUsers.forEach(function (newUsers) {
    if (isUsernameAvailable(newUsers)) {
        console.log("the username  '".concat(newUsers, " 'is available"));
    }
    else {
        console.log("sorry, the username'".concat(newUsers, "' is already taken.please choose another one."));
    }
});
