WD = window.WD;
window.onload = function(){
    WD.SeeDataChange();
}
$(document).ready(function(){
	$("#reg").on("click",function(){
		var email = $(this).siblings("input[type='email']").val();
		var pswd = $(this).siblings("input[type='password']").val();
		WD.register(email,pswd);
	});	
	$("#login").on("click",function(){
		var email = $(this).siblings("input[type='email']").val();
		var pswd = $(this).siblings("input[type='password']").val();
		WD.login(email,pswd);
	});
	//提交debug数据
	$(".submit").on("click",function(){
		var debug_title = $("header>input").val(),
			debug_content = $(".edit-area").text(),
			debug_state = $("#state option:selected").val(),
			date = new Date();
		var year = date.getFullYear(),
			month = date.getMonth(),
			day = date.getDate(),
			hour = date.getHours(),
			minutes = date.getMinutes();
		if(month < 10){
			month = "0" + month;
		} 
		var end_time = year + "-" + month + "-" + day + "  " + hour + ":" +minutes;
		//如果标题为空
		if(!debug_title){
			return;
		}
		//如果内容为空
		if(!debug_content){
			return;
		}
		WD.SeeDataChange();
//		WD.addData(debug_title,debug_content,debug_state,end_time);
	});	
	//更新debug数据
	$(".update").on("click",function(){
		var debug_title = $("header>input").val(),
			debug_content = $(".edit-area").text(),
			debug_state = $(".state>input").val();
	});
});
