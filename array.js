let marks=[20,12,30,34,21,67,45,33,45];
let Max=marks[0];
let min=marks[0];
let count=0,average;
for(i=1;i<marks.length;i++)
{
    count=count+marks[i];
    average=count/marks.length;

    if(Max<marks[i])
    {
        Max=marks[i];
    }
    
}
console.log(`maximum value is ${Max}`);
for(j=1;j<marks.length;j++)
    {
        if(min>marks[j])
        {
            min=marks[j];
        }
        
    }
console.log(`minimum value is ${min}`);
console.log(`minimum value is ${average}`);

    
