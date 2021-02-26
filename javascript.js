let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
let buttonCoco = document.querySelector('.buttonCoco');
let wholeGame = document.querySelector('.wholeGame');
let lose30 = document.querySelector('.lose30');
let winningPlayer1 = document.querySelector('.winningPlayer1');
let winningPlayer1Overlay = document.querySelector('.winningPlayer1Overlay');
let h1Won = document.querySelector('.h1HasWon');
let winnerImg = document.querySelector('.winnerImg');
let playAgain = document.querySelector('.playAgain');
let playerBegins1 = document.querySelector('.playerBegins');
let playerBegins2 = document.querySelector('.playerBegins2');
let math = Math.round(Math.random() * 7) + 1;
let math2 = Math.round(Math.random() * 7) + 1;
let roll = document.querySelector('.roll');
let hold = document.querySelector('.hold');
let h2Player1 = document.querySelector('.h2Player1');
let h2Player2 = document.querySelector('.h2Player2');
let h1Player1 = document.querySelector('.h1Player1');
let h1Player2 = document.querySelector('.h1Player2');
let dices = document.querySelector('.dices');
let diceBodyTrap1 = document.querySelector('.diceBodyTrap1');
let diceBodyTrap2 = document.querySelector('.diceBodyTrap2');
let diceBody1 = document.querySelector('.diceBody1');
let diceBody2 = document.querySelector('.diceBody2');
let diceBody3 = document.querySelector('.diceBody3');
let diceBody4 = document.querySelector('.diceBody4');
let diceBody5 = document.querySelector('.diceBody5');
let diceBody6 = document.querySelector('.diceBody6');
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let newGame = document.querySelector('.newGame');
let currentScore1 = document.querySelector('.currentScore1');
let currentScore2 = document.querySelector('.currentScore2');
let begin = document.querySelector('.begin');
let gwent = new Audio('cloakanddagger.mp3');
let winSound = new Audio('winsound.mp3');
let hoverImage = new Audio('hoverImage.wav');
let selectClick = new Audio('selectClick.wav');
let netflixSong = new Audio('shorterNetflix.mp3');
let diceArray = [diceBody1, diceBody2, diceBody3, diceBody4, diceBody5, diceBody6, diceBodyTrap1, diceBodyTrap2];
let scoreArray = [];
let scoreArrayTotal;
let scorePlayer1 = [];
let scorePlayer2 = [];
let imagesArrayTotal = [];
let wolf1 = document.querySelector('.wolf1');
let wolf2 = document.querySelector('.wolf2');
let wolfBlood = document.querySelector('.wild');
let igni = new Audio('igni.wav');
let geraltImg = document.querySelector('.geraltStart');
let dandelionImg = document.querySelector('.dandelionStart');
let vesemirImg = document.querySelector('.vesemirStart');
let yennImg = document.querySelector('.yennStart');
let trissImg = document.querySelector('.trissStart ');
let ciriImg = document.querySelector('.ciriStart');
let imagesArray = [geraltImg, yennImg, trissImg, ciriImg, dandelionImg/*,vesemirImg*/];
let chooseCharacterH1 = document.querySelector('.chooseCharacterH1');
let player1Image = document.querySelector('.player1Image');
let player2Image = document.querySelector('.player2Image');
let playbtn = document.querySelector('.playbtn');
let player1ImgHome = document.querySelector('.player1ImgHome');
let player2ImgHome = document.querySelector('.player2ImgHome');
let player1ImgHomeAttr = player1ImgHome.getAttribute('src');
let player2ImgHomeAttr = player1ImgHome.getAttribute('src');
let player2Home = document.querySelector('.player2Home');
let player1Home = document.querySelector('.player1Home');
let firstPage = document.querySelector('.firstPage');

