
$=function (el){return document.querySelector(el)};

/*换颜色*/

(function(){
	var colors=["#46ccff","#62eeb6","#f45e51","#d57dd5","#f4fd55","#fa950c"];
	$('button[name="changeColor"]').addEventListener("click",(e)=>{
		var color1=colors[Math.floor(Math.random()*colors.length)];
		var restColor=colors.filter(function(d){return d!=color1});
		var color2=restColor[Math.floor(Math.random()*(colors.length-1))];
		document.body.style.backgroundImage="linear-gradient(90deg,"+color1+","+color2+")";		
},false)	
})();

(function (){
	$("button").addEventListener("mouseover",(e)=>{
		e.target.classList.add("animated","pulse","infinite")
	},false);
	$("button").addEventListener("mouseout",(e)=>{
		e.target.classList.remove("animated","pulse","infinite");
	},false)
})();


/*time加载时间，可加载或不加载*/

//(function(){
//	function getWeek(d){
//					var r={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};
//					return r[d.getDay()];
//			}
//	function checkTime(d){return (d<10)?"0"+d:d;}
//			
//	function transAMPM(h,m,s){
//				return h>12?(h-12)+":"+m+":"+s+" PM":h+":"+m+":"+s+" AM";
//			}
//	function wrap(y,mon,d,w,type){
//		return y+"-"+mon+"-"+d+" "+w+" "+arguments[arguments.length-1];
//};
//	function display(){
//		var date=new Date();
//		var year=date.getFullYear();
//		var month=checkTime(date.getMonth()+1) ;
//		var day=checkTime(date.getDate());
//		var week=getWeek(date);
//		var hour=checkTime(date.getHours());
//		var minute=checkTime(date.getMinutes());
//		var second=checkTime(date.getSeconds());	
//		var transTime=transAMPM(hour,minute,second);
//		var result=wrap(year,month,day,week,transTime);
//		$(".t").textContent=result;
//	};
//	display();
//	setInterval(display,500);
//})();




