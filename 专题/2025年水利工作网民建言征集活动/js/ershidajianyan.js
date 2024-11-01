var imgCodeId;
var userId="";
var token="";
var base64 = new Base64();   
          
$(document).ready(function(){
    //getImage();
	$("#neirong").on("change",function(){
	      if($("#neirong").val().length>500){
	         alert("为了更好转达您的建议，留言内容请控制在500字内！");
	       }
	});
	$("#biaoti").on("change",function(){
	      if($("#biaoti").val().length>20){
	         alert("标题内容不超20字！");
	       }
	});
    $("#phonebtn").on("click",function(){
			     getPhoneYz();
	 });
});

/**
获取随机字符串
*/
function randomString(len) {
　　len = len || 32;
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}

/**
获取图形验证码
*/
function getImage(){
    
   $.ajax({
      url:"/api/login/code/getCaptchaImage?LXZwlCij="+randomString(32),
	  type:"get",
      contentType:"application/x-www-form-urlencoded;charset=utf-8",
	  dataType:"json",
	  async:false,
	  success:function(rs){
	     imgCodeId=rs.data.imgCodeId;
		 $("#yzmpic").attr("src","data:image/png;base64,"+rs.data.img)
          
	  },
	  error:function(xhr, textStatus, errorThrown){
	      console.log(xhr.responseText);
	  }

   });
   
}

/**
获取手机验证码
*/
function getPhoneYz(){

    var phone= $("#phone").val();
    var picYzm=$("#picYzm").val();

	if(checknull(picYzm)){
	     alert("请输入图片验证码！");
		  return;
	}
	if(checknull(phone)){
	     alert("请输入手机号！");
		 return;
	}

	if(checkPhone(phone)){
	     return;
	}

   	var paramData={
	    phone:phone,
		imgCodeId:imgCodeId,
		code:picYzm
	};
   $.ajax({
      url:"/api/api/login/sendVerifyCodeWithImage?LXZwlCij="+randomString(32),
	  type:"post",
      contentType:"application/x-www-form-urlencoded;charset=utf-8",
	  dataType:"json",
	  data:paramData,
	  async:false,
	  success:function(rs){
	     console.log(rs);
		 if(!rs.success){
		    //alert(rs.message);
			alert("图片验证码输入有误！");
			getImage();			   
		 }else{
			$("#phonebtn").css("background-color","#c8c9cc");
			$("#phonebtn").css("cursor","none");
			$("#phonebtn").css("text-align","center");
			// $("#phonebtn").addClass("phoneyzm");
			$("#phonebtn").off("click");
            readtime(60);
		 
		 }
	  },
	  error:function(xhr, textStatus, errorThrown){
		  alert("获取验证码失败！")
	      console.log(xhr.responseText);
            
	  }

   });
    
}

/**
获取token
*/
function getToken(){
    var phone=md5($("#phone").val());
	var phoneYzm=md5($("#phoneYzm").val());
   	var paramData={
	    mobile:phone,
		returnCode:phoneYzm,
	};
   $.ajax({
      url:"/api/api/login/VerifyCodeWithToken?LXZwlCij="+randomString(32),
	  type:"post",
      contentType:"application/x-www-form-urlencoded;charset=utf-8",
	  dataType:"json",
	  data:paramData,
	  async:false,
	  success:function(rs){
	     console.log(rs);
		 
		 if(!rs.success){
			alert("手机验证码输入有误！");
			//getImage();
			return;
		 
		 }else{		 
			token=rs.accessToken;
			userId=rs.data.USER_ID;
			//$("#tijiao").val("提交中");
			$("#tijiao").attr("disabled",true);
			$("#tijiao").css("color","#CFCFCF");
		 }
	  },
	  error:function(xhr, textStatus, errorThrown){
	      console.log(xhr.responseText);
		  
	  }

   });
}

