const allPets = [
    {
      name: "Jennifer",
      img: "../../assets/images/pets-jennifer.png",
      type: "Dog",
      breed: "Labrador",
      description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: ["none"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Sophia",
      img: "../../assets/images/pets-sophia.png",
      type: "Dog",
      breed: "Shih tzu",
      description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: "1 month",
      inoculations: ["parvovirus"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Woody",
      img: "../../assets/images/pets-woody.png",
      type: "Dog",
      breed: "Golden Retriever",
      description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      age: "3 years 6 months",
      inoculations: ["adenovirus", " distemper"],
      diseases: ["right back leg mobility reduced"],
      parasites: ["none"]
    },
    {
      name: "Scarlett",
      img: "../../assets/images/pets-scarlett.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      age: "3 months",
      inoculations: ["parainfluenza"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Katrine",
      img: "../../assets/images/pets-katrine.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      age: "6 months",
      inoculations: ["panleukopenia"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Timmy",
      img: "../../assets/images/pets-timmy.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      age: "2 years 3 months",
      inoculations: ["calicivirus", " viral rhinotracheitis"],
      diseases: ["kidney stones"],
      parasites: ["none"]
    },
    {
      name: "Freddie",
      img: "../../assets/images/pets-freddie.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      age: "2 months",
      inoculations: ["rabies"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Charly",
      img: "../../assets/images/pets-charly.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      age: "8 years",
      inoculations: ["bordetella bronchiseptica", " leptospirosis"],
      diseases: ["deafness", " blindness"],
      parasites: ["lice", " fleas"]
    }
  ]
const windowInnerWidth = window.innerWidth
//console.log('width: ', windowInnerWidth);
let currentPages = 1;
let pages;
let cards;
const mapCards = getArrayCards();
//console.log(mapCards);
//const a = setCardsPage (1, cards);    

const navMenu = document.querySelector('.menu');
const navMenuList = document.querySelectorAll('.menu-item');
const shadow = document.querySelector('.shadow');
const buttonToggle = document.getElementById('menu-toggle');
const menuToggle = document.querySelectorAll('.menu-toggle');
const shield = document.querySelectorAll('.block');
const choiceBtn = document.querySelector('.choice-buttons');

const itemsPets = document.querySelectorAll('.item-pets');

let firstCard = document.querySelector('.pets-block>.first-card');
let secondCard = document.querySelector('.pets-block>.second-card');
let thirdCard = document.querySelector('.pets-block>.third-card');
let fourthCard = document.querySelector('.pets-block>.fourth-card');
let fifthdCard = document.querySelector('.pets-block>.fifth-card');
let sixthCard = document.querySelector('.pets-block>.sixth-card');
let seventhCard = document.querySelector('.pets-block>.seventh-card');
let eighthCard = document.querySelector('.pets-block>.eighth-card');

const elementPopup = document.querySelector('.popup');
const windowPopup = document.querySelector('.wrap-popup');
const closePopup = document.querySelector('.close-popup');

choiceStart = document.querySelector('.choice-start');
choicePrev = document.querySelector('.choice-prev');
choiceNext = document.querySelector('.choice-next');
choiceFinish = document.querySelector('.choice-finish');

firstCard.addEventListener('click', callPopup);
secondCard.addEventListener('click', callPopup);
thirdCard.addEventListener('click', callPopup);
fourthCard.addEventListener('click', callPopup);
fifthdCard.addEventListener('click', callPopup);
sixthCard.addEventListener('click', callPopup);
seventhCard.addEventListener('click', callPopup);
eighthCard.addEventListener('click', callPopup);
closePopup.addEventListener('click', closeWindowPopup);

setCardsPage (1, cards);

navMenu.addEventListener('click', setSelect);
buttonToggle.addEventListener('click', openCloseMenu);
choiceBtn.addEventListener('click', getFlipping);

function setSelect (event) {
    const targetLink = event.target.parentNode;    
    if (!targetLink.classList.contains('logo-mobile') && 
         targetLink.classList.length !== 0) {
        
        navMenuList.forEach((item) => item.classList.remove('selected-item'));

        switch (true) {
            case (targetLink.classList.contains('menu-about')) : 
                    targetLink.classList.add('selected-item');            
                break;
            case (targetLink.classList.contains('menu-pets')) :
                    targetLink.classList.add('selected-item');
                break;
            case (targetLink.classList.contains('menu-help')) :
                    targetLink.classList.add('selected-item');
                break;
            case (targetLink.classList.contains('menu-footer')) :
                    targetLink.classList.add('selected-item');
                break;
        }
    }
    if (targetLink.classList.contains('menu-item')) {        
        closeMenu();               
    }
}

function openCloseMenu () {    
    if (menuToggle[0].classList.contains('open')) {
        closeMenu ();        
    } else {
        shield.forEach((item) => item.classList.add('select'));
        menuToggle.forEach((item) => item.classList.add('open'));
        shadow.addEventListener('click', closeMenu);       
    }
}

function closeMenu () {    
    shield.forEach((item) => item.classList.remove('select'));
    menuToggle.forEach((item) => item.classList.remove('open'));
    buttonToggle.checked = false;
    shadow.removeEventListener('click', closeMenu);
}

function getArrayCards () {
    let exceptions = [];
    let arrayAllCards = [];
    let arrayCardsPage = [];

    switch (true) {
        case (windowInnerWidth > 1279 ) : {
            pages = 6;
            cards = 8;
        } break;
        case (windowInnerWidth > 767) : {
            pages = 8;
            cards = 6;
        } break;
        default                       : {
            pages = 16;
            cards = 3;
        } break;
    }

    for (let i = 0; i < pages; i++) {
        for (let j = 0; j < cards; j++){
            do {                
                arrayCardsPage[j] = Math.floor(Math.random() * 8);                
            } while (exceptions.includes(arrayCardsPage[j]));
            exceptions.push(arrayCardsPage[j]);            
        }
        exceptions = [] ;
        arrayAllCards[i] = arrayCardsPage;
        arrayCardsPage = [];
    }
    return arrayAllCards;
}

function setCardsPage (numberPage, numberCards) {
    const arr = mapCards[numberPage - 1];
    let cardImg='';
    let cardName='';
    console.log('arr: ', arr);
    for (let i = 0; i < numberCards; i++) {
        
        itemsPets[i].childNodes[1].innerHTML = 
            `<img src=\"${allPets[arr[i]].img}\"alt=\"photo of a pet\"></img>`;        
        itemsPets[i].childNodes[3].innerText = allPets[arr[i]].name;
    }
    return true;
}

function getFlipping (event) {
    console.log(event.target);
    const eventTarget = event.target;
    switch (true) {
        case (eventTarget.classList.contains('choice-start')) : {                      
            setCardsPage(1, cards);
            currentPages = 1;
       
            choiceStart.classList.add('disactive');
            choicePrev.classList.add('disactive');
            choiceNext.classList.remove('disactive');
            choiceFinish.classList.remove('disactive');

            choiceStart.disabled = true;
            choicePrev.disabled = true;
            choiceNext.disabled = false;
            choiceFinish.disabled = false;
            
        } break;
        case (eventTarget.classList.contains('choice-prev')) : {            
            if (currentPages > 1) {
                setCardsPage(--currentPages, cards); 
         
                choiceNext.classList.remove('disactive');
                choiceFinish.classList.remove('disactive');
                choiceNext.disabled = false;
                choiceFinish.disabled = false;

                if (currentPages === 1) {
                    choiceStart.classList.add('disactive');
                    choicePrev.classList.add('disactive');
                    choiceStart.disabled = true;
                    choicePrev.disabled = true;
                }       
            }            
        } break;
        case (eventTarget.classList.contains('choice-next')) : {            
            if (currentPages < pages) {
                setCardsPage(++currentPages, cards);  
                 
                choiceStart.classList.remove('disactive');
                choicePrev.classList.remove('disactive');
                choiceStart.disabled = false;
                choicePrev.disabled = false;
  
                if (currentPages === pages) {
                    choiceNext.classList.add('disactive');
                    choiceFinish.classList.add('disactive');   
                    choiceNext.disabled = true;
                    choiceFinish.disabled = true;
                }
            }
            else {};
        } break;
        case (eventTarget.classList.contains('choice-finish')) : {
            console.log('Finish');
            setCardsPage(pages, cards);
            currentPages = pages; 

            choiceStart.classList.remove('disactive');
            choicePrev.classList.remove('disactive');
            choiceNext.classList.add('disactive');
            choiceFinish.classList.add('disactive');

            choiceStart.disabled = false;
            choicePrev.disabled = false;
            choiceNext.disabled = true;
            choiceFinish.disabled = true;           
        } break;        
    }
    choiceBtn.childNodes[5].innerText = currentPages;   
}

function callPopup (event) {
    const eventTarget = event.path[0];    
    let namePet = eventTarget.innerText.slice(0, 5);    
    let indexCard;

    if (namePet === 'Learn') {        
        namePet = eventTarget.parentNode.childNodes[3].innerText.slice(0, 5);
    }
    if (namePet === '') {
        namePet = eventTarget.parentNode.parentNode.childNodes[3].innerText.slice(0, 5);
    }

    switch (namePet) {
        case ('Jenni') : indexCard = 0;
        break;
        case ('Sophi') : indexCard = 1;
        break;
        case ('Woody') : indexCard = 2;
        break;
        case ('Scarl') : indexCard = 3;
        break;
        case ('Katri') : indexCard = 4;
        break;
        case ('Timmy') : indexCard = 5;
        break;
        case ('Fredd') : indexCard = 6;
        break;
        case ('Charl') : indexCard = 7;
        break;
    }    
    elementPopup.innerHTML ='<img src=\"'+ allPets[indexCard].img +'\" alt=\"photo of a pet\">' +
                            '<div class=\"popup-content\">' +
                            '<h3 class=\"popup-title\">' +
                            allPets[indexCard].name +
                            '</h3>' +
                            '<h4 class=\"popup-subtitle\">' +
                            allPets[indexCard].type + ' - ' + 
                            allPets[indexCard].breed + '</h4>' +
                            '<p class=\"popup-paragraf\">' +
                                allPets[indexCard].description +
                            '</p>' +
                            '<ul class=\"popup-property\">' +
                                '<li class=\"item-property age\"><span><span class=\"prop-span\">Age: </span>' + allPets[indexCard].age + '</span></li>' +
                                '<li class=\"item-property inoculations\"><span><span class=\"prop-span\">Inoculations: </span>' + allPets[indexCard].inoculations + '</span></li>' +
                                '<li class=\"item-property diaseases\"><span><span class=\"prop-span\">Diseases: </span>' + allPets[indexCard].diseases + '</span></li>' +
                                '<li class=\"item-property parasites\"><span><span class=\"prop-span\">Parasites: </span>' + allPets[indexCard].parasites + '</span></li>' +
                            '</ul>' +
                        '</div>';    
                        
    windowPopup.classList.add('up');
    shadow.classList.add('select');
    shield.forEach((item) => item.classList.add('select'));
    elementPopup.addEventListener('mouseover', cursorDefault);
    elementPopup.addEventListener('mouseout', cursorDefault);
    shadow.addEventListener('mouseover', setLightBtn);
    shadow.addEventListener('mouseout', setLightBtn);
    shadow.addEventListener('click', closeWindowPopup);
    firstCard.removeEventListener('click', callPopup);
    secondCard.removeEventListener('click', callPopup);
    thirdCard.removeEventListener('click', callPopup);
    fourthCard.removeEventListener('click', callPopup);
    fifthdCard.removeEventListener('click', callPopup);
    sixthCard.removeEventListener('click', callPopup);
    seventhCard.removeEventListener('click', callPopup);
    eighthCard.removeEventListener('click', callPopup);
}

function closeWindowPopup () {
    windowPopup.classList.remove('up');
    shadow.classList.remove('select');
    shield.forEach((item) => item.classList.remove('select'));
    elementPopup.removeEventListener('mouseover', cursorDefault);
    elementPopup.removeEventListener('mouseout', cursorDefault);
    shadow.removeEventListener('mouseover', setLightBtn);
    shadow.removeEventListener('mouseout', setLightBtn);
    shadow.removeEventListener('click', closeWindowPopup);
    closePopup.classList.remove('hovered');
    elementPopup.classList.remove('default');
    firstCard.addEventListener('click', callPopup);
    secondCard.addEventListener('click', callPopup);
    thirdCard.addEventListener('click', callPopup);
    fourthCard.addEventListener('click', callPopup);
    fifthdCard.addEventListener('click', callPopup);
    sixthCard.addEventListener('click', callPopup);
    seventhCard.addEventListener('click', callPopup);
    eighthCard.addEventListener('click', callPopup);
}

function setLightBtn (event) {    
    closePopup.classList.toggle('hovered');
}

function cursorDefault () {
    elementPopup.classList.toggle('default');
}
