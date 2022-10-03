export const shuffleAnswers = (correctAnswer, wrongAnswer) => {
  const correctAnswerIndex = wrongAnswer.findIndex(
    (res) => res === correctAnswer
  );

  const generateFakeAnswers = [
    ...wrongAnswer.slice(0, correctAnswerIndex),
    ...wrongAnswer.slice(correctAnswerIndex + 1),
  ];

  const generateRandomFakeAnswers = generateFakeAnswers
    .map((answer) => ({ sort: Math.random(), value: answer }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);

  generateRandomFakeAnswers.length = 3;

  const allAnswers = [correctAnswer, ...generateRandomFakeAnswers];

  return allAnswers
    .map((answer) => ({ sort: Math.random(), value: answer }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value.secondWord);
};
