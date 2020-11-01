import AskUser, { NOD } from "../src/cli.js";

const QuestData = [
  { question: "Question: 25 50", answer: 25 },
  { question: "Question: 100 52", answer: 4 },
  { question: "Question: 3 9", answer: 3 },
];
let userResponse = "";
console.log("Welcome to the Brain Games!");
console.log("May I have your name?");
const userName = await AskUser();
console.log(`Hello, ${userName}!`);
console.log("Find the greatest common divisor of given numbers.");
const findGcd = async () => {
    for (let question of QuestData) {
        console.log(question.question);
        userResponse = await AskUser();
        if (Number(userResponse) === question.answer) {
            console.log('Correct!');
        } else {
            console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${question.answer}'.`)
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
};
await findGcd();
