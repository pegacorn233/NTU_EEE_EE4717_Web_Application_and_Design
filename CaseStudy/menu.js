function cost(){

	var java = document.getElementById("endless").value*2;
	var cafe=0.00;
	var capp=0.00;

	if(document.getElementById("cafesingle").checked)
	{
		cafe = document.getElementById("cafenum").value*2.00;
	}
	else if(document.getElementById("cafedouble").checked)
	{
		cafe = document.getElementById("cafenum").value*3.00;
	}
	else
	{
		cafe = 0.00;
	} 

	if(document.getElementById("cappsingle").checked)
	{
		capp = document.getElementById("cappnum").value*4.75;
	}
	else if(document.getElementById("cappdouble").checked)
	{
		capp = document.getElementById("cappnum").value*5.75;
	}
	else
	{
		capp=0.00;
	}

	total = cafe + capp + java;

	document.getElementById("total").innerHTML="Total cost is:$"+total;
	document.getElementById("total").style.visibility="visible";
	document.getElementById("subjava").innerHTML="Subtotal:$"+java;
	document.getElementById("subcafe").innerHTML="Subtotal:$"+cafe;
	document.getElementById("subcapp").innerHTML="Subtotal:$"+capp;

}

function changep(){
	var chk1 = document.getElementById("java1");
	var chk2 = document.getElementById("cafe2");
	var chk3 = document.getElementById("capp3");
	var txt1 = document.getElementById("javap");
	var txt2 = document.getElementById("cafesp");
	var txt3 = document.getElementById("cafedp");
	var txt4 = document.getElementById("cappsp");
	var txt5 = document.getElementById("cappdp");

	// if(chk1.checked == true)
	// {
	// 	txt1.attr("readonly",false);
	// }
	// else
	// {
	// 	txt1.attr("readonly",true);
	// }
	txt1.disabled = chk1.checked ? false:true;
	txt2.disabled = chk2.checked ? false:true;
	txt3.disabled = chk2.checked ? false:true;
	txt4.disabled = chk3.checked ? false:true;
	txt5.disabled = chk3.checked ? false:true;

	if(!txt1.disabled)
	{
		txt1.focus();
	}
	if(!txt2.disabled)
	{
		txt2.focus();
	}
	if(!txt3.disabled)
	{
		txt3.focus();
	}
	if(!txt4.disabled)
	{
		txt4.focus();
	}
	if(!txt5.disabled)
	{
		txt5.focus();
	}
}