$(document).ready(function(){

for(i=0;i<10;i++)
  {
    //chaque tr doit être ajouté au tableau (variable tab)
    tr = $('<tr />').appendTo("table"); //tr -> variable
    //et pour chaque tr on créé les td
    for(j=0;j<10;j++)
    {
      //chaque td doit être ajouté au tr (variable tr)
      td = $("<td id='x"+j+"y"+i+"'/>").appendTo(tr);
    }
  }

$('tr:even td:even, tr:odd td:odd').css("background-color","black");
$('tr:even td:even, tr:odd td:odd').attr("class","sombre");


var tour1=true;
var tour2=false;
var grid =[];

grid[0]=[1,3,1,3,1,3,1,3,1,3];
grid[1]=[3,1,3,1,3,1,3,1,3,1];
grid[2]=[1,3,1,3,1,3,1,3,1,3];
grid[3]=[3,1,3,1,3,1,3,1,3,1];
grid[4]=[0,3,0,3,0,3,0,3,0,3];
grid[5]=[3,0,3,0,3,0,3,0,3,0];
grid[6]=[2,3,2,3,2,3,2,3,2,3];
grid[7]=[3,2,3,2,3,2,3,2,3,2];
grid[8]=[2,3,2,3,2,3,2,3,2,3];
grid[9]=[3,2,3,2,3,2,3,2,3,2];





function manipuletab(){
for(i=0;i<10;i++){
  for(j=0;j<10;j++){
    if(grid[i][j]==1){
      $("#x"+j+"y"+i).html("<img src='img/bois.png' class='bois'/>");
    }
    if(grid[i][j]==2){
      $("#x"+j+"y"+i).html("<img src='img/noir.png' class='noir'/>");
    }
    if(grid[i][j]==0){
      $("#x"+j+"y"+i).empty();
    }
    if(grid[i][j]==4){
      $("#x"+j+"y"+i).html("<img src='img/boisking.png' class='boisking'/>");
    }
    if(grid[i][j]==5){
      $("#x"+j+"y"+i).html("<img src='img/noirking.png' class='noirking'/>");
    }
  }
}
}



manipuletab();

function getgrid(ident){
  var x = ident[1];
  var y = ident[3];

  return grid[y][x];
}

function axe1(ident,nbr){
  var x = parseInt(ident[1]);
  var y = parseInt(ident[3]);
  var pos =[];
  var neg =[];
  if (x==y-8) {
    for (var i = y,j=x; i <10,j<2; i++,j++) {
      pos = pos + grid[i][j];
    }
    for (var i=y,j=x; i>=8,j>=0; i--,j--) {
      neg = neg +grid[i][j];
    }
  }
  if (x==y-6) {
    for (var i = y,j=x; i <10,j<4; i++,j++) {
      pos = pos + grid[i][j];
    }
    for (var i=y,j=x; i>=6,j>=0; i--,j--) {
      neg = neg +grid[i][j];
    }
  }
  if (x==y-4) {
      for (var i = y,j=x; i <10,j<6; i++,j++) {
      pos = pos + grid[i][j];
    }
    for (var i=y,j=x; i>=4,j>=0; i--,j--) {
      neg = neg +grid[i][j];
    }
  }
  if (x==y-2) {
    for (var i = y,j=x; i <10,j<8; i++,j++) {
      pos = pos + grid[i][j];
    }
    for (var i=y,j=x; i>=2,j>=0; i--,j--) {
      neg = neg +grid[i][j];
    }
  }
  if (x==y){
    for (var i = y, j=x; i < 10,j<10; i++,j++) {
      pos = pos + grid[i][j];
    }
    for (var i = y, j=x; i >= 0,j>=0; i--,j--) {
      neg = neg +grid[i][j];
    }
  }
  if (x==y+2){
    for (var i = y, j=x; i < 8,j<10; i++,j++) {
      pos = pos + grid[i][j];
    }
    for (var i = y, j=x; i >= 0,j>=2; i--,j--) {
      neg = neg +grid[i][j];
    }
  }
  if (x==y+4) {
    for (var i = y, j=x; i < 6,j<10; i++,j++) {
      pos = pos + grid[i][j];
    }
    for (var i = y, j=x; i >= 0,j>=4; i--,j--) {
      neg = neg +grid[i][j];
    }
  }
  if(x==y+6){
    for (var i = y, j=x; i < 4,j<10; i++,j++) {
      pos = pos + grid[i][j];
    }
    for (var i = y, j=x; i >= 0,j>=6; i--,j--) {
      neg = neg +grid[i][j];
    }
  }
  if (x==y+8) {
    for (var i = y, j=x; i < 2,j<10; i++,j++) {
      pos = pos + grid[i][j];
    }
    for (var i = y, j=x; i >= 0,j>=8; i--,j--) {
      neg = neg +grid[i][j];
    }
  }

  if(nbr>=0){
    return pos[nbr];
  }else{
    return neg[-nbr];
  }
}

function axe2(ident,nbr){
  var x = parseInt(ident[1]);
  var y = parseInt(ident[3]);
  var pos =[];
  var neg =[];

  if(x+y==0){
    for (var i = y,j=x; i <1,j>=0 ; i++,j--) {
      pos =pos + grid[i][j];
    }
    for(var i =y, j=x; i>=0,j<1;i--,j++){
      neg=neg+grid[i][j];
    }
  }
  if(x+y==2){
    for (var i = y,j=x; i <3,j>=0 ; i++,j--) {
      pos =pos + grid[i][j];
    }
    for(var i =y, j=x; i>=0,j<3;i--,j++){
      neg=neg+grid[i][j];
    }
  }
  if(x+y==4){
    for (var i = y,j=x; i <5,j>=0 ; i++,j--) {
      pos =pos + grid[i][j];
    }
    for(var i =y, j=x; i>=0,j<5;i--,j++){
      neg=neg+grid[i][j];
    }
  }
  if(x+y==6){
    for (var i = y,j=x; i <7,j>=0 ; i++,j--) {
      pos =pos + grid[i][j];
    }
    for(var i =y, j=x; i>=0,j<7;i--,j++){
      neg=neg+grid[i][j];
    }
  }
  if(x+y==8){
    for (var i = y,j=x; i <9,j>=0 ; i++,j--) {
      pos =pos + grid[i][j];
    }
    for(var i =y, j=x; i>=0,j<9;i--,j++){
      neg=neg+grid[i][j];
    }
  }
  if (x+y==10) {
    for (var i = y,j=x; i <10,j>=1 ; i++,j--) {
      pos =pos + grid[i][j];
    }
     for(var i =y, j=x; i>=1,j<10;i--,j++){
      neg=neg+grid[i][j];
    }
  }
  if (x+y==12) {
    for (var i = y,j=x; i <10,j>=3 ; i++,j--) {
      pos =pos + grid[i][j];
    }
     for(var i =y, j=x; i>=3,j<10;i--,j++){
      neg=neg+grid[i][j];
    }
  }
  if (x+y==14) {
    for (var i = y,j=x; i <10,j>=5 ; i++,j--) {
      pos =pos + grid[i][j];
    }
     for(var i =y, j=x; i>=5,j<10;i--,j++){
      neg=neg+grid[i][j];
    }
  }
  if (x+y==16) {
    for (var i = y,j=x; i <10,j>=7 ; i++,j--) {
      pos =pos + grid[i][j];
    }
     for(var i =y, j=x; i>=7,j<10;i--,j++){
      neg=neg+grid[i][j];
    }
  }
  if (x+y==18) {
    for (var i = y,j=x; i <10,j>=9 ; i++,j--) {
      pos =pos + grid[i][j];
    }
     for(var i =y, j=x; i>=9,j<10;i--,j++){
      neg=neg+grid[i][j];
    }
  }
  if(nbr>=0){
    return pos[nbr];
  }else{
    return neg[-nbr];
  }

}

function parent1(ident,nbr){
  var x = parseInt(ident[1]);
  var y = parseInt(ident[3]);

  return "x"+(x+nbr)+"y"+(y+nbr);
}

function parent2(ident,nbr){
  var x = parseInt(ident[1]);
  var y = parseInt(ident[3]);

  return "x"+(x-nbr)+"y"+(y+nbr);
}

function reset(){
  $(".sombre").css("background-color","black");
  $(".sombre").attr("class","sombre");
}

$("td").click(function(){
  var iden = $(this).attr("id");
  var classe = $(this).attr("class");
  var x=parseInt(iden[1]);
  var y=parseInt(iden[3]);
  // inspecgrid(iden);
  if(axe1(iden,0)==1&&tour1==true){
    tour1=false;
    if(axe1(iden,1)==0){
      $("#"+parent1(iden,1)).css("background-color","green");
      $("#"+parent1(iden,1)).addClass("axeb11");
    }else{
      $("#"+parent1(iden,1)).css("background-color","red");
      $("#"+parent1(iden,1)).addClass("brouge");
    }
    if(axe1(iden,2)==0&&(axe1(iden,1)==2||axe1(iden,1)==5)){
      $("#"+parent1(iden,2)).css("background-color","green");
      $("#"+parent1(iden,2)).addClass("axeb12");
    }else{
      $("#"+parent1(iden,2)).css("background-color","red");
      $("#"+parent1(iden,2)).addClass("brouge");
    }
    if(axe2(iden,1)==0){
      $("#"+parent2(iden,1)).css("background-color","green");
      $("#"+parent2(iden,1)).addClass("axeb21");
    }else{
      $("#"+parent2(iden,1)).css("background-color","red");
      $("#"+parent2(iden,1)).addClass("brouge");
    }
    if(axe2(iden,2)==0&&(axe2(iden,1)==2||axe2(iden,1)==5)){
      $("#"+parent2(iden,2)).css("background-color","green");
      $("#"+parent2(iden,2)).addClass("axeb22");
    }else{
      $("#"+parent2(iden,2)).css("background-color","red");
      $("#"+parent2(iden,2)).addClass("brouge");
    }
    if (axe1(iden,-2)==0&&(axe1(iden,-1)==2||axe1(iden,-1)==5)){
      $("#"+parent1(iden,-2)).css("background-color","green");
      $("#"+parent1(iden,-2)).addClass("axeb1-2");
    }else{
      $("#"+parent1(iden,-2)).css("background-color","red");
      $("#"+parent1(iden,-2)).addClass("brouge");
    }
    if (axe2(iden,-2)==0&&(axe2(iden,-1)==2||axe2(iden,-1)==5)){
      $("#"+parent2(iden,-2)).css("background-color","green");
      $("#"+parent2(iden,-2)).addClass("axeb2-2");
    }else{
      $("#"+parent2(iden,-2)).css("background-color","red");
      $("#"+parent2(iden,-2)).addClass("brouge");
    }
  }

  if(axe1(iden,0)==2&&tour2==true){
    tour2=false;
    if(axe1(iden,-1)==0){
      $("#"+parent1(iden,-1)).css("background-color","green");
      $("#"+parent1(iden,-1)).addClass("axen1-1");
    }else{
      $("#"+parent1(iden,-1)).css("background-color","red");
      $("#"+parent1(iden,-1)).addClass("nrouge");
    }
    if(axe1(iden,-2)==0&&(axe1(iden,-1)==1||axe1(iden,-1)==4)){
      $("#"+parent1(iden,-2)).css("background-color","green");
      $("#"+parent1(iden,-2)).addClass("axen1-2");
    }else{
      $("#"+parent1(iden,-2)).css("background-color","red");
      $("#"+parent1(iden,-2)).addClass("nrouge");
    }
    if(axe2(iden,-1)==0){
      $("#"+parent2(iden,-1)).css("background-color","green");
      $("#"+parent2(iden,-1)).addClass("axen2-1");
    }else{
      $("#"+parent2(iden,-1)).css("background-color","red");
      $("#"+parent2(iden,-1)).addClass("nrouge");
    }
    if(axe2(iden,-2)==0&&(axe2(iden,-1)==1||axe2(iden,-1)==4)){
      $("#"+parent2(iden,-2)).css("background-color","green");
      $("#"+parent2(iden,-2)).addClass("axen2-2");
    }else{
      $("#"+parent2(iden,-2)).css("background-color","red");
      $("#"+parent2(iden,-2)).addClass("nrouge");
    }
    if(axe1(iden,2)==0&&(axe1(iden,1)==1||axe1(iden,1)==4)){
      $("#"+parent1(iden,2)).css("background-color","green");
      $("#"+parent1(iden,2)).addClass("axen12");
    }else{
      $("#"+parent1(iden,2)).css("background-color","red");
      $("#"+parent1(iden,2)).addClass("nrouge");
    }
    if(axe2(iden,2)==0&&(axe2(iden,1)==1||axe2(iden,1)==4)){
      $("#"+parent2(iden,2)).css("background-color","green");
      $("#"+parent2(iden,2)).addClass("axen22");
    }else{
      $("#"+parent2(iden,2)).css("background-color","red");
      $("#"+parent2(iden,2)).addClass("nrouge");
    }
  }

  if (axe1(iden,0)==4&&tour1==true) {
    tour1=false
    var i =1;
    var j=1;
    var k=1;
    var l=1;
    while(axe1(iden,i)==0){
       $("#"+parent1(iden,i)).css("background-color","green");
       $("#"+parent1(iden,i)).addClass("axebk1"+i);
      i++;
    }
    $("#"+parent1(iden,i)).css("background-color","red");
    $("#"+parent1(iden,i)).addClass("brouge");

    if(axe1(iden,i+1)==0&&(axe1(iden,i)==2||axe1(iden,i)==5)){
      $("#"+parent1(iden,i+1)).css("background-color","green");
      $("#"+parent1(iden,i+1)).addClass("axebkm1"+(i+1));
    }else{
      $("#"+parent1(iden,i+1)).css("background-color","red");
      $("#"+parent1(iden,i+1)).addClass("brouge");
    }
    while(axe1(iden,-k)==0){
       $("#"+parent1(iden,-k)).css("background-color","green");
       $("#"+parent1(iden,-k)).addClass("axebk1"+(-k));
      k++;
    }
    $("#"+parent1(iden,-k)).css("background-color","red");
    $("#"+parent1(iden,-k)).addClass("brouge");

    if(axe1(iden,-k-1)==0&&(axe1(iden,-k)==2||axe1(iden,-k)==5)){
      $("#"+parent1(iden,-k-1)).css("background-color","green");
      $("#"+parent1(iden,-k-1)).addClass("axebkm1"+(-k-1));
    }else{
      $("#"+parent1(iden,-k-1)).css("background-color","red");
      $("#"+parent1(iden,-k-1)).addClass("brouge");
    }
    while(axe2(iden,j)==0){
       $("#"+parent2(iden,j)).css("background-color","green");
       $("#"+parent2(iden,j)).addClass("axebk2"+j);
      j++;
    }
    $("#"+parent2(iden,j)).css("background-color","red");
    $("#"+parent2(iden,j)).addClass("brouge");

    if(axe2(iden,j+1)==0&&(axe2(iden,j)==2||axe2(iden,j)==5)){
      $("#"+parent2(iden,j+1)).css("background-color","green");
      $("#"+parent2(iden,j+1)).addClass("axebkm2"+(j+1));
    }else{
      $("#"+parent2(iden,j+1)).css("background-color","red");
      $("#"+parent2(iden,j+1)).addClass("brouge");
    }
    while(axe2(iden,-l)==0){
       $("#"+parent2(iden,-l)).css("background-color","green");
       $("#"+parent2(iden,-l)).addClass("axebk2"+(-l));
      l++;
    }
    $("#"+parent2(iden,-l)).css("background-color","red");
    $("#"+parent2(iden,-l)).addClass("brouge");

    if(axe2(iden,-l-1)==0&&(axe2(iden,-l)==2||axe2(iden,-l)==5)){
      $("#"+parent2(iden,-l-1)).css("background-color","green");
      $("#"+parent2(iden,-l-1)).addClass("axebkm2"+(-l-1));
    }else{
      $("#"+parent2(iden,-l-1)).css("background-color","red");
      $("#"+parent2(iden,-l-1)).addClass("brouge");
    }

  }

  if (axe1(iden,0)==5&&tour2==true) {
    tour2=false;
    var i =1;
    var j=1;
    var k=1;
    var l=1;
    while(axe1(iden,i)==0){
       $("#"+parent1(iden,i)).css("background-color","green");
       $("#"+parent1(iden,i)).addClass("axenk1"+i);
      i++;
    }
    $("#"+parent1(iden,i)).css("background-color","red");
    $("#"+parent1(iden,i)).addClass("nrouge");

    if(axe1(iden,i+1)==0&&(axe1(iden,i)==1||axe1(iden,i)==4)){
      $("#"+parent1(iden,i+1)).css("background-color","green");
      $("#"+parent1(iden,i+1)).addClass("axenkm1"+(i+1));
    }else{
      $("#"+parent1(iden,i+1)).css("background-color","red");
      $("#"+parent1(iden,i+1)).addClass("nrouge");
    }
    while(axe1(iden,-k)==0){
       $("#"+parent1(iden,-k)).css("background-color","green");
       $("#"+parent1(iden,-k)).addClass("axenk1"+(-k));
      k++;
    }
    $("#"+parent1(iden,-k)).css("background-color","red");
    $("#"+parent1(iden,-k)).addClass("nrouge");

    if(axe1(iden,-k-1)==0&&(axe1(iden,-k)==1||axe1(iden,-k)==4)){
      $("#"+parent1(iden,-k-1)).css("background-color","green");
      $("#"+parent1(iden,-k-1)).addClass("axenkm1"+(-k-1));
    }else{
      $("#"+parent1(iden,-k-1)).css("background-color","red");
      $("#"+parent1(iden,-k-1)).addClass("nrouge");
    }
    while(axe2(iden,j)==0){
       $("#"+parent2(iden,j)).css("background-color","green");
       $("#"+parent2(iden,j)).addClass("axenk2"+j);
      j++;
    }
    $("#"+parent2(iden,j)).css("background-color","red");
    $("#"+parent2(iden,j)).addClass("nrouge");

    if(axe2(iden,j+1)==0&&(axe2(iden,j)==1||axe2(iden,j)==4)){
      $("#"+parent2(iden,j+1)).css("background-color","green");
      $("#"+parent2(iden,j+1)).addClass("axenkm2"+(j+1));
    }else{
      $("#"+parent2(iden,j+1)).css("background-color","red");
      $("#"+parent2(iden,j+1)).addClass("nrouge");
    }
    while(axe2(iden,-l)==0){
       $("#"+parent2(iden,-l)).css("background-color","green");
       $("#"+parent2(iden,-l)).addClass("axenk2"+(-l));
      l++;
    }
    $("#"+parent2(iden,-l)).css("background-color","red");
    $("#"+parent2(iden,-l)).addClass("nrouge");

    if(axe2(iden,-l-1)==0&&(axe2(iden,-l)==1||axe2(iden,-l)==4)){
      $("#"+parent2(iden,-l-1)).css("background-color","green");
      $("#"+parent2(iden,-l-1)).addClass("axenkm2"+(-l-1));
    }else{
      $("#"+parent2(iden,-l-1)).css("background-color","red");
      $("#"+parent2(iden,-l-1)).addClass("nrouge");
    }

  }


  if (classe=="sombre brouge"){
    reset();
    tour1=true;
  }

  if (classe=="sombre nrouge"){
    reset();
    tour2=true;
  }

  if (classe=="sombre axeb11") {
    grid[y][x]=1;
    grid[y-1][x-1]=0;
    manipuletab();
    reset();
    tour2=true;
  }

  if (classe=="sombre axeb21") {
    grid[y][x]=1;
    grid[y-1][x+1]=0;
    manipuletab();
    reset();
    tour2=true;
  }

if (classe=="sombre axen1-1") {
    grid[y][x]=2;
    grid[y+1][x+1]=0;
    manipuletab();
    reset();
    tour1=true;
  }

if (classe=="sombre axen2-1") {
    grid[y][x]=2;
    grid[y+1][x-1]=0;
    manipuletab();
    reset();
    tour1=true;
  }

if(classe=="sombre axeb12"){
    grid[y][x]=1;
    grid[y-1][x-1]=0;
    grid[y-2][x-2]=0;
    manipuletab();
    reset();
    tour2=true;
}

if(classe=="sombre axeb22"){
    grid[y][x]=1;
    grid[y-1][x+1]=0;
    grid[y-2][x+2]=0;
    manipuletab();
    reset();
    tour2=true;
}

if (classe=="sombre axen1-2") {
    grid[y][x]=2;
    grid[y+1][x+1]=0;
    grid[y+2][x+2]=0;
    manipuletab();
    reset();
    tour1=true;
  }

if (classe=="sombre axen2-2") {
    grid[y][x]=2;
    grid[y+1][x-1]=0;
    grid[y+2][x-2]=0;
    manipuletab();
    reset();
    tour1=true;
  }

if (classe=="sombre axeb1-2"){
    grid[y][x]=1;
    grid[y+1][x+1]=0;
    grid[y+2][x+2]=0;
    manipuletab();
    reset();
    tour2=true;
}

if(classe=="sombre axeb2-2"){
  grid[y][x]=1;
  grid[y+1][x-1]=0;
  grid[y+2][x-2]=0;
  manipuletab();
  reset();
  tour2=true;
}

if (classe=="sombre axen12"){
    grid[y][x]=2;
    grid[y-1][x-1]=0;
    grid[y-2][x-2]=0;
    manipuletab();
    reset();
    tour1=true;
}

if(classe=="sombre axen22"){
  grid[y][x]=2;
  grid[y-1][x+1]=0;
  grid[y-2][x+2]=0;
  manipuletab();
  reset();
  tour1=true;
}

if (y==9&&axe1(iden,0)==1) {
  grid[y][x]=4;
  manipuletab();
}

if (y==0&&axe1(iden,0)==2) {
  grid[y][x]=5;
  manipuletab();
}

for (var i = 0; i < 10; i++) {
  if (classe=="sombre axebk1"+i) {
    grid[y][x]=4;
    grid[y-i][x-i]=0;
    manipuletab();
    reset();
    tour2=true;
  } 

  if (classe=="sombre axebk2"+i) {
    grid[y][x]=4;
    grid[y-i][x+i]=0;
    manipuletab();
    reset();
    tour2=true;
  } 

  if (classe=="sombre axebkm1"+i) {
    grid[y][x]=4;
    grid[y-1][x-1]=0;
    grid[y-i][x-i]=0;
    manipuletab();
    reset();
    tour2=true;
  } 

  if (classe=="sombre axebkm2"+i) {
    grid[y][x]=4;
    grid[y-1][x+1]=0;
    grid[y-i][x+i]=0;
    manipuletab();
    reset();
    tour2=true;
  }
  if (classe=="sombre axebk1"+(-i)) {
    grid[y][x]=4;
    grid[y+i][x+i]=0;
    manipuletab();
    reset();
    tour2=true;
  }
  if (classe=="sombre axebk2"+(-i)) {
    grid[y][x]=4;
    grid[y+i][x-i]=0;
    manipuletab();
    reset();
    tour2=true;
  }
  if (classe=="sombre axebkm1"+(-i)) {
    grid[y][x]=4;
    grid[y+1][x+1]=0;
    grid[y+i][x+i]=0;
    manipuletab();
    reset();
    tour2=true;
  }
  if (classe=="sombre axebkm2"+(-i)) {
    grid[y][x]=4;
    grid[y+1][x-1]=0;
    grid[y+i][x-i]=0;
    manipuletab();
    reset();
    tour2=true;
  }

  if (classe=="sombre axenk1"+i) {
    grid[y][x]=5;
    grid[y-i][x-i]=0;
    manipuletab();
    reset();
    tour1=true;
  } 

  if (classe=="sombre axenk2"+i) {
    grid[y][x]=5;
    grid[y-i][x+i]=0;
    manipuletab();
    reset();
    tour1=true;
  } 

  if (classe=="sombre axenkm1"+i) {
    grid[y][x]=5;
    grid[y-1][x-1]=0;
    grid[y-i][x-i]=0;
    manipuletab();
    reset();
    tour1=true;
  } 

  if (classe=="sombre axenkm2"+i) {
    grid[y][x]=5;
    grid[y-1][x+1]=0;
    grid[y-i][x+i]=0;
    manipuletab();
    reset();
    tour1=true;
  }
  if (classe=="sombre axenk1"+(-i)) {
    grid[y][x]=5;
    grid[y+i][x+i]=0;
    manipuletab();
    reset();
    tour1=true;
  }
  if (classe=="sombre axenk2"+(-i)) {
    grid[y][x]=5;
    grid[y+i][x-i]=0;
    manipuletab();
    reset();
    tour1=true;
  }
  if (classe=="sombre axenkm1"+(-i)) {
    grid[y][x]=5;
    grid[y+1][x+1]=0;
    grid[y+i][x+i]=0;
    manipuletab();
    reset();
    tour1=true;
  }
  if (classe=="sombre axenkm2"+(-i)) {
    grid[y][x]=5;
    grid[y+1][x-1]=0;
    grid[y+i][x-i]=0;
    manipuletab();
    reset();
    tour1=true;
  }
}



});



});
