let cards = [
    {
        name: "custom",
        damage: 0,
        health: 0,
        sigil : 0,
        img: 'Images/blank.png',
    },
];

let squirrels = [
     {
        name: 'sq1',
        damage: 0,
        health: 1,
        sigil: 0, },
    {
        name: 'sq2',
        damage: 0,
        health: 1,
        sigil: 0, },
     {
        name: 'sq3',
        damage: 0,
        health: 1,
        sigil: 0, },
     {
        name: 'sq4',
        damage: 0,
        health: 1,
        sigil: 0, },
     {
        name: 'sq5',
        damage: 0,
        health: 1,
        sigil: 0, },
];

let shop = { grizzly: 0, opossum: 0, raven: 0, riverSnapper: 0,
             theSmoke: 0, blackGoat: 0, elk: 0, sparrow: 0, 
             greaterSmoke: 0, mothman: 0, undeadCat: 0, cagedWolf: 0, geck: 0 };

let cardAmount = 0;
let current = 1;
let bouldNum = 0;
let gold = 0;
let sh1 = document.getElementById('shop1');
let sh2 = document.getElementById('shop2');
let sh3 = document.getElementById('shop3');
let sh4 = document.getElementById('shop4');
let sh5 = document.getElementById('shop5');


function startUp()
{
    gold = 1000;
    current = 1; 
    scenes(); allChecks(); shopRandom();
}

function allChecks()
{
    document.getElementById('array').innerHTML = cards;
    document.getElementById('cardcount').innerHTML = cardAmount;
    document.getElementById('goldCount').innerHTML = gold;
    document.getElementById('goldIcon').innerHTML = gold;
}

function scene6()
{
    current = 6; scenes();
    hoverInfo();
}

function hoverInfo()
{
    let pg = document.getElementById('paragraph');
    document.getElementById('coyote').addEventListener('mouseover', function() { pg.innerHTML = 'The meager Coyote, pathetic but cheap. 2/1'; });
    document.getElementById('stoat').addEventListener('mouseover', function() { pg.innerHTML = 'Stoatal misplay. 1/3'; });
    document.getElementById('cat').addEventListener('mouseover', function() { pg.innerHTML = 'The undying cat, sacrifice is behind it. 0/1 Many lives'; });
    document.getElementById('ratking').addEventListener('mouseover', function() { pg.innerHTML = 'The Rat King, gain 4 bones from their death. 2/1 Bone lord'; });
    document.getElementById('wolf').addEventListener('mouseover', function() { pg.innerHTML = 'The proud wolf, a vicious contender. 3/2'; });
    document.getElementById('adder').addEventListener('mouseover', function() { pg.innerHTML = 'The Adder. Damage is always lethal. 1/1 Touch of death'; });
    document.getElementById('cockroach').addEventListener('mouseover', function() { pg.innerHTML = 'The Cockroach. It returns after death. 1/1 Unkillable'; });
    document.getElementById('rattler').addEventListener('mouseover', function() { pg.innerHTML = 'The Rattler. A brittle one, past its monstrous fangs. 3/1'; });
    document.getElementById('squirrel').addEventListener('mouseover', function() { pg.innerHTML = 'The frail squirrel. A free sacrifice and blocker. 0/1'; });
}

