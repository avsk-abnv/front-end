var color=document.querySelectorAll(".curveborder");
var parent_div=document.getElementById("contains_colors");
var rgb_val=document.getElementById("rgb_val");
var youwin=document.querySelector("h3");
var navbar=document.getElementById("navbar");
var inside_nav=document.getElementById("inside_nav");
var answer;
var n=6; var cno; var timer; var timer_started=false;
var easy=document.getElementById("Easy");
var hard=document.getElementById("Hard");
easy.addEventListener("click",function(){
	easy.classList.add('active');
	if(hard.classList.contains('active'))
		hard.classList.remove('active');
	n=3;
	for(i=n;i<6;i++)
	{
		color[i].style.backgroundColor="black";
	}
	resetEverything();
	playTheGame();
});
hard.addEventListener("click",function(){
	hard.classList.add('active');
	if(easy.classList.contains('active'))
		easy.classList.remove('active');
	n=6;
	resetEverything();
	playTheGame();
})
function generateRandomColor()
{	while(true)
	{	
		r=Math.floor(Math.random()*256);
		g=Math.floor(Math.random()*256);
		b=Math.floor(Math.random()*256);
		if(r>20 || g>20 || b>20)
			break;
	}
	return "rgb("+r+","+g+","+b+")";
}

var try_again=document.getElementById("try_again");
playTheGame();
try_again.addEventListener("click",buttonClick);
function buttonClick()
{	resetEverything();
	playTheGame();
}
function resetEverything()
{
	youwin.textContent="";
	navbar.style.backgroundColor="#7A7A7A";
	rgb_val.style.backgroundColor="#7A7A7A";
	inside_nav.style.color="yellow";
	if(timer_started)
		clearInterval(timer);
}
function useClickEvent()
{
	for(i=0;i<n;i++)
	{
		if(i!=cno)
		{	color[i].removeEventListener("click",winEvent);
			color[i].addEventListener("click",loseEvent);
		}
		else
		{		color[i].removeEventListener("click",loseEvent);
				color[i].addEventListener("click",winEvent);
		}
	}
}
function loseEvent()
{
	if(youwin.textContent.length==0)
		this.style.backgroundColor="black";
}
function winEvent()
{	
		youwin.textContent="You Win !"
		console.log("You Win");
		var flag=false;
		for(i=0;i<n;i++)
		{color[i].style.backgroundColor=answer;}
		if(timer_started)
			clearInterval(timer);
		timer=setInterval(function()
		{	timer_started=true;
			for(i=0;i<n;i++)
			{	if(!flag)
					color[i].style.backgroundColor=answer;
				else
					color[i].style.backgroundColor="black";
			}
			if(!flag)
			{	navbar.style.backgroundColor=answer;
				rgb_val.style.backgroundColor=answer;
				inside_nav.style.color=answer;
			}
			else
			{	navbar.style.backgroundColor="#7A7A7A";
				rgb_val.style.backgroundColor="#7A7A7A";
				inside_nav.style.color="yellow";
			}
			flag=!flag;
		},300);
	
}
function playTheGame()
{	cno=Math.floor(Math.random()*n);
	answer=generateRandomColor();
	color[cno].style.backgroundColor=answer;
	rgb_val.textContent="rgb("+r+","+g+","+b+")";
	for(i=0;i<n;i++)
	{
		if(i!=cno)
		{	while(true)
			{
				randomColor=generateRandomColor();
				if(randomColor!=answer)
					break;
			}
			color[i].style.backgroundColor=randomColor;
		}
	}
	useClickEvent();
}