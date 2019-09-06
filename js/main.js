if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

const btn = document.getElementById('btnEject');
const btnImageContainer = document.getElementById('container_imgbtn');
const btnload = document.getElementById('loading');
const div_container = document.getElementById('myContent');
const arrayCharacter = ['captain%20marvel','thanos','black%20panther','spider-man','iron%20man','hulk','captain%20america','black%20widow','hawkeye','thor','aegis','ant-man'];
const arrayCharacterText = ['captain_marvel', 'thanos', 'black_panther', 'spider-man','iron_man', 'hulk', 'captain_america', 'black_widow','hawkeye','thor','aegis','ant-man'];

let randomCharacter;
let randomCharacterModif;
let numberRandom;
let numberRandomText1;
let numberRandomText2;
let numberRandomPosition;
let opc;
let score = 0;
let comp = true;
let msj;
let btn_success;
let btn_noSuccess;
let count;
let urlChange;

const hash = 'd8c654b1434acc7a69ba9127b61eb186';
const apiKey = '666d359706b3037e653e838e0e52e226';

btnload.style.display = 'none';
btn.style.display = 'block';
btnImageContainer.style.display = 'block';


const btnStart = () => {
    btn.style.display = 'none';
    btnImageContainer.style.display = 'none';
    btnload.style.display = 'block';
    numberRandom = Math.round(Math.random()*(arrayCharacter.length-1))
    randomCharacter = arrayCharacter[numberRandom];
    loadComics(randomCharacter);
}

btn.addEventListener('click', e => {
    btnStart();
})