function adderAdd()
{
    if(cardAmount <= 3) {
    cardAmount += 1;
    document.getElementById('adder').src = 'Images/cardback.png'; 
    let addercard = {
        name: "adder",
        damage: 1,
        health: 1,
        sigil: 2,
        img: 'Images/adder.png' };
    cards.push(addercard);
    document.getElementById('adder1').innerHTML =  'adder';
    document.getElementById('adder').removeAttribute('onclick'); allChecks(); }
}
function catAdd()
{
    if(cardAmount <= 3) {
    cardAmount += 1;
    document.getElementById('cat').src = 'Images/cardback.png'; 
    let catcard = {
        name: "cat",
        damage: 0,
        health: 1,
        sigil: 4,
        img: 'Images/cat.png' };
    cards.push(catcard);
    document.getElementById('cat1').innerHTML =  'cat';
    document.getElementById('cat').removeAttribute('onclick'); allChecks(); }
}
function wolfAdd()
{
    if(cardAmount <= 3) {
    cardAmount += 1;
    document.getElementById('wolf').src = 'Images/cardback.png'; 
    let wolfcard = {
        name: "wolf",
        damage: 3,
        health: 2,
        sigil: 0,
        img: 'Images/wolf.png' };
    cards.push(wolfcard);
    document.getElementById('wolf1').innerHTML =  'wolf';
    document.getElementById('wolf').removeAttribute('onclick'); allChecks(); }
}
function stoatAdd()
{
    if(cardAmount <= 3) {
    cardAmount += 1;
    document.getElementById('stoat').src = 'Images/cardback.png'; 
    let stoatcard = {
        name: "stoat",
        damage: 1,
        health: 3,
        sigil: 0,
        img: 'Images/stoat.png' };
    cards.push(stoatcard);
    document.getElementById('stoat1').innerHTML =  'stoat';
    document.getElementById('stoat').removeAttribute('onclick'); allChecks(); }
}
function ravenAdd()
{
    if(cardAmount <= 3) {
    cardAmount += 1;
    document.getElementById('raven').src = 'Images/cardback.png'; 
    let ravencard = {
        name: "raven",
        damage: 2,
        health: 3,
        sigil: 5,
        img: 'Images/raven.png' };
    cards.push(ravencard);
    document.getElementById('raven1').innerHTML =  'raven';
    document.getElementById('raven').removeAttribute('onclick'); allChecks(); }
}
function ratkingAdd()
{
    if(cardAmount <= 3) {
    cardAmount += 1;
    document.getElementById('ratking').src = 'Images/cardback.png'; 
    let ratkingcard = {
        name: "ratking",
        damage: 2,
        health: 1,
        sigil: 1,
        img: 'Images/rat-king.png' };
    cards.push(ratkingcard);
    document.getElementById('ratking1').innerHTML =  'rat king';
    document.getElementById('ratking').removeAttribute('onclick'); allChecks(); }
}
function rattlerAdd()
{
    if(cardAmount <= 3) {
    cardAmount += 1;
    document.getElementById('rattler').src = 'Images/cardback.png'; 
    let rattlercard = {
        name: "rattler",
        damage: 3,
        health: 1,
        sigil: 0,
        img: 'Images/rattler.png' };
    cards.push(rattlercard);
    document.getElementById('rattler1').innerHTML =  'rattler';
    document.getElementById('rattler').removeAttribute('onclick'); allChecks(); }
}
function cockAdd()
{
    if(cardAmount <= 3) {
    cardAmount += 1;
    document.getElementById('cockroach').src = 'Images/cardback.png'; 
    let cockroachcard = {
        name: "cockroach",
        damage: 1,
        health: 1,
        sigil: 6,
        img: 'Images/cockroach.png' };
    cards.push(cockroachcard);
    document.getElementById('cockroach1').innerHTML =  'cockroach';
    document.getElementById('cockroach').removeAttribute('onclick'); allChecks(); }
}
function coyoteAdd()
{
    if(cardAmount <= 3) {
    cardAmount += 1;
    document.getElementById('coyote').src = 'Images/cardback.png'; 
    let coyotecard = {
        name: "coyote",
        damage: 2,
        health: 1,
        sigil: 0,
        img: 'Images/coyote.png' };
    cards.push(coyotecard);
    document.getElementById('coyote1').innerHTML =  'coyote';
    document.getElementById('coyote').removeAttribute('onclick'); allChecks(); }
}

function squirrelAdd()
{
    if(cardAmount >= 4) {
    document.getElementById('squirrel').style.display = 'none';
    cardAmount += 5;
    document.getElementById('squirrel5').innerHTML = 'squirrel x 5';
    allChecks(); }
}

function scene2()
{
    current = 2; scenes();
}

function scene7()
{
    if(cardAmount >= 9) {
    current = 7; scenes(); }
    else {
        document.getElementById('alert').innerHTML = 'You cant do this before selecting your starter cards.';
        setTimeout(() => {
        document.getElementById('alert').innerHTML = ""; }, 4000);
    }
}

