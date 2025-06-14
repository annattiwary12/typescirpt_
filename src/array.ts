interface User{
     firstName: string;
     lastName:string;
     age:number;
}
function filterUser (users:User[]){
    let ans =[]
    for (const user of users) {
        if (user.age > 18) {
            ans.push(user);
        }
    }
    return ans;
}