/**
提交信息
*/
function save(){
    var zhuti=$("#zhuti").val();
	var biaoti=$("#biaoti").val();
	var neirong=$("#neirong").val();
	var nianling=$("#nianling").val();
	var zhiye=$("#zhiye").val();
	var diyu=$("#diyu").val();
	var shuming=$("#shuming").val();
	var picYzm=$("#picYzm").val();
	var phone=$("#phone").val();
	var phoneYzm=$("#phoneYzm").val();


    if(checknull(zhuti)){
	   alert("请选择主题");
	   return;
	}
	 if(checknull(biaoti)){
	   alert("请输入标题！");
	   return;
	}
	 
	 if(checknull(neirong)||neirong==place1||neirong==place2){
	   
	   alert("请输入内容！");
	   return;
	}
	 if(checknull(nianling)){
	   alert("请选择年龄！");
	   return;
	}
	 if(checknull(zhiye)){
	   alert("请选择职业！");
	   return;
	}
	 if(checknull(diyu)){
	   alert("请选择地域！");
	   return;
	}
	 if(checknull(picYzm)){
	   alert("请输入图片验证码！");
	   return;
	}
	 if(checknull(phone)){
	   alert("请输入手机号码！");
	   return;
	}
	if(checknull(phoneYzm)){
	   alert("请输入手机验证码！");
	   return;
	}
	if(checkPhone(phone)){
	     return;
	}
   	 if(checknull(shuming)){
	    
	    shuming="未填写";
	}
	
	//获取token
   getToken();

    
   	 
   var paramData={
		reporttitle:biaoti,
		reportdesc:neirong,
		source:10,
		classification1:"20yjjy",
		classification2:zhuti,
		address:diyu,
		identitynumber:base64.encode(nianling),
		informantname:base64.encode(shuming),
		informantphone:base64.encode(phone),
		appeal:zhiye,
		orderType:5
	};		
		var form = $('<form />', {id : "dataForm", method:"post", style:"display:none;",enctype:"multipart/form-data"}).appendTo('body');
              $.each(paramData, function(k, v) {
					if(k=="reportdesc"){
                           form.append('<textarea  name="' + k +'"   style="display:none" >' + v +'</textarea>');
					}else{
						  form.append('<input type="hidden" name="' + k +'" value="' + v +'" />');
				  }
     });
	  $("#dataForm").ajaxSubmit({
			type:"post",
			url:"/api/apiv/order/save?LXZwlCij="+randomString(32),
			dataType:"json",
			cache:false,
			async:false,
			headers:{"accessToken":token,"persId":userId},
			success:function(msg){ 
				 console.log(msg);
				if(msg!=""){
					if(msg.data.message!="success"){
						alert("提交错误，请重新输入！");
						$("#tijiao").val("提交");
						$("#tijiao").attr("disabled",false);
						$("#tijiao").css("color","#FFFFFF");
					}else{
						
						alert("提交留言成功！");
						window.opener=null;
						window.open('','_self');
					    window.close();
						window.location.href="/jyzj/index.html";
						 
					}
				
				} 
				
			},
			error:function (jqXHR, textStatus, errorThrown){
			    console.log(xhr.responseText);
				
			}
		}); 
}

//验证是否为空
function checknull(obj){
		if(obj!=null){
		 obj=obj.trim();
		}
	   if(obj==null||obj==""){
	      return true;
	   }else{
	       return false;
	   }
}

//读秒计时器
function readtime(times){
       //写入页面显示
      $("#phonebtn").text("（"+times+"）秒");
       if(times>0){
             //倒计时的秒数递减1
            times=times-1;
            //每次递减1，不停调用自身，实现循环，直到times=0
            setTimeout(function (){
            readtime(times);
            }, 1000);
        }else{
            returnphoneYz();

        }
}

function checkPhone(phone){
	
     var isMob = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][0-9]))[0-9]{8}$/;
     if (!(isMob.test(phone))) {
         alert( "请输入正确的手机号！");
		 return true;
     }else{
	      return false;
	 }
}

function  returnphoneYz(){
                $("#phonebtn").on("click",function(){
			     getPhoneYz();
			 });
              $("#phonebtn").css("background-color","#eac58e");
			  $("#phonebtn").css("cursor","pointer");
			 $("#phonebtn").css("text-align","left");
			//  $("#phonebtn").removeClass("phoneyzm");
			  $("#phonebtn").text("获取验证码");
}
 