function scene5()
{
    if(cardAmount >= 1) {
    current = 5; scenes();

    document.getElementById('spot1').setAttribute('src', cards[0].img);
    document.getElementById('spot2').setAttribute('src', cards[1].img);
    document.getElementById('spot3').setAttribute('src', cards[2].img);
    document.getElementById('spot4').setAttribute('src', cards[3].img);
    document.getElementById('spot5').setAttribute('src', cards[4].img);
    document.getElementById('spot6').setAttribute('src', cards[5].img); 
    document.getElementById('spot7').setAttribute('src', cards[6].img);
    document.getElementById('spot8').setAttribute('src', cards[7].img);
    document.getElementById('spot9').setAttribute('src', cards[8].img);
    document.getElementById('spot10').setAttribute('src', cards[9].img);
    document.getElementById('spot11').setAttribute('src', cards[10].img);
    document.getElementById('spot12').setAttribute('src', cards[11].img);
    document.getElementById('spot13').setAttribute('src', cards[12].img);
    document.getElementById('spot14').setAttribute('src', cards[13].img);
    document.getElementById('spot15').setAttribute('src', cards[14].img);
    document.getElementById('spot16').setAttribute('src', cards[15].img);
    document.getElementById('spot17').setAttribute('src', cards[16].img);
    document.getElementById('spot18').setAttribute('src', cards[17].img); 
    document.getElementById('spot19').setAttribute('src', cards[18].img);
    document.getElementById('spot20').setAttribute('src', cards[19].img);
    } else {
        document.getElementById('alert').innerHTML = 'You cant look at your cards if you have no cards.';
        setTimeout(() => {
        document.getElementById('alert').innerHTML = ""; }, 4000);
    }
}

function scene8()
{
    current = 8; scenes();
}

function kayceeAdd()
{
    cards[0].name = 'kaycee';
    cards[0].damage = 2;
    cards[0].health = 3;
    cards[0].sigil = 0;
    cards[0].img = 'Images/kaycee.png';
    document.getElementById('cust').innerHTML = 'kaycee';
    cardAmount += 1;
    document.getElementById('02').style.display = 'none';
    document.getElementById('03').style.display = 'none';
    document.getElementById('04').style.display = 'none';
    document.getElementById('05').style.display = 'none'; allChecks();
}
function leshyAdd()
{
    cards[0].name = 'leshy';
    cards[0].damage = 1;
    cards[0].health = 2;
    cards[0].sigil = 3;
    cards[0].img = 'Images/leshy.png';
    document.getElementById('cust').innerHTML = 'leshy';
    cardAmount += 1;
    document.getElementById('01').style.display = 'none';
    document.getElementById('03').style.display = 'none';
    document.getElementById('04').style.display = 'none';
    document.getElementById('05').style.display = 'none'; allChecks();
}
function grimoraAdd()
{
    cards[0].name = 'grimora';
    cards[0].damage = 2;
    cards[0].health = 1;
    cards[0].sigil = 1;
    cards[0].img = 'Images/grimora.png';
    document.getElementById('cust').innerHTML = 'grimora';
    cardAmount += 1;
    document.getElementById('01').style.display = 'none';
    document.getElementById('02').style.display = 'none';
    document.getElementById('04').style.display = 'none';
    document.getElementById('05').style.display = 'none'; allChecks();
}
function magnificusAdd()
{
    cards[0].name = 'magnificus';
    cards[0].damage = 1;
    cards[0].health = 2;
    cards[0].sigil = 2;
    cards[0].img = 'Images/magnificus.png';
    document.getElementById('cust').innerHTML = 'magnificus';
    cardAmount += 1;
    document.getElementById('01').style.display = 'none';
    document.getElementById('02').style.display = 'none';
    document.getElementById('03').style.display = 'none';
    document.getElementById('05').style.display = 'none'; allChecks();
}
function p03Add()
{
    cards[0].name = 'p03';
    cards[0].damage = 1;
    cards[0].health = 1;
    cards[0].sigil = 4;
    cards[0].img = 'Images/p03.png';
    document.getElementById('cust').innerHTML = 'P03';
    cardAmount += 1;
    document.getElementById('01').style.display = 'none';
    document.getElementById('02').style.display = 'none';
    document.getElementById('03').style.display = 'none';
    document.getElementById('04').style.display = 'none'; allChecks();
}

function scene4()
{
    if(cardAmount >= 9) {
    current = 4; scenes(); }
    else {
        document.getElementById('alert').innerHTML = 'You cant do this before selecting your starter cards.';
        setTimeout(() => {
            document.getElementById('alert').innerHTML = ""; }, 4000);
    }
}

