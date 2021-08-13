function newMail() {
	if(confirm('This action will discard the current mail,Do you want to continue?'))
		location.reload(true);
}

function do_bold() {
	var b =document.getElementById('bold');

	if(b.value=='unselected'){
		b.value='selected';
		b.style.border='dashed';
		b.style.borderColor='black'

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
		i.style.border='dashed';
		i.style.borderColor='black'
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
		u.style.border='dashed';
		u.style.borderColor='black'
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
function showsection(id){
	var format = document.getElementById('format_section');
	var option = document.getElementById('option_section');
	
	if(id=='format_section'){

		// format.className+=(' visi')				
		format.style.display='inline'
		option.style.display='none'
		// format.scrollIntoView()

		// format.style.opacity=1
		// option.style.opacity=0
	}
	else{
		format.style.display='none'
		option.style.display='inline'
		// option.className+=(' visi')

		// format.style.opacity=0
		// option.style.opacity=1	
	}

}
function showfind(){
	var card = document.getElementsByClassName('card text-white bg-info')[0]
	if(card.style.display=='none'){
		card.style.display='inline'
		document.getElementById('word').focus()
	}
	else
		card.style.display='none'
}
function find(){
	var draft = document.getElementById('draft')
	var content = draft.value;
	content=content.trim()
	console.log(content)
	var word = document.getElementById('word').value
	console.log(word)

	var supdiv = document.getElementById('supdiv')

	supdiv.innerHTML='<h4>Find Result:</h4><br>'


	var contenth='';

	var i=-1
	var ids=[]
	while((i=content.indexOf(word,i+1))!=-1){
		ids.push(i)
	}


	j=0
	for(i=0;i<ids.length && j<content.length;j++){
		if(ids[i]==j){
			contenth+='<mark>'
			contenth+=word
			contenth+='</mark>'
			j+=(word.length-1)
			i++
		}
		else{
			contenth+=content[j]
		}
	}

	while(j!=content.length)
	{
		contenth+=content[j]
		j++
	}
	console.log(contenth)
	if(contenth.length>content.length)
		supdiv.innerHTML+=contenth
	else
		supdiv.innerHTML+='No Match Found'
	supdiv.style.display='inline'
	draft.style.visibility='hidden'
	console.log(supdiv.innerHTML)
	//document.getElementsByClassName('form-group draft')[0].style.border='double'

}
function closefind(){
	var draft = document.getElementById('draft')
	var content = draft.value;
	content=content.trim()
	console.log(content)
	var word = document.getElementById('word').value
	console.log(word)

	document.getElementById('word').value=''

	var supdiv = document.getElementById('supdiv')

	supdiv.innerHTML='<h4>Find Result:</h4><br>'
	supdiv.style.display='none'

	draft.style.visibility='visible'

	var card = document.getElementsByClassName('card text-white bg-info')[0]
	card.style.display='none'
	draft.focus()
}
function zoomin(zoom_ch){
	var draft = document.getElementById('draft')
	var content = draft.value
	var button = document.getElementById('dropDownMenu')

	button.innerHTML='<img src="zoomin.png">'

	var zper = parseInt(zoom_ch.innerHTML.substring(0,zoom_ch.innerHTML.length-1))
	if(zper==50){
		draft.style.fontSize='10px'
		button.innerHTML+=' 50%'
	}
	else if(zper==100){
		draft.style.fontSize='20px'
	}
	else if(zper==150){
		draft.style.fontSize='30px'
		button.innerHTML+=' 150%'
	}
	else if(zper==200){
		draft.style.fontSize='40px'
		button.innerHTML+=' 200%'
	}
	
	draft.focus()
}
function checkspell(ele){
	var draft = document.getElementById('draft')
	if(ele.value=='unchecked'){
		draft.spellcheck='true'
		ele.value='checked'
	}
	else{
		draft.spellcheck='false'
		ele.value='unchecked'	
	}
}