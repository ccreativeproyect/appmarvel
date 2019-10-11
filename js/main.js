if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

const   btnStarted = document.getElementById('btnGetStart'),
        mainContainerImg = document.getElementById('container_img-background'),
        circleLoader = document.getElementById('loading'),
        divContent = document.getElementById('myContent'),
        originalCharacterArray = ['captain%20marvel','thanos','black%20panther','spider-man','iron%20man','hulk','captain%20america','black%20widow','hawkeye','thor','aegis','ant-man'],
        fakeArr = ['captain_marvel', 'thanos', 'black_panther', 'spider-man','iron_man', 'hulk', 'captain_america', 'black_widow','hawkeye','thor','aegis','ant-man'];

let arrNameFr, indRandFr, arrModifNameFr,indRanSc, indRanTr, indRanFu,
    numRandPosition, opc, score = 0, comp = true, msj, main__effect,
    btn_success, btn_noSuccess, urlChange;
const hash = 'd8c654b1434acc7a69ba9127b61eb186';
const apiKey = '666d359706b3037e653e838e0e52e226';

circleLoader.style.display = 'none';
btnStarted.style.display = 'block';
mainContainerImg.style.display = 'block';

const Started = () => {
    btnStarted.style.display = 'none';
    mainContainerImg.style.display = 'none';
    circleLoader.style.display = 'block';
    indRandFr = Math.round(Math.random()*(originalCharacterArray.length-1))
    arrNameFr = originalCharacterArray[indRandFr];
    loadComics(arrNameFr);
}

