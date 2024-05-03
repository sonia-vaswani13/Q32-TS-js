//Q32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted
 let currentUsers:string[]=[`john`,`smith`,`alex`,`emma`,`cheris`];

//list of new user
let newUsers:string[] =[`maria`,`Alex`,`peter`,`miller`,`smith`];
//function to check if username is available
function isUsernameAvailable(username: string): boolean {
//convert both usernam-e arrays to lowercase for case-intensitive comparision
let currentUsersLowercase: string[] =currentUsers.map(user =>user.toLowerCase());
let usernameLowercase:string = username.toLowerCase();
return !currentUsersLowercase.includes(usernameLowercase);

}
//loop through new_users list and check availibility of each usernsme
newUsers.forEach(newUsers =>{
if (isUsernameAvailable(newUsers)){
console.log(`the username  '${newUsers} 'is available`)
}else {
    console.log(`sorry, the username'${newUsers}' is already taken.please choose another one.`);
}
});