roll.addEventListener('mousedown', function(e) {
        e.preventDefault();
        lose30.classList.remove('lose30Points');
        wolfBlood.classList.remove('wolfAnimation');
        playerBegins2.classList.remove('whoBegins');
        playerBegins1.classList.remove('whoBegins');
        math = Math.round(Math.random() * 7) + 1;
        if(math === 1) {
            scoreArray.push(math);
            diceBody1.classList.add('hidden');
            diceBody2.classList.remove('hidden');
            diceBody3.classList.remove('hidden');
            diceBody4.classList.remove('hidden');
            diceBody5.classList.remove('hidden');
            diceBody6.classList.remove('hidden');
            diceBodyTrap1.classList.remove('hidden');
            diceBodyTrap2.classList.remove('hidden');
            if(player1.classList.contains('player1Javascript')) {
                currentScore1.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
            } else if(player2.classList.contains('player2Javascript')) {
                currentScore2.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
          }  
        } else if(math === 2) {
            scoreArray.push(math);
            diceBody1.classList.remove('hidden');
            diceBody2.classList.add('hidden');
            diceBody3.classList.remove('hidden');
            diceBody4.classList.remove('hidden');
            diceBody5.classList.remove('hidden');
            diceBody6.classList.remove('hidden');
            diceBodyTrap1.classList.remove('hidden');
            diceBodyTrap2.classList.remove('hidden');
          if(player1.classList.contains('player1Javascript')) {
              currentScore1.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
          } else if(player2.classList.contains('player2Javascript')) {
              currentScore2.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
        }  
        } else if(math === 3) {
            scoreArray.push(math);
            diceBody1.classList.remove('hidden');
            diceBody2.classList.remove('hidden');
            diceBody3.classList.add('hidden');
            diceBody4.classList.remove('hidden');
            diceBody5.classList.remove('hidden');
            diceBody6.classList.remove('hidden');
            diceBodyTrap1.classList.remove('hidden');
            diceBodyTrap2.classList.remove('hidden');
            if(player1.classList.contains('player1Javascript')) {
                currentScore1.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
            } else if(player2.classList.contains('player2Javascript')) {
                currentScore2.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
          }  
        } else if(math === 4) {
            scoreArray.push(math);
            diceBody1.classList.remove('hidden');
            diceBody2.classList.remove('hidden');
            diceBody3.classList.remove('hidden');
            diceBody4.classList.add('hidden');
            diceBody5.classList.remove('hidden');
            diceBody6.classList.remove('hidden');
            diceBodyTrap1.classList.remove('hidden');
            diceBodyTrap2.classList.remove('hidden');
            if(player1.classList.contains('player1Javascript')) {
                currentScore1.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
            } else if(player2.classList.contains('player2Javascript')) {
                currentScore2.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
          }  
        } else if(math === 5) {
            scoreArray.push(math);
            diceBody1.classList.remove('hidden');
            diceBody2.classList.remove('hidden');
            diceBody3.classList.remove('hidden');
            diceBody4.classList.remove('hidden');
            diceBody5.classList.add('hidden');
            diceBody6.classList.remove('hidden');
            diceBodyTrap1.classList.remove('hidden');
            diceBodyTrap2.classList.remove('hidden');
            if(player1.classList.contains('player1Javascript')) {
                currentScore1.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
            } else if(player2.classList.contains('player2Javascript')) {
                currentScore2.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
          }  
        } else if(math === 6) {
            scoreArray.push(math);
            diceBody1.classList.remove('hidden');
            diceBody2.classList.remove('hidden');
            diceBody3.classList.remove('hidden');
            diceBody4.classList.remove('hidden');
            diceBody5.classList.remove('hidden');
            diceBody6.classList.add('hidden');
            diceBodyTrap1.classList.remove('hidden');
            diceBodyTrap2.classList.remove('hidden');
            if(player1.classList.contains('player1Javascript')) {
                currentScore1.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
            } else if(player2.classList.contains('player2Javascript')) {
                currentScore2.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
          }  
        } else if(math === 7) {
            scoreArray.push(math);
            diceBody1.classList.remove('hidden');
            diceBody2.classList.remove('hidden');
            diceBody3.classList.remove('hidden');
            diceBody4.classList.remove('hidden');
            diceBody5.classList.remove('hidden');
            diceBody6.classList.remove('hidden');
            diceBodyTrap1.classList.add('hidden');
            diceBodyTrap2.classList.remove('hidden');
            if(player1.classList.contains('player1Javascript')) {
                player1.classList.remove('player1Javascript');
                player2.classList.add('player2Javascript');
                currentScore1.textContent = 0;
             } else if(player2.classList.contains('player2Javascript')) {
               player2.classList.remove('player2Javascript');
               player1.classList.add('player1Javascript');
               currentScore2.textContent = 0;
            }
            scoreArray.splice(0, scoreArray.length);
        } else if(math === 8) {
            scoreArray.push(math);
            diceBody1.classList.remove('hidden');
            diceBody2.classList.remove('hidden');
            diceBody3.classList.remove('hidden');
            diceBody4.classList.remove('hidden');
            diceBody5.classList.remove('hidden');
            diceBody6.classList.remove('hidden');
            diceBodyTrap1.classList.remove('hidden');
            diceBodyTrap2.classList.add('hidden');
            if(player1.classList.contains('player1Javascript')) {
                player1.classList.remove('player1Javascript');
                player2.classList.add('player2Javascript');
                currentScore1.textContent = 0;
             } else if(player2.classList.contains('player2Javascript')) {
               player2.classList.remove('player2Javascript');
               player1.classList.add('player1Javascript');
               currentScore2.textContent = 0;
            }
            scoreArray.splice(0, scoreArray.length);
        }}
    )

    function rollFunctionPress(e) {
        if(e.key === 'r') {
            console.log(e.key);
            lose30.classList.remove('lose30Points');
            wolfBlood.classList.remove('wolfAnimation');
            playerBegins2.classList.remove('whoBegins');
            playerBegins1.classList.remove('whoBegins');
            math = Math.round(Math.random() * 7) + 1;
            if(math === 1) {
                scoreArray.push(math);
                diceBody1.classList.add('hidden');
                diceBody2.classList.remove('hidden');
                diceBody3.classList.remove('hidden');
                diceBody4.classList.remove('hidden');
                diceBody5.classList.remove('hidden');
                diceBody6.classList.remove('hidden');
                diceBodyTrap1.classList.remove('hidden');
                diceBodyTrap2.classList.remove('hidden');
                if(player1.classList.contains('player1Javascript')) {
                    currentScore1.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
                } else if(player2.classList.contains('player2Javascript')) {
                    currentScore2.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
              }  
            } else if(math === 2) {
                scoreArray.push(math);
                diceBody1.classList.remove('hidden');
                diceBody2.classList.add('hidden');
                diceBody3.classList.remove('hidden');
                diceBody4.classList.remove('hidden');
                diceBody5.classList.remove('hidden');
                diceBody6.classList.remove('hidden');
                diceBodyTrap1.classList.remove('hidden');
                diceBodyTrap2.classList.remove('hidden');
              if(player1.classList.contains('player1Javascript')) {
                  currentScore1.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
              } else if(player2.classList.contains('player2Javascript')) {
                  currentScore2.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
            }  
            } else if(math === 3) {
                scoreArray.push(math);
                diceBody1.classList.remove('hidden');
                diceBody2.classList.remove('hidden');
                diceBody3.classList.add('hidden');
                diceBody4.classList.remove('hidden');
                diceBody5.classList.remove('hidden');
                diceBody6.classList.remove('hidden');
                diceBodyTrap1.classList.remove('hidden');
                diceBodyTrap2.classList.remove('hidden');
                if(player1.classList.contains('player1Javascript')) {
                    currentScore1.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
                } else if(player2.classList.contains('player2Javascript')) {
                    currentScore2.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
              }  
            } else if(math === 4) {
                scoreArray.push(math);
                diceBody1.classList.remove('hidden');
                diceBody2.classList.remove('hidden');
                diceBody3.classList.remove('hidden');
                diceBody4.classList.add('hidden');
                diceBody5.classList.remove('hidden');
                diceBody6.classList.remove('hidden');
                diceBodyTrap1.classList.remove('hidden');
                diceBodyTrap2.classList.remove('hidden');
                if(player1.classList.contains('player1Javascript')) {
                    currentScore1.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
                } else if(player2.classList.contains('player2Javascript')) {
                    currentScore2.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
              }  
            } else if(math === 5) {
                scoreArray.push(math);
                diceBody1.classList.remove('hidden');
                diceBody2.classList.remove('hidden');
                diceBody3.classList.remove('hidden');
                diceBody4.classList.remove('hidden');
                diceBody5.classList.add('hidden');
                diceBody6.classList.remove('hidden');
                diceBodyTrap1.classList.remove('hidden');
                diceBodyTrap2.classList.remove('hidden');
                if(player1.classList.contains('player1Javascript')) {
                    currentScore1.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
                } else if(player2.classList.contains('player2Javascript')) {
                    currentScore2.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
              }  
            } else if(math === 6) {
                scoreArray.push(math);
                diceBody1.classList.remove('hidden');
                diceBody2.classList.remove('hidden');
                diceBody3.classList.remove('hidden');
                diceBody4.classList.remove('hidden');
                diceBody5.classList.remove('hidden');
                diceBody6.classList.add('hidden');
                diceBodyTrap1.classList.remove('hidden');
                diceBodyTrap2.classList.remove('hidden');
                if(player1.classList.contains('player1Javascript')) {
                    currentScore1.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
                } else if(player2.classList.contains('player2Javascript')) {
                    currentScore2.textContent = scoreArrayTotal = scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
              }  
            } else if(math === 7) {
                scoreArray.push(math);
                diceBody1.classList.remove('hidden');
                diceBody2.classList.remove('hidden');
                diceBody3.classList.remove('hidden');
                diceBody4.classList.remove('hidden');
                diceBody5.classList.remove('hidden');
                diceBody6.classList.remove('hidden');
                diceBodyTrap1.classList.add('hidden');
                diceBodyTrap2.classList.remove('hidden');
                if(player1.classList.contains('player1Javascript')) {
                    player1.classList.remove('player1Javascript');
                    player2.classList.add('player2Javascript');
                    currentScore1.textContent = 0;
                 } else if(player2.classList.contains('player2Javascript')) {
                   player2.classList.remove('player2Javascript');
                   player1.classList.add('player1Javascript');
                   currentScore2.textContent = 0;
                }
                scoreArray.splice(0, scoreArray.length);
            } else if(math === 8) {
                scoreArray.push(math);
                diceBody1.classList.remove('hidden');
                diceBody2.classList.remove('hidden');
                diceBody3.classList.remove('hidden');
                diceBody4.classList.remove('hidden');
                diceBody5.classList.remove('hidden');
                diceBody6.classList.remove('hidden');
                diceBodyTrap1.classList.remove('hidden');
                diceBodyTrap2.classList.add('hidden');
                if(player1.classList.contains('player1Javascript')) {
                    player1.classList.remove('player1Javascript');
                    player2.classList.add('player2Javascript');
                    currentScore1.textContent = 0;
                 } else if(player2.classList.contains('player2Javascript')) {
                   player2.classList.remove('player2Javascript');
                   player1.classList.add('player1Javascript');
                   currentScore2.textContent = 0;
                }
                scoreArray.splice(0, scoreArray.length);
            }
        }
    }



