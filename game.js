let music=new Audio("music.mp3");
let Audiogameover=new Audio("gameover.mp3");
let ting=new Audio("ting.mp3");
let flag="X";
gameover=false;
function NextTurn()
{
    if(flag=="X")
    {
        return "O";
    }
    else
    {
         return "X";

    }
}
music.play();
function chechWin()
{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[2]].innerHTML === boxtexts[e[1]].innerHTML)  && (boxtexts[e[0]].innerHTML !==""))
        {
            document.getElementsByClassName("inf")[0].innerHTML = boxtexts[e[0]].innerHTML+" Won";
            gameover=true;
            Audiogameover.play();
            music.pause();
            music.current=0;
            
        }

    })
}

boxes=document.getElementsByClassName("box");
{
    Array.from(boxes).forEach(element =>{
        let boxtext = element.querySelector('.boxtext');
        element.addEventListener('click', ()=>{
            
            if(gameover===false)
            {
                if(boxtext.innerText === ''){
                    boxtext.innerText = flag;
                    flag = NextTurn();
                   
                    ting.play();
                   
                    chechWin();
                    if(gameover===false)
                    {
                        document.getElementsByClassName("inf")[0].innerText  = "~> Turn for " + flag;
                        
                    }
                    else 
                    {
                        document.getElementById("game").style.display="none";
                        document.getElementsByClassName("inf")[0].style.fontSize='100px';
                        
                    }
                }
            } 
            
        })
    })
}  

    
