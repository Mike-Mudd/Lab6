function checkUsername(form) {
	username = form.username.value;
	
	if(username == ' ')
	{
		alert("Please enter username");
	}
	else
	{
		alert("Thank you for shopping, your order is placed!");
	}
}

function checkPassword(form) {
	password = form.password.value;
	
	if(password == ' ')
	{
		alert("Please enter password");
	}
	else
	{
		alert("Thank you for shopping, your order is placed!");
	}
}

function checkShipping(form) {
	shipping = form.shipping.value;
	
	if(shipping != A || B || C)
	{
		alert("Please select shipping");
	}
	else
	{
		alert("Thank you for shopping, your order is placed");
	}
}
