let theclasses = ["demo", "demo2"];

const funkkis = () => {
  for(let a = 0; a < 1; a++) {
  let rand = Math.floor(Math.random() * 2);
  //console.log(theclasses[rand]);
  //console.log(rand);
  let dd = document.getElementById('displaythis');
  let dd2 = document.getElementById('hidethis');

  if (document.getElementById('hidethis') !=null) {
    document.querySelector('.row1').classList.replace('row1', 'row2');
    document.querySelector('.row1').classList.replace('row1', 'row3');
    document.querySelector('.exspan10').classList.replace('exspan10', 'exspan6');
    document.getElementById('hidethis').setAttribute('id', 'displaythis');
    document.querySelector('.animatethis2').classList.replace('animatethis2', 'animatethis');
    // document.getElementsByClassName('span10 items exs row1').setAttribute('class', 'span10 items exs row2');
//   document.getElementsByClassName('demo4').setAttribute('class', 'demo3');
  console.log('it exists!');
	} else if (document.getElementById('displaythis') !=null) {
        document.querySelector('.row2').classList.replace('row2', 'row1');
        document.querySelector('.row3').classList.replace('row3', 'row1');
        document.querySelector('.exspan6').classList.replace('exspan6', 'exspan10');
        document.getElementById('displaythis').setAttribute('id', 'hidethis');
        document.querySelector('.animatethis').classList.replace('animatethis', 'animatethis2');
    // document.getElementsByClassName('span10 items exs row2').setAttribute('class', 'span10 items exs row1');
//   document.getElementsByClassName('demo3').setAttribute('class', 'demo4');
  console.log('does not exist!');
  }  
  }
}


var lol = setInterval(funkkis, 10000);

