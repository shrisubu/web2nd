let marks=[20,12,30,34,21,67,45,33,45];
for(i=0;i<marks.length;i++)
{
    if(marks[i]<35){
        console.log("FAIL");
        break;
    }
    else{
        console.log("PASS");
    }
}