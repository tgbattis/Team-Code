const greeting = ['greeting placeholder 1', 'greeting placeholder 2', 'greeting placeholder 3', 'greeting placeholder 4', 
                  'greeting placeholder 5'];
const workLifeBalance = ['workLifeBalance placeholder 1', 'workLifeBalance placeholder 2', 'workLifeBalance placeholder 3', 
                         'workLifeBalance placeholder 4', 'workLifeBalance placeholder 5'];
const howsWork = ['howsWork placeholder 1', 'howsWork placeholder 2', 'howsWork placeholder 3', 'howsWork placeholder 4', 
                  'howsWork placeholder 5'];
const coworkers = ['coworkers placeholder 1', 'coworkers placeholder 2', 'coworkers placeholder 3', 'coworkers placeholder 4',
                   'coworkers placeholder 5'];
const unknown = ['unknown placeholder 1', 'unknown placeholder 2', 'unknown placeholder 3', 'unknown placeholder 4', 
                 'unknown placeholder 5'];

let surveyAnswers = [["Greeting", ""], ["Work Life Balance", ""], ["How's Work", ""], ["How's Your CoWorkers", ""], ["Unknown", ""]];

let greetingQuestion;
let workLifeQuestion;
let howsWorkQuestion;
let coworkersQuestion;
let unknownQuestion;

let greetingAnswer;
let workLifeAnswer;
let howsWorkAnswer;
let coworkersAnswer;
let unknownAnswer;

function autoTab(current, length, to) {
	if (document.getElementById(current).value.length == length) {
		document.getElementById(to).focus();
        }

    submitAppear()
}

function submitAppear() {
    if (document.getElementById('codeOne').value.length == 1
        && document.getElementById('codeTwo').value.length == 1
        && document.getElementById('codeThree').value.length == 1
        && document.getElementById('codeFour').value.length == 1
        && document.getElementById('codeFive').value.length == 1
        && document.getElementById('codeSix').value.length == 1) {
            document.getElementById('submitButton').style.visibility = "visible";
            document.getElementById('submitButton').style.transitionDuration = "1s";
            document.getElementById('submitButton').style.opacity = "1";
        } else {
            document.getElementById('submitButton').style.opacity="0";
            document.getElementById('submitButton').style.visibility = "hidden";
        }
}

function submit() {
    let one = document.getElementById('codeOne').value;
    let two = document.getElementById('codeTwo').value;
    let three = document.getElementById('codeThree').value;
    let four = document.getElementById('codeFour').value;
    let five = document.getElementById('codeFive').value;
    let six = document.getElementById('codeSix').value;

    let loginCode = one + two + three + four + five + six;

    let loggedOn = 'success';

    if (loggedOn = 'success') {
        window.location.href = "survey.html"
    }
}

function submitAnswers() {
    
}

function nextQuestion() {
    if (currentQuestion == greetingQuestion) {
        currentQuestion = workLifeQuestion;
        document.getElementById('questionID').innerHTML = currentQuestion;
    } else if (currentQuestion == workLifeQuestion) {
        currentQuestion = howsWorkQuestion;
        document.getElementById('questionID').innerHTML = currentQuestion;
    } else if (currentQuestion == howsWorkQuestion) {
        currentQuestion = coworkersQuestion;
        document.getElementById('questionID').innerHTML = currentQuestion;
    } else if (currentQuestion == coworkersQuestion) {
        currentQuestion = unknownQuestion;
        document.getElementById('questionID').innerHTML = currentQuestion;
    } else {
        document.getElementById('submitAnswers').style.visibility = "visible";
        document.getElementById('submitAnswers').style.transitionDuration = "1s";
        document.getElementById('submitAnswers').style.opacity = "1";
    }

}

function surveyQuestions() {
    greetingQuestion = greeting[Math.floor(Math.random() * greeting.length)];
    workLifeQuestion = workLifeBalance[Math.floor(Math.random() * workLifeBalance.length)];
    howsWorkQuestion = howsWork[Math.floor(Math.random() * howsWork.length)];
    coworkersQuestion = coworkers[Math.floor(Math.random() * coworkers.length)];
    unknownQuestion = unknown[Math.floor(Math.random() * unknown.length)];

    document.getElementById('questionID').innerHTML = greetingQuestion;
    currentQuestion = greetingQuestion;
}