btnStarted.addEventListener('click', e => {
    Started();
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

    if(originalCharacterArray[indRandFr] == arrNameFr){
        originalCharacterArray.splice(originalCharacterArray.indexOf(arrNameFr),1);
    }

}

const nameChangeButtons = (mainName, nameSecond, nameThrid, nameFour, cont) => {

    // BTN 1 === BTN 2
    if(mainName == nameSecond){
        if(fakeArr.indexOf(nameSecond) >= 0 && fakeArr.indexOf(nameSecond) <= 5){
            indRanSc = fakeArr.indexOf(nameSecond) + cont;
        }else{
            indRanSc = fakeArr.indexOf(nameSecond) - cont;
        }
    }

    // BTN 1 === BTN 3
    if(mainName == nameThrid){
        if(fakeArr.indexOf(nameThrid) >= 0 && fakeArr.indexOf(nameThrid) <= 5 ){
            indRanTr = fakeArr.indexOf(nameThrid) + cont;
        }else{
            indRanTr = fakeArr.indexOf(nameThrid) - cont;
        }
    }

    // BTN 1 === BTN 4
    if(mainName == nameFour){
        if(fakeArr.indexOf(nameFour) >= 0 && fakeArr.indexOf(nameFour) <= 5 ){
            indRanFu = fakeArr.indexOf(nameFour) + cont;
        }else{
            indRanFu = fakeArr.indexOf(nameFour) - cont;
        }
    }
}

const changeAndEnd = () => {

    if(originalCharacterArray.length > 0) {
        if(arrNameFr.includes('%20')){
            arrModifNameFr = arrNameFr.replace("%20","_");
        }else{
            arrModifNameFr = arrNameFr;
        }
    }

}

const drawFinalComparation = () => {

    divContent.innerHTML = '';
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

    while( (arrModifNameFr == fakeArr[indRanSc]) || (arrModifNameFr == fakeArr[indRanTr]) ||  (arrModifNameFr == fakeArr[indRanFu]) ){
        nameChangeButtons(arrModifNameFr, fakeArr[indRanSc], fakeArr[indRanTr], fakeArr[indRanFu], 1)
    }
    while( (fakeArr[indRanSc] == arrModifNameFr) || (fakeArr[indRanSc] == fakeArr[indRanTr]) ||  (fakeArr[indRanSc] == fakeArr[indRanFu]) ){
        nameChangeButtons(fakeArr[indRanSc], arrModifNameFr, fakeArr[indRanTr], fakeArr[indRanFu], 1)
    }
    while( (fakeArr[indRanTr] == arrModifNameFr) || (fakeArr[indRanTr] == fakeArr[indRanSc]) ||  (fakeArr[indRanTr] == fakeArr[indRanFu]) ){
        nameChangeButtons(fakeArr[indRanTr], fakeArr[indRanSc], arrModifNameFr, fakeArr[indRanFu], 1)
    }
    while( (fakeArr[indRanFu] == arrModifNameFr) || (fakeArr[indRanFu] == fakeArr[indRanSc]) ||  (fakeArr[indRanFu] == fakeArr[indRanTr]) ){
        nameChangeButtons(fakeArr[indRanFu], fakeArr[indRanSc], fakeArr[indRanTr], arrModifNameFr, 1)
    }
}


const endOtherBtns = () => {
    //btn2
    if( (fakeArr[indRanSc] == fakeArr[indRanTr]) ||  (fakeArr[indRanSc] == fakeArr[indRanFu])  ){
        indRanSc = fakeArr.indexOf(fakeArr[indRanSc]) + 2;
        comparationsBtns();
    }

    //btn3
    if( (fakeArr[indRanTr] == fakeArr[indRanSc]) || (fakeArr[indRanTr] == fakeArr[indRanFu]) ){
        indRanTr = fakeArr.indexOf(fakeArr[indRanSc]) - 2;
        comparationsBtns();
    }
    
    //btn4
    if( (fakeArr[indRanFu] == fakeArr[indRanSc]) || (fakeArr[indRanFu] == fakeArr[indRanTr]) ){
        indRanFu = fakeArr.indexOf(fakeArr[indRanSc]) - 1;
        comparationsBtns();
    }

}

const htmlStructButtons = ( btnIdDone, doneText, btnIdFirstFail, firstText, btnIdSecondFail, secondText, btnIdThridFail, thirdText ) => {

    return (`
            <div class="grid-item">
                <a id="${btnIdDone}" class="grid-item-btn_subtitle">${doneText}</a>
            </div>
            <div class="grid-item">
                <a id="${btnIdFirstFail}" class="grid-item-btn_subtitle">${firstText}</a>
            </div>
            <div class="grid-item">
                <a id="${btnIdSecondFail}" class="grid-item-btn_subtitle">${secondText}</a>
            </div>
            <div class="grid-item">
                <a id="${btnIdThridFail}" class="grid-item-btn_subtitle">${thirdText}</a>
            </div>
            <div class="grid-item">
                <div class="grid-item-textImg">
                    <h4 class="restanteText">Remaining images: ${originalCharacterArray.length}</a>
                </div>
            </div>
        </div>
        `);

}

const HtmlPart = (opc) => {

    switch (opc) {
        case 1:
            return htmlStructButtons('btnDone', arrModifNameFr, 'btnFail1', fakeArr[indRanSc], 'btnFail2', fakeArr[indRanTr], 'btnFail3', fakeArr[indRanFu]);
        case 2:
            return htmlStructButtons('btnFail1', fakeArr[indRanFu], 'btnDone', arrModifNameFr, 'btnFail2', fakeArr[indRanSc], 'btnFail3', fakeArr[indRanTr]);
        case 3:
            return htmlStructButtons('btnFail1', fakeArr[indRanTr], 'btnFail2', fakeArr[indRanSc], 'btnDone', arrModifNameFr, 'btnFail3', fakeArr[indRanFu]);
        case 4:
            return htmlStructButtons('btnFail1', fakeArr[indRanSc], 'btnFail2', fakeArr[indRanFu], 'btnFail3', fakeArr[indRanTr], 'btnDone', arrModifNameFr);
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
            <h3 class="container_confirmation-top__text">Final Score: ${scoreFinal} of ${fakeArr.length}</h3>
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
    divContent.appendChild(containerPreFinal); 
}

const drawpageFooter = (scoreFinal) => {

    divContent.innerHTML = '';
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
    divContent.appendChild(containerFinal); 
   
}

const draw = datita => {

    circleLoader.style.display = 'none';
    divContent.innerHTML = '';
    const container = document.createElement('div');

    indRanSc = Math.round(Math.random()*(fakeArr.length-1))
    indRanTr = Math.round(Math.random()*(fakeArr.length-1))
    indRanFu = Math.round(Math.random()*(fakeArr.length-1))
    numRandPosition = Math.round(Math.random()*4);

    if(numRandPosition == 0){
        numRandPosition = 3;
    }
    
    changeAndEnd();

    comparationsBtns();

    if( !( ( (arrModifNameFr != fakeArr[indRanSc]) && (arrModifNameFr != fakeArr[indRanTr]) &&  (arrModifNameFr != fakeArr[indRanFu])) && ( (fakeArr[indRanTr] != arrModifNameFr) && (fakeArr[indRanTr] != fakeArr[indRanSc]) &&  (fakeArr[indRanTr] != fakeArr[indRanFu]) ) && ( (fakeArr[indRanTr] != arrModifNameFr) && (fakeArr[indRanTr] != fakeArr[indRanSc]) &&  (fakeArr[indRanTr] != fakeArr[indRanFu]) ) && ( (fakeArr[indRanFu] != arrModifNameFr) && (fakeArr[indRanFu] != fakeArr[indRanSc]) &&  (fakeArr[indRanFu] != fakeArr[indRanTr]) ) ) ){
        endOtherBtns();
    }else{
        // console.log('all !=');
    }
   
    nameChangeButtons(arrModifNameFr, fakeArr[indRanSc], fakeArr[indRanTr], fakeArr[indRanFu], 2)

    datita.forEach(comic => {
        urlChange = comic.thumbnail.path.replace('http','https');
        const comicHTML = `
        <div class="grid-container">
            <div class="grid-item">
                <div class="grid-item-container">
                    <h1 class="grid-item-container_title"> ¿ WHO IS ? </h1>
                </div>
            </div>
            <div class="grid-item">
                <img class="img_person" src="${urlChange}/portrait_incredible.${comic.thumbnail.extension}" alt="${comic.name}">
                <div id="main_container_effect" class="container_effect">

                </div>
            </div>
            `
        const comicHTMLPart = HtmlPart(numRandPosition);

        container.insertAdjacentHTML('beforeend', comicHTML + comicHTMLPart) 
    });

    divContent.appendChild(container);

    const   btnDone = document.getElementById('btnDone'),
            btnFail1 = document.getElementById('btnFail1'),
            btnFail2 = document.getElementById('btnFail2'),
            btnFail3 = document.getElementById('btnFail3');
            main__effect = document.getElementById('main_container_effect');

    const changeEfect = (content, nameClass) => {
        
        let h3 = document.createElement("h3");
        h3.innerHTML = `${content}`
        h3.setAttribute('class', `effect_options ${nameClass}`)
        let base = main__effect.appendChild(h3);
        return base;

    }

    const optionsButtons = (opt, valid, punt) => {
        opt.addEventListener('click', () => {
            if(comp){
                comp = false;
                score += punt;
                btnDone.style.background = 'rgb(27, 107, 47)';
                
                if(valid == 1 || valid == 2 || valid == 3){
                    changeEfect('INCORRECT', 'effect__fail')
                    opt.style.background = 'rgb(153, 30, 30)';
                }else{
                    changeEfect('CORRECT', 'effect__done')
                }
                if(originalCharacterArray.length == 0 ){
                    setTimeout( () => {
                        drawFinalComparation();
                    }, 1000);
                }else{
                    setTimeout( () => {
                        Started();
                        comp = true;
                    },1000);
                }
            }
        });
    }

    optionsButtons(btnDone, 0, 1);
    optionsButtons(btnFail1, 1, 0);
    optionsButtons(btnFail2, 2, 0);
    optionsButtons(btnFail3, 3, 0);

}

