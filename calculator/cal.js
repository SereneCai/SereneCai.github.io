function inputvalue(number)
{
    //erasezero();
    document.getElementById("input").innerHTML += number; //+ is required for number input
}

function cancel()
{
    document.getElementById("input").innerHTML = " ";
}

function solution()
{
    let question = document.getElementById("input").innerHTML;
    let answer = eval(question);
    document.getElementById("input").innerHTML = answer;

}

/*function erasezero()
{
    let zero = document.getElementById("input").innerHTML;
    if (zero == 0)
        {
            document.getElementById("input").innerHTML = " ";
        }
    } 
    */

    function kevent (kpress)
    {
        var num = (kpress.which || kpress.keyCode);
        document.getElementById("input").innerHTML = num;
    }

    