function holdFunctionPress(e) {
    if(e.key === 'k') {
        e.preventDefault();
        for(let i = 0; i < diceArray.length; i++) {
            diceArray[i].classList.remove('hidden');
        }
        h2Player1.classList.remove('burn');
        h2Player2.classList.remove('burn');
        lose30.classList.remove('lose30Points');
        wolfBlood.classList.remove('wolfAnimation');
        if(currentScore1.textContent === '0' && player1.classList.contains('player1Javascript')) {
            player2.classList.add('player2Javascript');
            player1.classList.remove('player1Javascript');
            
        } else if(currentScore2.textContent === '0' && player2.classList.contains('player2Javascript')) {
            player1.classList.add('player1Javascript');
            player2.classList.remove('player2Javascript');
        } 
        else if(player1.classList.contains('player1Javascript')) {
           scorePlayer1.push(scoreArrayTotal);
           h2Player1.textContent = scorePlayer1.reduce((accumulator, currentValue) => accumulator + currentValue);
           currentScore2.textContent = 0;
           currentScore1.textContent = 0;
           scoreArray.splice(0, scoreArray.length);
           player2.classList.add('player2Javascript');
           player1.classList.remove('player1Javascript');
        } else if(player2.classList.contains('player2Javascript')) {
            scorePlayer2.push(scoreArrayTotal);
            h2Player2.textContent = scorePlayer2.reduce((accumulator, currentValue) => accumulator + currentValue);
            currentScore2.textContent = 0;
            currentScore1.textContent = 0;
            scoreArray.splice(0, scoreArray.length);
            player1.classList.add('player1Javascript');
            player2.classList.remove('player2Javascript');
        } 
        if(Number(h2Player1.textContent) >= 100) {
            document.removeEventListener('keyup', wolf1Press);
            document.removeEventListener('keyup', wolf2Press);
            document.removeEventListener('keyup', rollFunctionPress);
            document.removeEventListener('keyup', holdFunctionPress); 
            wolf1.classList.add('fab2');
            wolf2.classList.add('fab2');
            winningPlayer1.classList.add('hiddenWinning');
            winningPlayer1Overlay.classList.add('hiddenWinning');
            h1Won.textContent = `${h1Player1.textContent} has won!`;
            winnerImg.setAttribute('src', `${h1Player1.textContent}.png`);
            gwent.pause();
            winSound.play();
        } else if(Number(h2Player2.textContent) >= 100) {
            document.removeEventListener('keyup', wolf1Press);
            document.removeEventListener('keyup', wolf2Press);
            document.removeEventListener('keyup', rollFunctionPress);
            document.removeEventListener('keyup', holdFunctionPress); 
            wolf1.classList.add('fab2');
            wolf2.classList.add('fab2');
            winningPlayer1.classList.add('hiddenWinning');
            winningPlayer1Overlay.classList.add('hiddenWinning');
            h1Won.textContent = `${h1Player2.textContent} has won!`;
            winnerImg.setAttribute('src', `${h1Player2.textContent}.png`);
            gwent.pause();
            winSound.play();
            winSound.volume = .3;
        }
    }
}


