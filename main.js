
 //date()
d=new Date();
//d=new Date (3000,3,3,3,3,3,333);
//d.setYear(1234);
//d.setHours(12);
document.write(d);
document.write("<br>");
document.write(d.getYear());
document.write("<br>");
document.write(d.getFullYear());
document.write("<br>");
months = new Array("Một","Hai","Ba","Bốn","Năm","Sáu","Bảy","Tám","Chín","Mười","Mười Một","Mười",)
document.write(months[d.getMonth()]);
document.write("<br>");
document.write(d.getDate());
document.write("<br>");
days = new Array("chủ nhật","Thứ hai","thứ ba","thứ tư","thứ năm","thứ sáu","thứ bảy",)
document.write(days[d.getDay()]);
document.write("<br>");
document.write(d.getHours());
document.write("<br>");
document.write(d.getMilliseconds());
document.write("<br>");
document.write(d.getSeconds());
document.write("<br>");
document.write(d.getMilliseconds());
document.write("<br>");
d.getHours(23);
// IF-ELSE
if(d.getHours()<=10)
{
	document.write("Good morning !!");
}
else if(d.getHours()<=14)
{
	document.write("Good noon !!");
}
else if(d.getHours()<=19)
{
	document.write("Good afteroon !!");
}
else if(d.getHours()<=22)
{
	document.write("Good evening !!");
}
else 
{
	document.write("Good night !!");
}
today = d.getDay();

//popup boxar
// alert("Hello");
// r = confirm("Press a button");
// if(r){
// document.write("You pressed Ok");}
// else{
	// document.write("You pressed Cancel");
// }
r= prompt("Bạn đam mê bóng đá không ?","Trả lời ở đây");
document.write(r);

function check()
{
	if(document.frml.pwd.value == document.frml.repwd.value)
	{
		alert('Ok');
		return true;
	}
	else{
		alert("Nhập mật khẩu sai ")
		return false;
	}
}
$(document).ready(function() {
    $('#btn-dangky').click(function(event) {
       // $('#form-login').animate({marginLeft: -300,opacity: 0});
       // $('#form-dangky').animate({marginLeft: 0,opacity: 1});
       $('#form-login').addClass('hidden');
       $('#form-dangky').removeClass('hidden');
    });
 });