function newMail() {
	if(confirm('This action will discard the current mail,Do you want to continue?'))
		location.reload(true);
}

function do_bold() {
	var b =document.getElementById('bold');

	if(b.value=='unselected'){
		b.value='selected';
		b.style.border='solid';
		//ele.class+=' selected'
	}
	else{
		b.value='unselected';
		b.style.border='none';
			
	}
	document.getElementById('draft').focus()
	
}
function do_italic(){
	var i =document.getElementById('italic');
	if(i.value=='unselected'){
		i.value='selected';
		i.style.border='solid';
		//ele.class+=' selected'
	}
	else{
		i.value='unselected';
		i.style.border='none';
			
	}
	document.getElementById('draft').focus()

}
function do_underline(){
	var u =document.getElementById('underline');
	if(u.value=='unselected'){
		u.value='selected';
		u.style.border='solid';
		//ele.class+=' selected'
	}
	else{
		u.value='unselected';
		u.style.border='none';
			
	}
	document.getElementById('draft').focus()

}
function applyDraftFont(){
	var b = document.getElementById('bold');
	var i =document.getElementById('italic');
	var u =document.getElementById('underline');

	var ta = document.getElementById('draft');
	if(b.value=='unselected'){
		ta.style.fontWeight='normal';
	}
	else{
		ta.style.fontWeight='bold'	
	}

	if(i.value=='unselected'){
		ta.style.fontStyle='normal';
	}
	else{
		ta.style.fontStyle='italic'	
	}

	if(u.value=='unselected'){
		ta.style.textDecoration='none';
	}
	else{
		ta.style.textDecoration='underline'	
	}

	document.getElementById('draft').focus()

}

function undo(){
	var ta = document.getElementById('draft');
	var content = ta.value;

	ta.value=content.substring(0,content.lastIndexOf(' ')+1)

	ta.focus()
}
function sendMail(ele){
	if(document.getElementById('to_address').value.length==0)
	{
		alert('Please provide a destination address')
		document.getElementById('to_address').focus();
		return;
	}
	else{
	var content = ele.innerHTML
	var sending = "<span class='spinner-grow spinner-grow-sm' role='status' aria-hidden='true'></span>Sending..."
	ele.innerHTML=sending
	 setTimeout(function(){
	 	ele.innerHTML=content
	 	document.getElementById('sendnoti').style.display='inline'
	 	setTimeout(function(){
	 		document.getElementById('sendnoti').style.display='none'
	 	},2000)
	 },3000)
	}

}
function checkMail(ele){
	var id = ele.value;
	var pattern2 = /(\w{1,}@\w{1,})\.com$/

	if(id.match(pattern2)==null){
		alert('Enter a Valid Email ID')
		ele.focus()
	}
	return;
}