function playAgainListener() {
    lose30.textContent = '';
    wholeGame.classList.remove('wholeGameVisibility');
    winSound.pause();
    winSound.currentTime = 0;
    playbtn.classList.add('playbtnNotReady');
    playbtn.classList.remove('playbtnAppearance');
    playbtn.removeEventListener('click',newGameButtonFirst);
    firstPage.classList.remove('hiddenFirstPage');
    winningPlayer1.classList.remove('hiddenWinning');
    winningPlayer1Overlay.classList.remove('hiddenWinning');
    chooseCharacterH1.textContent = 'Player 1 : Choose your character!';
    chooseCharacterH1.classList.remove('pressToStart');
    for( let i = 0; i < imagesArray.length; i++) {
        imagesArray[i].classList.remove('imgAppearance');
    }
    player1ImgHome.setAttribute('src','claw.png');
    player2ImgHome.setAttribute('src','claw.png');
    imagesArrayTotal.splice(0,2);
    player1.classList.remove('player1Javascript');
    player2.classList.remove('player2Javascript');
    playerBegins1.classList.remove('whoBegins');
    playerBegins2.classList.remove('whoBegins');
} 

playAgain.addEventListener('click', playAgainListener)

function newGameButtonFirst() {
    document.addEventListener('keyup', rollFunctionPress);
    document.addEventListener('keyup', holdFunctionPress); 
    document.addEventListener('keyup',wolf1Press);
    document.addEventListener('keyup',wolf2Press);
    wholeGame.classList.add('wholeGameVisibility');
    playbtn.classList.remove('btn-active');
    firstPage.classList.add('hiddenFirstPage');
    playerBegins1.classList.remove('whoBegins');
    playerBegins1.textContent = '';
    playerBegins2.classList.remove('whoBegins');
    playerBegins2.textContent = '';
    h2Player2.classList.remove('burn');
    h2Player1.classList.remove('burn');
    wolfBlood.classList.remove('wolfAnimation');
    gwent.currentTime = 0;
    gwent.play();
    gwent.volume = .2;
    wolf2.classList.remove('fab2');
    wolf1.classList.remove('fab2');
    scoreArray.splice(0, scoreArray.length);
    scorePlayer1.splice(0, scorePlayer1.length);
    scorePlayer2.splice(0, scorePlayer2.length);
    let math = Math.round(Math.random() * 5) + 1;
    let math2 = Math.round(Math.random() * 5) + 1;
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;
    h2Player1.textContent = 0;
    h2Player2.textContent = 0;
    for(let i = 0; i < diceArray.length; i++) {
        diceArray[i].classList.remove('hidden');
    }
    if(math > math2) {
        player1.classList.add('player1Javascript');
        player2.classList.remove('player2Javascript');
    } else if(math2 >= math){
        player2.classList.add('player2Javascript');
        player1.classList.remove('player1Javascript');
    }
    if(player1.classList.contains('player1Javascript')) {
       playerBegins1.classList.add('whoBegins');
       playerBegins1.textContent = `${h1Player1.textContent} will begin.`;
    } else if(player2.classList.contains('player2Javascript')) {
       playerBegins2.classList.add('whoBegins');
       playerBegins2.textContent = `${h1Player2.textContent} will begin.`;
    }
}



