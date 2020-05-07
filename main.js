var i=0, 
score=0, 
seconds=15, 
quiz_box=document.getElementById("quiz"), 
about_box=document.getElementById("about"), 
timer_box=document.getElementById("timer"), 
result_box=document.getElementById("resultbox"), 
result=document.getElementById("result"), 
question_box=document.getElementById("question"), 
score_box=document.getElementById("score"); 
var questions=
	[["Sayfanın arka plan rengini yeşil yapan satır hangisidir",
 	["body color=green", "body bgcolor=green", "body background=green", "body background=green.jpg"], "body bgcolor=green"],

 	["Yazının karakter fontunu bedrock yapan satır hangisidir",
	["font type=bedrock", "font size=bedrock", "font face=bedrock", "font color=bedrock"], "font face=bedrock"],

 	["Aşağıdakilerden hangisi java kaynak dosyasının uzantısıdır",
 	[".java", ".class", ".txt", ".html"], ".java"],

	["Bir işin uygun ve kolay olduğunu belirtmek için hangisi söylenir",
	["Burnuma göre", "Kaşıma göre","Bıyığıma göre", "Dişime göre"], "Dişime göre"],

    ["Atasözüne göre gönülden de ırak olan kimdir",
	["Arabası tamircide olan", "Evi uzak olan", "Gözden ırak olan", "İş yeri karşıda olan"], "Gözden ırak olan"],

   	["Klasik bir çengel bulmacada, bir kutucukta en fazla kaç farklı soru sorulur",
	["1", "2", "3", "4"], "2"],

   	["On kıtadan oluşan İstiklal Marşı'nın tamamında, bu kelimelerden hangisi diğerlerinden daha az geçer",
	["Vatan","Kan","Toprak","Yurt"], "Toprak"],

   	["Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu Tepesi nerededir",
	["Hawai", "Yeni Zelanda", "Galler", "Hindistan"], "Yeni Zelanda"],

   	["Divriği Ulu Camii hangi ilimizdedir",
	["Ankara", "İstanbul", "İzmir", "Sivas"], "Sivas"],

   	["19*19 işleminin sonucu kaçtır", 
   	["360", "361", "362", "363"], "361"],

  	["Aşağıdakilerden hangisi css kaynak dosyasının uzantısıdır",
 	[".css", ".class", ".txt", ".html"], ".css"],

 	["Bir nesnenin örneğini oluşturmak için hangi anahtar kelime kullanılır",
	["make", "inst", "var", "new"], "new"],

 	["Aşağıdakilerden hangisi html kaynak dosyasının uzantısıdır",
 	[".java", ".class", ".txt", ".html"], ".html"]],
 
    correct_option="correct";

function randomize(array){
	var currentIndex=array.length, temporaryValue, randomIndex;
  	while(currentIndex>0){
    	randomIndex=Math.floor(Math.random()*array.length);
    	currentIndex--;
    	temporaryValue=array[currentIndex];
    	array[currentIndex]=array[randomIndex];
    	array[randomIndex]=temporaryValue;
  	}
	return array;
}
function startquiz(){
    var quiz_box=document.getElementById("quiz"), about_box=document.getElementById("about");
    about_box.style.display="none";
    quiz_box.style.display="block";
    timer();
    questions=randomize(questions);
    question(i);
}
function timer(){
	var timer_box=document.getElementById("timer");
	seconds=15;
	var x = setInterval(function() {
		seconds--;
		timer_box.innerHTML=seconds;
  		if (seconds===0) {
    		clearInterval(x);
    		check(-1);
  		}
	}, 1000);
}
function question(i){
	var about_box = document.getElementById("about"), question_box=document.getElementById("question"), result_box=document.getElementById("resultbox"), quiz_box=document.getElementById("quiz");
 	resultbox.style.left="-1000px";
 	var question=questions[i][0],
	options=randomize(questions[i][1]);
 	correct_option=questions[i][2];
	if(i<10){
 		question_box.innerHTML=question+" ?";
 		for(var j=0;  j<9; j++){
  			document.getElementById("option"+j).innerHTML=options[j];
  			document.getElementById("option_"+j).checked=false;
 		}
	}else{
  		about_box.innerHTML="Oyun Bitti!<br/>Puan: <span style='color: black'>"+score+"/10</span>";
  		about_box.style.display="block";
  		quiz_box.style.display="none";
  		i=0;
  		seconds=15;
	}
}
function check(option){
	var result_box=document.getElementById("resultbox"),
    result=document.getElementById("result"),
    score_box=document.getElementById("score");
    seconds=15;

	if(option>=0){
		if(document.getElementById("option"+option).innerHTML==correct_option){
   			result.innerHTML="Doğru!";
   			result_box.style.color="#0f9d58";
   			score_box.innerHTML=++score;
  		}
 		else{
   			result.innerHTML="Yanlış! </br> Doğru Cevap:  "+correct_option;
   			result_box.style.color="red";
 		}
 	}
 	i=i+1;
	result_box.style.left="0px";
}