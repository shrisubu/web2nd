function first()
{
    console.log(`print first`);
}
function second()
{
    console.log(`print second`);
}
function third()
{
    console.log(`print third`);
}
first();
setTimeout(second,1000);
third();

