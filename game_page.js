player1name=localStorage.getItem("player1");
player2name=localStorage.getItem("player2");

player1score=0
player2score=0

document.getElementById("player1name").innerHTML=player1name+" : ";
document.getElementById("player2name").innerHTML=player2name+" : ";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerquestion").innerHTML="Question Turn : "+player1name;
document.getElementById("playeranswer").innerHTML="Answer Turn : "+player2name;

function send()
{
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();

    charAt1=word.charAt(1);
    console.log(charAt1);

    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1=word.length-1;
    charAt3=word.charAt(length_minus_1);
    console.log(charAt3);

    removecharat1=word.replace(charAt1,"_");
    removecharat2=removecharat1.replace(charAt2,"_");
    removecharat3=removecharat2.replace(charAt3,"_");
    console.log(removecharat3);

    question_word="<h4 id='word_display'>"+removecharat3+"</h4>";
    input_box="<br>answer: <input type='text'id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info'onclick=check()>check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

questionturn="player1";
answerturn="player2";

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();

    if(answer==word)
    {
        if(answerturn=="player1")
        {
            player1score=player1score+1;
            document.getElementById("player1score").innerHTML=player1score;
        }
         else
         {
            player2score=player2score+1;
            document.getElementById("player2score").innerHTML=player2score;
         }
    }

    if(questionturn=="player1")
    {
        questionturn="player2";
        document.getElementById("playerquestion").innerHTML="question turn: "+player2name;
    }
    else
    {
        questionturn="player1";
        document.getElementById("playerquestion").innerHTML="question turn: "+player1name; 
    }

    if(answerturn=="player1")
    {
        answerturn="player2";
        document.getElementById("playeranswer").innerHTML="answer turn: "+player2name;
    }
    else
    {
        answerturn="player1";
        document.getElementById("playeranswer").innerHTML="answer turn: "+player1name; 
    }
    
    document.getElementById("output").innerHTML="";
}