const loadComics = async (nameCharacter) => {

    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nameCharacter}&limit=1&apikey=${apiKey}&hash=${hash}`;    
    const response = await fetch(url)
    switch (response.status) {
        case 200:
            const infoData = await response.json();
            draw(infoData.data.results)
            break;
        default:
            console.log('Error desconocido:' + response.status);
            break;
    }

    if(arrayCharacter[numberRandom] == randomCharacter){
        arrayCharacter.splice(arrayCharacter.indexOf(randomCharacter),1);
    }

}

const changeNameBtn1 = (btn1, count) => {

    // BTN 1 === BTN 2
    if(btn1 == arrayCharacterText[numberRandomText]){
        if(arrayCharacterText.indexOf(arrayCharacterText[numberRandomText]) >= 0 && arrayCharacterText.indexOf(arrayCharacterText[numberRandomText]) <= 5){
            numberRandomText = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText]) + count;
        }else{
            numberRandomText = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText]) - count;
        }
    }

    // BTN 1 === BTN 3
    if(btn1 == arrayCharacterText[numberRandomText1]){
        if(arrayCharacterText.indexOf(arrayCharacterText[numberRandomText1]) >= 0 && arrayCharacterText.indexOf(arrayCharacterText[numberRandomText1]) <= 5 ){
            numberRandomText1 = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText1]) + count;
        }else{
            numberRandomText1 = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText1]) - count;
        }
    }

    // BTN 1 === BTN 4
    if(btn1 == arrayCharacterText[numberRandomText2]){
        if(arrayCharacterText.indexOf(arrayCharacterText[numberRandomText2]) >= 0 && arrayCharacterText.indexOf(arrayCharacterText[numberRandomText2]) <= 5 ){
            numberRandomText2 = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText2]) + count;
        }else{
            numberRandomText2 = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText2]) - count;
        }
    }

}

const changeNameBtn2 = (btn2, count) => {

    // BTN 2 === BTN 1
    if(btn2 == randomCharacterModif){
        if(arrayCharacterText.indexOf(randomCharacterModif) >= 0 && arrayCharacterText.indexOf(randomCharacterModif) <= 5){
            numberRandomText = arrayCharacterText.indexOf(randomCharacterModif) + count;
        }else{
            numberRandomText = arrayCharacterText.indexOf(randomCharacterModif) - count;
        }
    }

    // BTN 2 === BTN 3
    if(btn2 == arrayCharacterText[numberRandomText1]){
        if(arrayCharacterText.indexOf(arrayCharacterText[numberRandomText1]) >= 0 && arrayCharacterText.indexOf(arrayCharacterText[numberRandomText1]) <= 5 ){
            numberRandomText1 = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText1]) + count;
        }else{
            numberRandomText1 = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText1]) - count;
        }
    }

    // BTN 2 === BTN 4
    if(btn2 == arrayCharacterText[numberRandomText2]){
        if(arrayCharacterText.indexOf(arrayCharacterText[numberRandomText2]) >= 0 && arrayCharacterText.indexOf(arrayCharacterText[numberRandomText2]) <= 5 ){
            numberRandomText2 = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText2]) + count;
        }else{
            numberRandomText2 = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText2]) - count;
        }
    }

}

const changeNameBtn3 = (btn3, count) => {

    // BTN 3 === BTN 1
    if(btn3 == randomCharacterModif){
        if(arrayCharacterText.indexOf(randomCharacterModif) >= 0 && arrayCharacterText.indexOf(randomCharacterModif) <= 5 ){
            numberRandomText1 = arrayCharacterText.indexOf(randomCharacterModif) + count;
        }else{
            numberRandomText1 = arrayCharacterText.indexOf(randomCharacterModif) - count;
        }
    }

    // BTN 3 === BTN 2
    if(btn3 == arrayCharacterText[numberRandomText]){
        if(arrayCharacterText.indexOf(arrayCharacterText[numberRandomText]) >= 0 && arrayCharacterText.indexOf(arrayCharacterText[numberRandomText]) <= 5 ){
            numberRandomText = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText]) + count;
        }else{
            numberRandomText = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText]) - count;
        }
    }

    // BTN 3 === BTN 4
    if(btn3 == arrayCharacterText[numberRandomText2]){
        if(arrayCharacterText.indexOf(arrayCharacterText[numberRandomText2]) >= 0 && arrayCharacterText.indexOf(arrayCharacterText[numberRandomText2]) <= 5 ){
            numberRandomText2 = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText2]) + count;
        }else{
            numberRandomText2 = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText2]) - count;
        }
    }

}

const changeNameBtn4 = (btn4, count) => {

    // BTN 4 === BTN 1
    if(btn4 == randomCharacterModif){
        if(arrayCharacterText.indexOf(randomCharacterModif) >= 0 && arrayCharacterText.indexOf(randomCharacterModif) <= 5 ){
            numberRandomText2 = arrayCharacterText.indexOf(randomCharacterModif) + count;
        }else{
            numberRandomText2 = arrayCharacterText.indexOf(randomCharacterModif) - count;
        }
    }

    // BTN 4 === BTN 2
    if(btn4 == arrayCharacterText[numberRandomText]){
        if(arrayCharacterText.indexOf(arrayCharacterText[numberRandomText]) >= 0 && arrayCharacterText.indexOf(arrayCharacterText[numberRandomText]) <= 5 ){
            numberRandomText = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText]) + count;
        }else{
            numberRandomText = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText]) - count;
        }
    }

    // BTN 4 === BTN 3
    if(btn4 == arrayCharacterText[numberRandomText1]){
        if(arrayCharacterText.indexOf(arrayCharacterText[numberRandomText1]) >= 0 && arrayCharacterText.indexOf(arrayCharacterText[numberRandomText1]) <= 5 ){
            numberRandomText1 = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText1]) + count;
        }else{
            numberRandomText1 = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText1]) - count;
        }
    }

}

const changeAndEnd = () => {

    if(arrayCharacter.length > 0) {
        if(randomCharacter.includes('%20')){
            randomCharacterModif = randomCharacter.replace("%20","_");
        }else{
            randomCharacterModif = randomCharacter;
        }
    }

}

const drawFinalComparation = () => {

    div_container.innerHTML = '';
    drawPreFinal(score);

    btn_success = document.getElementById('btn_success');
    btn_noSuccess = document.getElementById('btn_noSuccess');

    btn_success.addEventListener('click', () => {
        setTimeout( () => {
            location.reload();
        },1000);
    });

    btn_noSuccess.addEventListener('click', () => {
        setTimeout( () => {
            drawpageFooter(score);
        },1000);
    });
}

const comparationsBtns = () => {
    while( (randomCharacterModif == arrayCharacterText[numberRandomText]) || (randomCharacterModif == arrayCharacterText[numberRandomText1]) ||  (randomCharacterModif == arrayCharacterText[numberRandomText2]) ){
        changeNameBtn1(randomCharacterModif,1);
    }
    while( (arrayCharacterText[numberRandomText] == randomCharacterModif) || (arrayCharacterText[numberRandomText] == arrayCharacterText[numberRandomText1]) ||  (arrayCharacterText[numberRandomText] == arrayCharacterText[numberRandomText2]) ){
        changeNameBtn2(arrayCharacterText[numberRandomText],1);
    }
    while( (arrayCharacterText[numberRandomText1] == randomCharacterModif) || (arrayCharacterText[numberRandomText1] == arrayCharacterText[numberRandomText]) ||  (arrayCharacterText[numberRandomText1] == arrayCharacterText[numberRandomText2]) ){
        changeNameBtn3(arrayCharacterText[numberRandomText1],1);
    }
    while( (arrayCharacterText[numberRandomText2] == randomCharacterModif) || (arrayCharacterText[numberRandomText2] == arrayCharacterText[numberRandomText]) ||  (arrayCharacterText[numberRandomText2] == arrayCharacterText[numberRandomText1]) ){
        changeNameBtn4(arrayCharacterText[numberRandomText2],1);
    }
}

const endOtherBtns = () => {
    //btn2
    if( (arrayCharacterText[numberRandomText] == arrayCharacterText[numberRandomText1]) ||  (arrayCharacterText[numberRandomText] == arrayCharacterText[numberRandomText2])  ){
        numberRandomText = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText]) + 2;
        comparationsBtns();

    }

    //btn3
    if( (arrayCharacterText[numberRandomText1] == arrayCharacterText[numberRandomText]) || (arrayCharacterText[numberRandomText1] == arrayCharacterText[numberRandomText2]) ){
        numberRandomText1 = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText]) - 2;
        comparationsBtns();
    }
    
    //btn4
    if( (arrayCharacterText[numberRandomText2] == arrayCharacterText[numberRandomText]) || (arrayCharacterText[numberRandomText2] == arrayCharacterText[numberRandomText1]) ){
        numberRandomText2 = arrayCharacterText.indexOf(arrayCharacterText[numberRandomText]) - 1;
        comparationsBtns();
    }

}

const HtmlPart = (opc) => {

    switch (opc) {
        case 1:
            return (`
    
                <div class="grid-item">
                    <a id="btnDone" class="grid-item-btn_subtitle">${randomCharacterModif}</a>
                </div>
                <div class="grid-item">
                    <a id="btnFail1" class="grid-item-btn_subtitle">${arrayCharacterText[numberRandomText]}</a>
                </div>
                <div class="grid-item">
                    <a id="btnFail2" class="grid-item-btn_subtitle">${arrayCharacterText[numberRandomText1]}</a>
                </div>
                <div class="grid-item">
                    <a id="btnFail3" class="grid-item-btn_subtitle">${arrayCharacterText[numberRandomText2]}</a>
                </div>
                <div class="grid-item">
                    <div class="grid-item-textImg">
                        <h4 class="restanteText">Remaining images: ${arrayCharacter.length}</a>
                    </div>
                </div>
            </div>
            `);

        case 2:
            return (`
    
                <div class="grid-item">               
                    <a id="btnFail1" class="grid-item-btn_subtitle">${arrayCharacterText[numberRandomText2]}</a>
                </div>
                <div class="grid-item">               
                    <a id="btnDone" class="grid-item-btn_subtitle">${randomCharacterModif}</a>
                </div>
                <div class="grid-item">               
                    <a id="btnFail2" class="grid-item-btn_subtitle">${arrayCharacterText[numberRandomText]}</a>
                </div>
                <div class="grid-item">               
                    <a id="btnFail3" class="grid-item-btn_subtitle">${arrayCharacterText[numberRandomText1]}</a>
                </div>
                <div class="grid-item">
                    <div class="grid-item-textImg">
                        <h4 class="restanteText">Remaining images: ${arrayCharacter.length}</a>
                    </div>
                </div>
            </div>
            `);

        case 3:
            return (`
    
                <div class="grid-item">                    
                    <a id="btnFail1" class="grid-item-btn_subtitle">${arrayCharacterText[numberRandomText1]}</a>
                </div>
                <div class="grid-item">                    
                    <a id="btnFail2" class="grid-item-btn_subtitle">${arrayCharacterText[numberRandomText]}</a>
                </div>
                <div class="grid-item">                    
                    <a id="btnDone" class="grid-item-btn_subtitle">${randomCharacterModif}</a>
                </div>
                <div class="grid-item">                    
                    <a id="btnFail3" class="grid-item-btn_subtitle">${arrayCharacterText[numberRandomText2]}</a>
                </div>
                <div class="grid-item">
                    <div class="grid-item-textImg">
                        <h4 class="restanteText">Remaining images: ${arrayCharacter.length}</a>
                    </div>
                </div>
            </div>
            `);
            
        case 4:
            return (`
    
                <div class="grid-item">                    
                    <a id="btnFail1" class="grid-item-btn_subtitle">${arrayCharacterText[numberRandomText]}</a>
                </div>
                <div class="grid-item">                    
                    <a id="btnFail2" class="grid-item-btn_subtitle">${arrayCharacterText[numberRandomText2]}</a>
                </div>
                <div class="grid-item">                    
                    <a id="btnFail3" class="grid-item-btn_subtitle">${arrayCharacterText[numberRandomText1]}</a>
                </div>
                <div class="grid-item">                    
                    <a id="btnDone" class="grid-item-btn_subtitle">${randomCharacterModif}</a>
                </div>
                <div class="grid-item">
                    <div class="grid-item-textImg">
                        <h4 class="restanteText">Remaining images: ${arrayCharacter.length}</a>
                    </div>
                </div>
            </div>
            `);
    
        default:
            break;
    }
}

const drawPreFinal = (scoreFinal) => {

    const containerPreFinal = document.createElement('div');

    if(scoreFinal >= 0 && scoreFinal <= 5){
        msj = "You may not know much";
    }else if(scoreFinal > 5 && scoreFinal <= 11 ){
        msj = "You could improve";
    }else{
        msj = "Congratulations, you have reached the maximum score";
    }

    const drawPreHTML = `
    <div class="container_confirmation">
        <div class="container_confirmation-top">
            <h3 class="container_confirmation-top__text">Final Score: ${scoreFinal} of ${arrayCharacterText.length}</h3>
            <h3 class="container_confirmation-top__msj">${msj}</h3>
        </div>
        <div class="container_confirmation-bottom">
                <h4 class="container_confirmation-bottom__text">Do you play again?</h4>
                <div class="container_confirmation-bottom__buttons">
                    <button id="btn_success" class="btn_yes">YES</button>
                    <button id="btn_noSuccess" class="btn_no">NO</button>
                </div>
        </div>
    </div>
    `

    containerPreFinal.insertAdjacentHTML('beforeend', drawPreHTML);
    div_container.appendChild(containerPreFinal); 
}

const drawpageFooter = (scoreFinal) => {

    div_container.innerHTML = '';

    const containerFinal = document.createElement('div');

    const drawFinalHTML = `
    <div class="container_pageFinal">
        <div class="container_pageFinal-top">
            <h3 class="container_pageFinal-top__text">End Game</h3>
        </div>
        <div class="container_pageFinal-medium">
            <h3 class="container_pageFinal-medium__text">Final Score: ${scoreFinal}</h3>
        </div>
        <div class="container_pageFinal-bottom">
            <h4 class="container_pageFinal-bottom__text">Developed by:</h4>
            <h4 class="container_pageFinal-bottom__name">Christofer Castillo</h4>
            <h3 class="container_pageFinal-bottom__footer">"If you can imagine it, you can program it"</h3>
        </div>
    </div>
    `
    containerFinal.insertAdjacentHTML('beforeend', drawFinalHTML);
    div_container.appendChild(containerFinal); 
   
}

const draw = datita => {

    btnload.style.display = 'none';
    div_container.innerHTML = '';

    const container = document.createElement('div');

    numberRandomText = Math.round(Math.random()*(arrayCharacterText.length-1))
    numberRandomText1 = Math.round(Math.random()*(arrayCharacterText.length-1))
    numberRandomText2 = Math.round(Math.random()*(arrayCharacterText.length-1))
    numberRandomPosition = Math.round(Math.random()*4);

    if(numberRandomPosition == 0){
        numberRandomPosition = 3;
    }
    
    changeAndEnd();

    comparationsBtns();

    if( !( ( (randomCharacterModif != arrayCharacterText[numberRandomText]) && (randomCharacterModif != arrayCharacterText[numberRandomText1]) &&  (randomCharacterModif != arrayCharacterText[numberRandomText2])) && ( (arrayCharacterText[numberRandomText1] != randomCharacterModif) && (arrayCharacterText[numberRandomText1] != arrayCharacterText[numberRandomText]) &&  (arrayCharacterText[numberRandomText1] != arrayCharacterText[numberRandomText2]) ) && ( (arrayCharacterText[numberRandomText1] != randomCharacterModif) && (arrayCharacterText[numberRandomText1] != arrayCharacterText[numberRandomText]) &&  (arrayCharacterText[numberRandomText1] != arrayCharacterText[numberRandomText2]) ) && ( (arrayCharacterText[numberRandomText2] != randomCharacterModif) && (arrayCharacterText[numberRandomText2] != arrayCharacterText[numberRandomText]) &&  (arrayCharacterText[numberRandomText2] != arrayCharacterText[numberRandomText1]) ) ) ){
        endOtherBtns();
    }else{
        // console.log('TODOS SON DIFERENTES');
    }
    
    changeNameBtn1(randomCharacterModif,2);

    datita.forEach(comic => {
        urlChange = comic.thumbnail.path.replace('http','https');
        console.log(comic.thumbnail.path);
        console.log(urlChange);
        console.log(`${urlChange}/portrait_incredible.${comic.thumbnail.extension}`);
        const comicHTML = `
        <div class="grid-container">
            <div class="grid-item">
                <div class="grid-item-container">
                    <h1 class="grid-item-container_title"> API MARVEL </h1>
                </div>
            </div>
            <div class="grid-item">
                <img class="img_person" src="${urlChange}/portrait_incredible.${comic.thumbnail.extension}" alt="${comic.name}">
            </div>
            `
        const comicHTMLPart = HtmlPart(numberRandomPosition);

        container.insertAdjacentHTML('beforeend', comicHTML + comicHTMLPart) 
    });

    div_container.appendChild(container);

    const btnDone = document.getElementById('btnDone');
    const btnFail1 = document.getElementById('btnFail1');
    const btnFail2 = document.getElementById('btnFail2');
    const btnFail3 = document.getElementById('btnFail3');

    btnDone.addEventListener('click', () => {
        if(comp){
            comp = false;
            score += 1;
            btnDone.style.background = 'rgb(27, 107, 47)';
            if(arrayCharacter.length == 0 ){
                setTimeout( () => {
                    drawFinalComparation();
                }, 1000);
            }else{
                setTimeout( () => {
                    btnStart();
                    comp = true;
                },1000);
            }
        }
    });

    btnFail1.addEventListener('click', () => {
        if(comp){
            comp = false;
            score += 0;
            btnDone.style.background = 'rgb(27, 107, 47)';
            btnFail1.style.background = 'rgb(153, 30, 30)';
            if(arrayCharacter.length == 0 ){
                setTimeout( () => {
                    drawFinalComparation();
                }, 1000);
            }else{
                setTimeout( () => {
                    btnStart();
                    comp = true;
                },1000);
            }
        }
    });

    btnFail2.addEventListener('click', () => {
        if(comp){
            comp = false;
            score += 0;
            btnDone.style.background = 'rgb(27, 107, 47)';
            btnFail2.style.background = 'rgb(153, 30, 30)';
            if(arrayCharacter.length == 0 ){
                setTimeout( () => {
                    drawFinalComparation();
                }, 1000);
            }else{
                setTimeout( () => {
                    btnStart();
                    comp = true;
                },1000);
            }
        }
    });

    btnFail3.addEventListener('click', () => {
        if(comp){
            comp = false;
            score += 0;
            btnDone.style.background = 'rgb(27, 107, 47)';
            btnFail3.style.background = 'rgb(153, 30, 30)';
            if(arrayCharacter.length == 0 ){
                setTimeout( () => {
                    drawFinalComparation();
                }, 1000);
            }else{
                setTimeout( () => {
                    btnStart();
                    comp = true;
                },1000);
            }
        }
    });
}