function bouldRng()
{ 
    let bouldNum = document.getElementById('b4');
    let randomNum = Math.ceil(Math.random() * 3);
    document.getElementById('b1').style.display = 'none';
    document.getElementById('b2').style.display = 'none';
    document.getElementById('b3').style.display = 'none';
    if(randomNum == 1) {
        bouldNum.src = 'Images/bee.png';
        document.getElementById('below').innerHTML = 'A tiny bee pops out from behind the boulder. It seems friendly.';
        let beecard = {
        name: "bee",
        damage: 1,
        health: 1,
        sigil: 5,
        img: 'Images/bee.png' };
        cards.push(beecard); cardAmount += 1;
        document.getElementById('bee1').innerHTML = 'bee'; }
    else if(randomNum == 2) {
        bouldNum.src = 'Images/bat.png';
        document.getElementById('below').innerHTML = 'A bat frantically flaps its wings, glad for its escape. It joins your team.';
        let batcard = {
            name: 'bat',
            damage: 2,
            health: 1,
            sigil: 5,
            img: 'Images/bat.png' };
            cards.push(batcard); cardAmount += 1; 
            document.getElementById('bat1').innerHTML = 'bat'; }
    else if(randomNum == 3) {
        bouldNum.src = 'Images/goldnugget.png';
        document.getElementById('below').innerHTML = 'You- You struck gold!! Keep it, a promise is a promise.';
        gold += 50;
     }
     document.getElementById('bigBould').style.display = 'none';
     allChecks(); 
}

function scenes()
{
    if(current == 1) {
        document.getElementById('hide1').style.display= 'block';
        document.getElementById('hide2').style.display= 'none';
        document.getElementById('hide3').style.display= 'none';
        document.getElementById('hide4').style.display= 'none';
        document.getElementById('hide5').style.display= 'none';
        document.getElementById('hide6').style.display= 'none';
        document.getElementById('hide7').style.display= 'none';
        document.getElementById('hide8').style.display= 'none'; }
    else if(current == 2) {
        document.getElementById('hide1').style.display= 'none';
        document.getElementById('hide2').style.display= 'block';
        document.getElementById('hide3').style.display= 'none';
        document.getElementById('hide4').style.display= 'none';
        document.getElementById('hide5').style.display= 'none';
        document.getElementById('hide6').style.display= 'none';
        document.getElementById('hide7').style.display= 'none';
        document.getElementById('hide8').style.display= 'none'; }
    else if(current == 3) {
        document.getElementById('hide1').style.display= 'none';
        document.getElementById('hide2').style.display= 'none';
        document.getElementById('hide3').style.display= 'block';
        document.getElementById('hide4').style.display= 'none';
        document.getElementById('hide5').style.display= 'none';
        document.getElementById('hide6').style.display= 'none';
        document.getElementById('hide7').style.display= 'none';
        document.getElementById('hide8').style.display= 'none'; }
    else if(current == 4) {
        document.getElementById('hide1').style.display= 'none';
        document.getElementById('hide2').style.display= 'none';
        document.getElementById('hide3').style.display= 'none';
        document.getElementById('hide4').style.display= 'block';
        document.getElementById('hide5').style.display= 'none';
        document.getElementById('hide6').style.display= 'none';
        document.getElementById('hide7').style.display= 'none';
        document.getElementById('hide8').style.display= 'none'; }
    else if(current == 5) {
        document.getElementById('hide1').style.display= 'none';
        document.getElementById('hide2').style.display= 'none';
        document.getElementById('hide3').style.display= 'none';
        document.getElementById('hide4').style.display= 'none';
        document.getElementById('hide5').style.display= 'block';
        document.getElementById('hide6').style.display= 'none';
        document.getElementById('hide7').style.display= 'none'; 
        document.getElementById('hide8').style.display= 'none';}
    else if(current == 6) {
        document.getElementById('hide1').style.display= 'none';
        document.getElementById('hide2').style.display= 'none';
        document.getElementById('hide3').style.display= 'none';
        document.getElementById('hide4').style.display= 'none';
        document.getElementById('hide5').style.display= 'none';
        document.getElementById('hide7').style.display= 'none';
        document.getElementById('hide6').style.display= 'block';
        document.getElementById('hide8').style.display= 'none'; }  
    else if(current == 7) {
        document.getElementById('hide1').style.display= 'none';
        document.getElementById('hide2').style.display= 'none';
        document.getElementById('hide3').style.display= 'none';
        document.getElementById('hide4').style.display= 'none';
        document.getElementById('hide5').style.display= 'none';
        document.getElementById('hide6').style.display= 'none';
        document.getElementById('hide7').style.display= 'block'; 
        document.getElementById('hide8').style.display= 'none';}
    else if(current == 8) {
        document.getElementById('hide1').style.display= 'none';
        document.getElementById('hide2').style.display= 'none';
        document.getElementById('hide3').style.display= 'none';
        document.getElementById('hide4').style.display= 'none';
        document.getElementById('hide5').style.display= 'none';
        document.getElementById('hide6').style.display= 'none';
        document.getElementById('hide7').style.display= 'none'; 
        document.getElementById('hide8').style.display= 'block'; 
    }       
}

