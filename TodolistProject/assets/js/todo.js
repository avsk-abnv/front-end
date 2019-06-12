var str="";
var addeditems=["?"];
var count;
$('#container').show('drop');
$("#add_new").on("click",function(){
	$("input").toggleClass("vanish");
	if($(this).text()=="+")
		$(this).text("-");
	else
		$(this).text("+");
});
function checkIfAdded(item,addeditem)
{	count=0;
	for(i=0;i<addeditem.length;i++)
	{
		if(item==addeditem[i])
			count++;
	}
	return count;
}
for(i=0;i<$('li').length;i++)
{	addeditems.push($('.delete').eq(i).parent().children().eq(1).text());
	$("li span").eq(2*i).on("click",function(){
		$(this).toggleClass("done");
	});
	$('.delete').eq(i).on("click",function(){
		$(this).parent().fadeOut("slow",function(){
			$(this).remove();
		});
		for(j=0;j<addeditems.length;j++)
		{
			if(addeditems[j]==$(this).parent().children().eq(1).text())
				addeditems[j]="?";
		}
	});
	/*$("li").eq(i).mouseenter(hoverin);
	$("li").eq(i).mouseleave(hoverout);*/
}
var r;
$("input").keypress(function(event){
	if(event.which==13)
	{	/*if(checkIfAdded($("input").val(),addeditems))*/
		if($("input").val()=="?")
			alert("What !");
		else if(checkIfAdded($("input").val(),addeditems)!=0)
			alert("You've already entered this TO-DO");
		else if($("input").val().length!=0)
		{	
			$('ul').append("<li><div class=\"delete\"><i class=\"fa fa-trash fa-lg\"></i></div><span>"+$('input').val()+"<span></li>");
			r=$('li').length-1;
			$('li').eq(r).css("display","none");
			$('li').eq(r).slideDown("fast");
			addeditems.push($("input").val());
			var t=0;
			$('#navbar').css("color","rgb(100,255,0)");
			var timer=setInterval(function(){
				t++;
				if(t==2)
				{
					clearInterval(timer);
					$('#navbar').css("color","yellow");
				}
			},300);
			
			/*$("li").eq(r).mouseenter(hoverin);
			$("li").eq(r).mouseleave(hoverout);*/
			$('li span').eq(2*r).on("click",function(){
				$(this).toggleClass("done");
			});
			$('.delete').eq(r).on("click",function(){
				$(this).parent().fadeOut("slow",function(){
					$(this).remove();
				});
				for(i=0;i<addeditems.length;i++)
				{
					if(addeditems[i]==$(this).parent().children().eq(1).text())
						addeditems[i]="?";
				}
				/*console.log($(this).parent().children().eq(1).text());*/
			});
		}
	}
});
function hoverin()
{	
	$(this).children().eq(0).show('drop', {direction: 'left'}, 150);	
}
function hoverout()
{	
	$(this).children().eq(0).hide('drop', {direction: 'left'}, 150);
}