function newGameButtonSecond() {
     for(let i = 0; i < diceArray.length; i++) {
        diceArray[i].classList.remove('hidden');
       }
    lose30.classList.remove('lose30Points');
    lose30.textContent = '';
    wholeGame.classList.remove('wholeGameVisibility');
    playbtn.classList.add('playbtnNotReady');
    playbtn.classList.remove('playbtnAppearance');
    playerBegins1.classList.remove('whoBegins');
    playerBegins2.classList.remove('whoBegins');
    playbtn.removeEventListener('click',newGameButtonFirst);
    firstPage.classList.remove('hiddenFirstPage');
    winningPlayer1.classList.remove('hiddenWinning');
    winningPlayer1Overlay.classList.remove('hiddenWinning');
    gwent.pause();
    chooseCharacterH1.textContent = 'Player 1 : Choose your character!';
    chooseCharacterH1.classList.remove('pressToStart');
    for( let i = 0; i < imagesArray.length; i++) {
        imagesArray[i].classList.remove('imgAppearance');
    }
    player1ImgHome.setAttribute('src','claw.png');
    player2ImgHome.setAttribute('src','claw.png');
    imagesArrayTotal.splice(0,2);
    player1.classList.remove('player1Javascript');
    player2.classList.remove('player2Javascript')
}