function shopRandom()
{
    let roll1 = Math.floor(Math.random() * 2);
    let roll2 = Math.floor(Math.random() * 2);
    let roll3 = Math.floor(Math.random() * 2);
    let roll4 = Math.floor(Math.random() * 2);
    
    if(roll1 == 0 && shop.grizzly == 0) {
        sh1.src = "Images/grizzly.png"; 
        sh1.addEventListener('click', grizzlyBuy);
    } else if(roll1 == 1 && shop.opossum == 0) { 
        sh1.src = "Images/opossum.png"; 
        sh1.addEventListener('click', opossumBuy);
    } else {
         if(shop.grizzly == 1 && shop.opossum == 0) {
            sh1.src = "Images/opossum.png"; 
            sh1.addEventListener('click', opossumBuy);
        } else if(shop.opossum == 1 && shop.grizzly == 0) {
            sh1.src = "Images/grizzly.png"; 
            sh1.addEventListener('click', grizzlyBuy);
        } else {sh1.src = 'Images/soldout.png'; } }

    if(roll2 == 0 && shop.raven == 0) {
            sh3.src = "Images/raven.png"; 
            sh3.addEventListener('click', ravenBuy);
    } else if(roll2 == 1 && shop.riverSnapper == 0) { 
            sh3.src = "Images/river-snapper.png"; 
            sh3.addEventListener('click', riverSnapperBuy);
    } else {
        if(shop.raven == 1 && shop.riverSnapper == 0) {
            sh3.src = "Images/river-snapper.png"; 
            sh3.addEventListener('click', riverSnapperBuy);
        } else if(shop.riverSnapper == 1 && shop.raven == 0) {
            sh3.src = "Images/raven.png"; 
            sh3.addEventListener('click', ravenBuy);
        } else {sh3.src = 'Images/soldout.png'; } }

   
//thesmoke, blackgoat
    if(roll3 == 0 && shop.theSmoke == 0) {
        sh4.src = "Images/the-smoke.png"; 
        sh4.addEventListener('click', theSmokeBuy);
        } else if(roll3 == 1 && shop.blackGoat == 0) { 
        sh4.src = "Images/black-goat.png"; 
        sh4.addEventListener('click', blackGoatBuy);
    } else {
    if(shop.theSmoke == 1 && shop.blackGoat == 0) {
        sh4.src = "Images/black-goat.png"; 
        sh4.addEventListener('click', blackGoatBuy);
    } else if(shop.blackGoat == 1 && shop.theSmoke == 0) {
        sh4.src = "Images/the-smoke.png"; 
        sh4.addEventListener('click', theSmokeBuy);
    } else {sh4.src = 'Images/soldout.png'; } }

//elk, sparrow
    if(roll4 == 0 && shop.elk == 0) {
        sh5.src = "Images/elk.png"; 
        sh5.addEventListener('click', elkBuy);
    } else if(roll4 == 1 && shop.sparrow == 0) { 
        sh5.src = "Images/sparrow.png"; 
        sh5.addEventListener('click', sparrowBuy);
    } else {
    if(shop.elk == 1 && shop.sparrow == 0) {
        sh5.src = "Images/sparrow.png"; 
        sh5.addEventListener('click', sparrowBuy);
    } else if(shop.sparrow == 1 && shop.elk == 0) {
        sh5.src = "Images/elk.png"; 
        sh5.addEventListener('click', elkBuy);
    } else {sh5.src = 'Images/soldout.png'; } }

//greatersmoke, moth, undeadcat, cagedwolf, geck
    if(shop.greaterSmoke == 0) {
        sh2.src = 'Images/greater-smoke.png';
        sh2.addEventListener('click', greaterSmokeBuy);
    } else if(shop.mothman == 0) {
        sh2.src = 'Images/mothman.png';
        sh2.addEventListener('click', mothmanBuy);
    } else if(shop.undeadCat == 0) {
        sh2.src = 'Images/undead-cat.png';
        sh2.addEventListener('click', undeadCatBuy);
    } else if(shop.cagedWolf == 0) {
        sh2.src = 'Images/caged-wolf.png';
        sh2.addEventListener('click', cagedWolfBuy);
    } else if(shop.geck == 0) {
        sh2.src = 'Images/geck.png';
        sh2.addEventListener('click', geckBuy);
    } else {
        sh2.src = 'Images/soldout.png';
    }
    
}

