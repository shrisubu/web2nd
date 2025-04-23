let str="Hello how Are you"
let c=0;
let count='aeiouAEIOU'
for(i=0;i<str.length;i++)
{
    if(count.includes(str[i]));
    {
        c++;
    }
}
console.log(`number of vowels ${c}`)