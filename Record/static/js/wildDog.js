var appid = "lvqdebug";

WD = {
	ref : new Wilddog("https://" + appid + ".wilddogio.com/"),
	userRef : new Wilddog("https://"+appid+".wilddogio.com/users"),
	reportRef : new Wilddog("https://"+appid+".wilddogio.com/reports"),
	register: function(email,pswd){
		this.userRef.createUser({email:email,password:pswd},
		  function(err,data){
		  if(err!=null){
		    //not success
		    alert("注册失败");
		  } else {
		    //create user success
		    alert("注册成功");
			window.location.href="login.html";
		  }
		});
	},
	login: function(email,pswd){
		this.userRef.authWithPassword({
			"email": email,
			"password": pswd,
		},
		function(err,data){
			console.log(data);
		    if(err == null){
		    	alert("auth success!");
				window.location.href="index.html";
		    } else {
		      alert("auth failed,msg:",err);
		    }
		});
	},
	addData:function(title,content,state,date){
		var than = this;
		than.reportRef.set({
			debug_title:title,
			debug_content:content,
			debug_state:state,
			debug_date:date
		})
	},
	SeeDataChange: function() {
		var than = this;
		than.userRef.on('child_added', function(snapshot, prev) {
			if(snapshot.key()){
				console.log(snapshot.key());
			}
//			than.addDom(snapshot.val(), snapshot.key());
//			than.msg("加载文档",snapshot.val().title,2000);
			return snapshot;
		});
		than.ref.on("child_changed", function(snapshot) {
			var s = snapshot.val();
			var	p = snapshot.key();
//			than.updateDom(s, p);
//			than.msg("更新文档",s.title,5000);
		});
		than.ref.on("child_removed", function(snapshot) {
			var p = snapshot.key();
//			than.deleteDom(p);
//			than.msg("删除文档",snapshot.val().title,2000);
		});
	},
}
