'use strict';

document.addEventListener('DOMContentLoaded', function() {

    let data = {

        title: 'Тест по программированию',

        question_1: 'Какие два значения имеет тип данных "boolean"?;',

        inner_li_1: [

            {
                id: 'cfirst_1',

                name: 'first_1',

                for: 'cfirst_1',

                answer: 'a. true;'
            },

            {
                id: 'csecond_1',

                name: 'second_1',

                for: 'csecond_1',

                answer: 'b. false;'
            },

            {
                id: 'cthird_1',

                name: 'third_1',

                for: 'cthird_1',

                answer: 'c. IDoNotKnow;'
            },

        ],

        question_2: 'Какой будет результат выполнения следующего кода? var result = 5 + ‘5’ - 0;',

        inner_li_2: [

            {
                id: 'cfirst_2',

                name: 'first_2',

                for: 'cfirst_2',

                answer: 'a. 10;'
            },

            {
                id: 'csecond_2',

                name: 'second_2',

                for: 'csecond_2',

                answer: 'b. ‘55’;'
            },

            {
                id: 'cthird_2',

                name: 'third_2',

                for: 'cthird_2',

                answer: 'c. 55;'
            },

        ],

        question_3: 'Что будет выведено на консоль следующим кодом? console.log(1 == ‘1’ );',



        inner_li_3: [

            {
                id: 'cfirst_3',

                name: 'first_3',

                for: 'cfirst_3',

                answer: 'a. true'
            },

            {
                id: 'csecond_3',

                name: 'second_3',

                for: 'csecond_3',

                answer: 'b. 1'
            },

            {
                id: 'cthird_3',

                name: 'third_3',

                for: 'cthird_3',

                answer: 'c. false'
            },

        ],


    };



    //record information in local storage

    localStorage.setItem('testContent', JSON.stringify(data));

    //get information from local storage

    let restored = localStorage.getItem('testContent');

    //create from a string object

    restored = JSON.parse(restored);


    //get the template

    let tmpl = _.template(document.getElementById('test').innerHTML);

    //insert the content into the template

    let result = tmpl(restored);

    //get the container for the generated html

    let wrapper = document.querySelector('.form-group');

    //insert content on the page

    wrapper.innerHTML = result;


    //define wrong answers
    
    let fQtInp = document.getElementById('cthird_1');

    let fQtLab = document.querySelector('label[for="cthird_1"]');


    let sQfInp = document.getElementById('cfirst_2');

    let sQfLab = document.querySelector('label[for="cfirst_2"]');


    let sQsInp = document.getElementById('csecond_2');

    let sQsLab = document.querySelector('label[for="csecond_2"]');


    let tQsInp = document.getElementById('csecond_3');

    let tQsLab = document.querySelector('label[for="csecond_3"]');


    let tQtInp = document.getElementById('cthird_3');

    let tQtLab = document.querySelector('label[for="cthird_3"]');


    //record wrong answers in an array

    let wrongInput = [fQtInp, sQfInp, sQsInp, tQsInp, tQtInp];

    let wrongLabel = [fQtLab, sQfLab, sQsLab, tQsLab, tQtLab];

    //define color for wrong answers

    let changeColorRed = () => {

        for (var i = 0; i < wrongInput.length; i++) {

            if (wrongInput[i].checked) {

                wrongLabel[i].setAttribute('class', 'red');
            };
        };

    };


    //define right answers

    let fQfInp = document.getElementById('cfirst_1');

    let fQfLab = document.querySelector('label[for="cfirst_1"]');
    

    let fQsInp = document.getElementById('csecond_1');

    let fQsLab = document.querySelector('label[for="csecond_1"]');


    let sQtInp = document.getElementById('cthird_2');

    let sQtLab = document.querySelector('label[for="cthird_2"]');


    let tQfInp = document.getElementById('cfirst_3');

    let tQfLab = document.querySelector('label[for="cfirst_3"]');

    //record right answers in an array

    let rightInput = [fQfInp, fQsInp, sQtInp, tQfInp];

    let rightLabel = [fQfLab, fQsLab, sQtLab, tQfLab];

    //define counter for write answers

    let count = 0;

    //define color for right answers and begin count

    let changeColorGreen = () => {

        for (var i = 0; i < rightInput.length; i++) {

            if (rightInput[i].checked) {

                rightLabel[i].setAttribute('class', 'green');

                count++;
            };
        };
    };


    //answers for first question

    let firstQuestion = [fQfInp, fQsInp, fQtInp];
    
    //a function to limit the number of responses for first question

    let firstRule = setInterval(() => {

        if (firstQuestion[0].checked & firstQuestion[1].checked) {

            firstQuestion[2].setAttribute('disabled','disabled');

        } else {

            firstQuestion[2].removeAttribute('disabled');
        };

        if (firstQuestion[1].checked & firstQuestion[2].checked) {

            firstQuestion[0].setAttribute('disabled','disabled');

        } else {

            firstQuestion[0].removeAttribute('disabled');
        };

        if (firstQuestion[2].checked & firstQuestion[0].checked) {

            firstQuestion[1].setAttribute('disabled','disabled');

        } else {

            firstQuestion[1].removeAttribute('disabled');
        };

    }, 1);

    //answers for second question

    let secondQuestion = [sQfInp, sQsInp, sQtInp];
    
    //a function to limit the number of responses for second question

    let secondRule = setInterval(() => {

        if (secondQuestion[0].checked) {

            secondQuestion[1].setAttribute('disabled','disabled');

            secondQuestion[2].setAttribute('disabled','disabled');

        } else if (secondQuestion[1].checked) {

            secondQuestion[2].setAttribute('disabled','disabled');

            secondQuestion[0].setAttribute('disabled','disabled');

        } else if (secondQuestion[2].checked) {

            secondQuestion[0].setAttribute('disabled','disabled');

            secondQuestion[1].setAttribute('disabled','disabled');

        } else {
            secondQuestion[0].removeAttribute('disabled');

            secondQuestion[1].removeAttribute('disabled');

            secondQuestion[2].removeAttribute('disabled');
        };

    }, 1);

    //answers for third question

    let thirdQuestion = [tQfInp, tQsInp, tQtInp];
    
    //a function to limit the number of responses for third question

    let thirdRule = setInterval(() => {

        if (thirdQuestion[0].checked) {

            thirdQuestion[1].setAttribute('disabled','disabled');

            thirdQuestion[2].setAttribute('disabled','disabled');

        } else if (thirdQuestion[1].checked) {

            thirdQuestion[2].setAttribute('disabled','disabled');

            thirdQuestion[0].setAttribute('disabled','disabled');

        } else if (thirdQuestion[2].checked) {

            thirdQuestion[0].setAttribute('disabled','disabled');

            thirdQuestion[1].setAttribute('disabled','disabled');

        } else {
            thirdQuestion[0].removeAttribute('disabled');

            thirdQuestion[1].removeAttribute('disabled');

            thirdQuestion[2].removeAttribute('disabled');
        };

    }, 1);

    //define modal window

    let modal = document.querySelector('.modal_wrapper');
    
    //function for the appearance of the modal window

    var modalSlideDown = () => {

        let pos = -310;

        let action = setInterval(frame, 5);

        function frame() {

            if (pos == 150) {

                clearInterval(action);
            } else {

                pos++;

                modal.style.top = pos + 'px';
            };
        };
    };

    //define button which checks the answers

    let confirm = document.querySelector('.button');

    //define items in modal window
    
    let underResult = document.querySelector('.under_result');

    let resalt = document.querySelector('.result');

    let refresh = document.querySelector('.refresh');

    //hang the button event handler

    confirm.addEventListener('click', (e) => {

        e.preventDefault();    //not to reload page

        changeColorRed();      //wrong answer

        changeColorGreen();    //right answer

        //if all answers right

        if (count == 4) {

            resalt.innerHTML = 'Поздравляем! Все Ваши ответы верны!';

            resalt.className = 'right_result'

        //if some answers wrong

        } else {

            resalt.innerHTML = 'К сожалению не все Ваши ответы верны!';

            underResult.innerHTML = 'Попробуйте еще раз.';

            resalt.className = 'wrong_result';

            underResult.className = 'wrong_under_result';
        };

        //appear modal window with results

        modalSlideDown();

        //clicked button disabled

        confirm.setAttribute('disabled','disabled');

    });

    //a function to remove modal window

    let modalSlideUp = () => {

        let pos = 150;

        let action = setInterval(frame, 5);

        function frame() {

            if (pos == -310) {

                clearInterval(action);
            } else {

                pos--;

                modal.style.top = pos + 'px';
            };
        };
    };

    //to reload the page - clear the test

    let wait = () => {

        location.reload();
    };

    //reload after modal window disappear

    refresh.addEventListener('click', () => {
        
        modalSlideUp();

        setTimeout(wait, 2700);
    });

});