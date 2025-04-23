//Wap to check who is eligible to caste the vote in the given array while vote casting min age is 18
let arr=[
    {
        name:"shubham",
        age:18
    },
    {
        name:"sumit",
        age:21
    },
    {
        name:"sameer",
        age:20
    },
    {
        name:"shrivastava",
        age:22
    }
]
for (let i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
        console.log(`${arr[i].name} is eligible to vote.`);
    } else {
        console.log(`${arr[i].name} is not eligible to vote.`);
    }
}