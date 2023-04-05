const hamburger = document.createElement('div');
hamburger.style.width="2rem";
hamburger.setAttribute('class','menuContainer');




// hamburger.setAttribute('onclick',openme());


const span = document.createElement('span');
span.setAttribute('class','hamburger');
span.style.backgroundColor='black';
span.style.height='4px';
span.style.display='block';

hamburger.append(span);

header.append(hamburger);

// ADD EVENTLISTNER

hamburger.addEventListener('click',function(){

   document.body.classList.toggle('nav-open');

}

)
