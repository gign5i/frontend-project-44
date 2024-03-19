import readlindeSync from 'readline-sync';

export default () => {
    console.log('May I have your name ?');
    const name = readlindeSync.question('Your answer: ');
    return `Hello, ${name}!`;
};