newGame.addEventListener('click', newGameButtonSecond);

hold.addEventListener('mousedown', function(e) {
    e.preventDefault();
    for(let i = 0; i < diceArray.length; i++) {
        diceArray[i].classList.remove('hidden');
    }
    h2Player1.classList.remove('burn');
    h2Player2.classList.remove('burn');
    lose30.classList.remove('lose30Points');
    wolfBlood.classList.remove('wolfAnimation');
    if(currentScore1.textContent === '0' && player1.classList.contains('player1Javascript')) {
        player2.classList.add('player2Javascript');
        player1.classList.remove('player1Javascript');
        
    } else if(currentScore2.textContent === '0' && player2.classList.contains('player2Javascript')) {
        player1.classList.add('player1Javascript');
        player2.classList.remove('player2Javascript');
    } 
    else if(player1.classList.contains('player1Javascript')) {
       scorePlayer1.push(scoreArrayTotal);
       h2Player1.textContent = scorePlayer1.reduce((accumulator, currentValue) => accumulator + currentValue);
       currentScore2.textContent = 0;
       currentScore1.textContent = 0;
       scoreArray.splice(0, scoreArray.length);
       player2.classList.add('player2Javascript');
       player1.classList.remove('player1Javascript');
    } else if(player2.classList.contains('player2Javascript')) {
        scorePlayer2.push(scoreArrayTotal);
        h2Player2.textContent = scorePlayer2.reduce((accumulator, currentValue) => accumulator + currentValue);
        currentScore2.textContent = 0;
        currentScore1.textContent = 0;
        scoreArray.splice(0, scoreArray.length);
        player1.classList.add('player1Javascript');
        player2.classList.remove('player2Javascript');
    } 
    if(Number(h2Player1.textContent) >= 100) {
        document.removeEventListener('keyup', wolf1Press);
        document.removeEventListener('keyup', wolf2Press);
        document.removeEventListener('keyup', rollFunctionPress);
        document.removeEventListener('keyup', holdFunctionPress); 
        wolf1.classList.add('fab2');
        wolf2.classList.add('fab2');
        winningPlayer1.classList.add('hiddenWinning');
        winningPlayer1Overlay.classList.add('hiddenWinning');
        h1Won.textContent = `${h1Player1.textContent} has won!`;
        winnerImg.setAttribute('src', `${h1Player1.textContent}.png`);
        gwent.pause();
        winSound.play();
    } else if(Number(h2Player2.textContent) >= 100) {
        document.removeEventListener('keyup', wolf1Press);
        document.removeEventListener('keyup', wolf2Press);
        document.removeEventListener('keyup', rollFunctionPress);
        document.removeEventListener('keyup', holdFunctionPress); 
        wolf1.classList.add('fab2');
        wolf2.classList.add('fab2');
        winningPlayer1.classList.add('hiddenWinning');
        winningPlayer1Overlay.classList.add('hiddenWinning');
        h1Won.textContent = `${h1Player2.textContent} has won!`;
        winnerImg.setAttribute('src', `${h1Player2.textContent}.png`);
        gwent.pause();
        winSound.play();
        winSound.volume = .3;
    }
})
 
    function wolf1Press(e) {
     if(player1.classList.contains('player1Javascript')) {
        if(e.key === 'p') {
            for(let i = 0; i < diceArray.length; i++) {
                diceArray[i].classList.remove('hidden');
            }
            igni.play();
            scorePlayer2.push(-30);
            h2Player2.textContent = scorePlayer2.reduce((accumulator, currentValue) => accumulator + currentValue);
            wolf1.classList.add('fab2');
            wolfBlood.classList.add('wolfAnimation');
            h2Player2.classList.add('burn');
            playerBegins2.classList.remove('whoBegins');
            playerBegins1.classList.remove('whoBegins');
            lose30.textContent = `${h1Player2.textContent} lost 30 points`;
            lose30.classList.add('lose30Points');
            document.removeEventListener('keyup',wolf1Press);
        }
       }
     }

     function wolf2Press(e) {
        if(player2.classList.contains('player2Javascript')) {
           if(e.key === 'p') {
            for(let i = 0; i < diceArray.length; i++) {
                diceArray[i].classList.remove('hidden');
            }
            igni.play();
            scorePlayer1.push(-30);
            h2Player1.textContent = scorePlayer1.reduce((accumulator, currentValue) => accumulator + currentValue);
            wolf2.classList.add('fab2');
            wolfBlood.classList.add('wolfAnimation');
            h2Player1.classList.add('burn');
            playerBegins2.classList.remove('whoBegins');
            playerBegins1.classList.remove('whoBegins');
            lose30.textContent = `${h1Player1.textContent} lost 30 points`;
            lose30.classList.add('lose30Points');
            document.removeEventListener('keyup',wolf2Press);
           }
          }
        }
    
    document.addEventListener('keyup',wolf1Press);
    document.addEventListener('keyup',wolf2Press);

    wolf1.addEventListener('click', function() {
        document.removeEventListener('keyup',wolf1Press);
        for(let i = 0; i < diceArray.length; i++) {
            diceArray[i].classList.remove('hidden');
        }
        igni.play();
        scorePlayer2.push(-30);
        h2Player2.textContent = scorePlayer2.reduce((accumulator, currentValue) => accumulator + currentValue);
        wolf1.classList.add('fab2');
        wolfBlood.classList.add('wolfAnimation');
        h2Player2.classList.add('burn');
        playerBegins2.classList.remove('whoBegins');
        playerBegins1.classList.remove('whoBegins');
        lose30.textContent = `${h1Player2.textContent} lost 30 points`;
        lose30.classList.add('lose30Points');
    })

    wolf2.addEventListener('click', function() {
        document.removeEventListener('keyup',wolf2Press);
        for(let i = 0; i < diceArray.length; i++) {
            diceArray[i].classList.remove('hidden');
        }
        igni.play();
        scorePlayer1.push(-30);
        h2Player1.textContent = scorePlayer1.reduce((accumulator, currentValue) => accumulator + currentValue);
        wolf2.classList.add('fab2');
        wolfBlood.classList.add('wolfAnimation');
        h2Player1.classList.add('burn');
        playerBegins2.classList.remove('whoBegins');
        playerBegins1.classList.remove('whoBegins');
        lose30.textContent = `${h1Player1.textContent} lost 30 points`;
        lose30.classList.add('lose30Points');
    })


    
    /*function hovering () {
        hoverImage.play();
        hoverImage.volume = 0.3;
     }
     imagesArray[0].addEventListener('mouseover', hovering)*/

    for( let p = 0; p < imagesArray.length; p++) {
         
         playbtn.classList.add('playbtnNotReady');
         playbtn.classList.remove('playbtnAppearance');
        imagesArray[p].addEventListener('click', function() {
            console.log(player1ImgHomeAttr);
        if(imagesArrayTotal.length === 0 || imagesArrayTotal.length === 1 ) {
            selectClick.play();
            selectClick.volume = .1;
        }     
        if (imagesArrayTotal.length < 2) {
            imagesArray[p].classList.add('imgAppearance');
        } 
        if(chooseCharacterH1.textContent === 'Player 1 : Choose your character!') {
            chooseCharacterH1.textContent = 'Player 2 : Choose your character!';
        } 
    
        if(imagesArray[p].classList.contains('imgAppearance') && imagesArray.indexOf(imagesArray[p]) === 0 && imagesArrayTotal.length === 0) {
            player1Image.setAttribute('src','Geralt.png');
            h1Player1.textContent = 'Geralt';
            imagesArrayTotal.push(imagesArray[p]);
            player1ImgHome.setAttribute('src','Geralt.png');

        } else if (imagesArray[p].classList.contains('imgAppearance') && imagesArray.indexOf(imagesArray[p]) === 0 && imagesArrayTotal.length === 1) {
            player2Image.setAttribute('src','Geralt.png');
            h1Player2.textContent = 'Geralt';
            player2ImgHome.setAttribute('src','Geralt.png');
            imagesArrayTotal.push(imagesArray[p]);
        } else if(imagesArray[p].classList.contains('imgAppearance') && imagesArray.indexOf(imagesArray[p]) === 1 && imagesArrayTotal.length === 0) {
            player1Image.setAttribute('src','Yennefer.png');
            h1Player1.textContent = 'Yennefer';
            imagesArrayTotal.push(imagesArray[p]);
            player1ImgHome.setAttribute('src','Yennefer.png');
        } else if (imagesArray[p].classList.contains('imgAppearance') && imagesArray.indexOf(imagesArray[p]) === 1 && imagesArrayTotal.length === 1) {
            player2Image.setAttribute('src','Yennefer.png');
            h1Player2.textContent = 'Yennefer';
            player2ImgHome.setAttribute('src','Yennefer.png');
            imagesArrayTotal.push(imagesArray[p]);
        }  else if(imagesArray[p].classList.contains('imgAppearance') && imagesArray.indexOf(imagesArray[p]) === 2 && imagesArrayTotal.length === 0) {
            player1Image.setAttribute('src','Triss.png');
            h1Player1.textContent = 'Triss';
            imagesArrayTotal.push(imagesArray[p]);
            player1ImgHome.setAttribute('src','Triss.png');
        } else if (imagesArray[p].classList.contains('imgAppearance') && imagesArray.indexOf(imagesArray[p]) === 2 && imagesArrayTotal.length === 1) {
            player2Image.setAttribute('src','Triss.png');
            h1Player2.textContent = 'Triss';
            player2ImgHome.setAttribute('src','Triss.png');
            imagesArrayTotal.push(imagesArray[p]);
        } else if(imagesArray[p].classList.contains('imgAppearance') && imagesArray.indexOf(imagesArray[p]) === 3 && imagesArrayTotal.length === 0) {
            player1Image.setAttribute('src','Ciri.png');
            h1Player1.textContent = 'Ciri';
            imagesArrayTotal.push(imagesArray[p]);
            player1ImgHome.setAttribute('src','Ciri.png');
        } else if (imagesArray[p].classList.contains('imgAppearance') && imagesArray.indexOf(imagesArray[p]) === 3 && imagesArrayTotal.length === 1) {
            player2Image.setAttribute('src','Ciri.png');
            h1Player2.textContent = 'Ciri';
            player2ImgHome.setAttribute('src','Ciri.png');
            imagesArrayTotal.push(imagesArray[p]);
            numberLucky = 1;
        } else if(imagesArray[p].classList.contains('imgAppearance') && imagesArray.indexOf(imagesArray[p]) === 4 && imagesArrayTotal.length === 0) {
            player1Image.setAttribute('src','Dandelion.png');
            h1Player1.textContent = 'Dandelion';
            imagesArrayTotal.push(imagesArray[p]);
            player1ImgHome.setAttribute('src','Dandelion.png');
        } else if (imagesArray[p].classList.contains('imgAppearance') && imagesArray.indexOf(imagesArray[p]) === 4 && imagesArrayTotal.length === 1) {
            player2Image.setAttribute('src','Dandelion.png');
            h1Player2.textContent = 'Dandelion';
            player2ImgHome.setAttribute('src','Dandelion.png');
            imagesArrayTotal.push(imagesArray[p]);
        } /*else if(imagesArray[p].classList.contains('imgAppearance') && imagesArray.indexOf(imagesArray[p]) === 5 && imagesArrayTotal.length === 0) {
            player1Image.setAttribute('src','Vesemir.png');
            h1Player1.textContent = 'Vesemir';
            imagesArrayTotal.push(imagesArray[p]);
            player1ImgHome.setAttribute('src','Vesemir.png');
        } else if (imagesArray[p].classList.contains('imgAppearance') && imagesArray.indexOf(imagesArray[p]) === 5 && imagesArrayTotal.length === 1) {
            player2Image.setAttribute('src','Vesemir.png');
            h1Player2.textContent = 'Vesemir';
            player2ImgHome.setAttribute('src','Vesemir.png');
            imagesArrayTotal.push(imagesArray[p]);
        } */
        if(imagesArrayTotal.length === 2) {
            chooseCharacterH1.textContent = 'Press Play to start';
            chooseCharacterH1.classList.add('pressToStart');
        }
        if(imagesArray[p].classList.contains('imgAppearance') && imagesArrayTotal.length === 2) {
            playbtn.addEventListener('click',newGameButtonFirst);
            playbtn.classList.remove('playbtnNotReady');
            playbtn.classList.add('playbtnAppearance')
            playbtn.classList.add('btn-active');
        }        
})
    }
     
    
       

        
    
    
    
        

  

    
        
    
    
 

    
