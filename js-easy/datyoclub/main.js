let cntPerson = 0;

const cntUp = function(){
    cntPerson = cntPerson + 1;
    console.log(cntPerson);
};

const reply = function(){
    const str = 'どうぞどうぞ'
    const action = Array(1 * cntPerson + 1).join('どうぞどうぞ')
    alert(action);
    cntPerson=0;
};

const cntDown = function(){
    cntPerson = cntPerson - 1;
    if (cntPerson<0) {
        alert('もう誰もいない');
    }
    cntPerson=0;
};