function grizzlyBuy()
{
    if(gold >= 12) {
    let grizcard = {
        name: 'grizzly',
        damage: 4,
        health: 6,
        sigil: 0,
        img: 'Images/grizzly.png' };
    cards.push(grizcard); cardAmount += 1; shop.grizzly = 1; gold -= 12;
    document.getElementById('grizzly1').innerHTML = 'grizzly';
    sh1.src = 'Images/soldout.png'; allChecks();
    sh1.removeEventListener('click', grizzlyBuy);
    } else { shopMsg(); }
}

function opossumBuy()
{
    if(gold >= 12) {
    let opocard = {
        name: 'opossum',
        damage: 1,
        health: 1,
        sigil: 0,
        img: 'Images/opossum.png' };
    cards.push(opocard); cardAmount += 1; shop.opossum = 1; gold -= 12;
    document.getElementById('opossum1').innerHTML = 'opossum';
    sh1.src = 'Images/soldout.png'; allChecks();
    sh1.removeEventListener('click', opossumBuy);
    } else { shopMsg(); }
}

function ravenBuy()
{
    if(gold >= 20) {
    let ravcard = {
        name: 'raven',
        damage: 2,
        health: 3,
        sigil: 5,
        img: 'Images/raven.png' };
    cards.push(ravcard); cardAmount += 1; shop.raven = 1; gold -= 20;
    document.getElementById('raven1').innerHTML = 'raven';
    sh3.src = 'Images/soldout.png'; allChecks();
    sh3.removeEventListener('click', ravenBuy);
    } else { shopMsg(); }
}

function riverSnapperBuy()
{
    if(gold >= 20) {
    let rivcard = {
        name: 'riversnapper',
        damage: 1,
        health: 6,
        sigil: 0,
        img: 'Images/river-snapper.png' };
    cards.push(rivcard); cardAmount += 1; shop.riverSnapper = 1; gold -= 20;
    document.getElementById('riversnapper1').innerHTML = 'river snapper';
    sh3.src = 'Images/soldout.png'; allChecks();
    sh3.removeEventListener('click', riverSnapperBuy);
    } else { shopMsg(); }
}

function theSmokeBuy()
{
    if(gold >= 20) {
    let smokecard = {
        name: 'thesmoke',
        damage: 0,
        health: 1,
        sigil: 1,
        img: 'Images/the-smoke.png' };
    cards.push(smokecard); cardAmount += 1; shop.theSmoke = 1; gold -= 20;
    document.getElementById('theSmoke1').innerHTML = 'the smoke';
    sh4.src = 'Images/soldout.png'; allChecks();
    sh4.removeEventListener('click', theSmokeBuy);
    } else { shopMsg(); }
}

function blackGoatBuy()
{
    if(gold >= 20) {
    let blkgoatcard = {
        name: 'blackgoat',
        damage: 0,
        health: 1,
        sigil: 7,
        img: 'Images/black-goat.png' };
    cards.push(blkgoatcard); cardAmount += 1; shop.blackGoat = 1; gold -= 20;
    document.getElementById('blackGoat1').innerHTML = 'black goat';
    sh4.src = 'Images/soldout.png'; allChecks();
    sh4.removeEventListener('click', blackGoatBuy);
    } else { shopMsg(); }
}

function elkBuy()
{
    if(gold >= 20) {
    let elkcard = {
        name: 'elk',
        damage: 2,
        health: 4,
        sigil: 8,
        img: 'Images/elk.png' };
    cards.push(elkcard); cardAmount += 1; shop.elk = 1; gold -= 20;
    document.getElementById('elk1').innerHTML = 'elk';
    sh5.src = 'Images/soldout.png'; allChecks();
    sh5.removeEventListener('click', elkBuy);
    } else { shopMsg(); }
}

function sparrowBuy()
{
    if(gold >= 20) {
    let sparcard = {
        name: 'sparrow',
        damage: 1,
        health: 2,
        sigil: 5,
        img: 'Images/sparrow.png' };
    cards.push(sparcard); cardAmount += 1; shop.sparrow = 1; gold -= 20;
    document.getElementById('sparrow1').innerHTML = 'sparrow';
    sh5.src = 'Images/soldout.png'; allChecks();
    sh5.removeEventListener('click', sparrowBuy);
    } else { shopMsg(); }
}

function greaterSmokeBuy()
{
    if(gold >= 50) {
    let gsmokecard = {
        name: 'greatersmoke',
        damage: 1,
        health: 3,
        sigil: 1,
        img: 'Images/greater-smoke.png' };
    cards.push(gsmokecard); cardAmount += 1; shop.greaterSmoke = 1; gold -= 50;
    document.getElementById('greaterSmoke1').innerHTML = 'greater smoke';
    sh2.src = 'Images/soldout.png'; allChecks();
    sh2.removeEventListener('click', greaterSmokeBuy);
    } else { shopMsg(); }
}

function mothmanBuy()
{
    if(gold >= 50) {
    let mothcard = {
        name: 'mothman',
        damage: 5,
        health: 3,
        sigil: 5,
        img: 'Images/mothman.png' };
    cards.push(mothcard); cardAmount += 1; shop.mothman = 1; gold -= 50;
    document.getElementById('mothman1').innerHTML = 'mothman';
    sh2.src = 'Images/soldout.png'; allChecks();
    sh2.removeEventListener('click', mothmanBuy);
    } else { shopMsg(); }
}

function undeadCatBuy()
{
    if(gold >= 50) {
    let ucatcard = {
        name: 'undeadcat',
        damage: 3,
        health: 6,
        sigil: 4,
        img: 'Images/undead-cat.png' };
    cards.push(ucatcard); cardAmount += 1; shop.undeadCat = 1; gold -= 50;
    document.getElementById('undeadcat1').innerHTML = 'undead cat';
    sh2.src = 'Images/soldout.png'; allChecks();
    sh2.removeEventListener('click', undeadCatBuy);
    } else { shopMsg(); }
}

function cagedWolfBuy()
{
    if(gold >= 50) {
    let cwolfcard = {
        name: 'cagedwolf',
        damage: 0,
        health: 6,
        sigil: 7,
        img: 'Images/caged-wolf.png' };
    cards.push(cwolfcard); cardAmount += 1; shop.cagedWolf = 1; gold -= 50;
    document.getElementById('cagedwolf1').innerHTML = 'caged wolf';
    sh2.src = 'Images/soldout.png'; allChecks();
    sh2.removeEventListener('click', cagedWolfBuy);
    } else { shopMsg(); }
}

function geckBuy()
{
    if(gold >= 50) {
    let geckcard = {
        name: 'geck',
        damage: 1,
        health: 1,
        sigil: 0,
        img: 'Images/geck.png' };
    cards.push(geckcard); cardAmount += 1; shop.geck = 1; gold -= 50;
    document.getElementById('geck1').innerHTML = 'geck';
    sh2.src = 'Images/soldout.png'; allChecks();
    sh2.removeEventListener('click', geckBuy); }
    else { shopMsg(); }
}

function shopMsg()
{
    let doc = document.getElementById('sAlert');
    doc.innerHTML = 'You need more money for that one!';
        setTimeout(() => {
            doc.innerHTML = '';}, 3000);
}

function rerollConf()
{
    if(gold >= 3) {
        gold -= 3; shopRandom(); allChecks();
    } else { shopMsg(); }
}