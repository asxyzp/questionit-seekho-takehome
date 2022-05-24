/**
 * @name getQuestions
 * @description GETTING MCQs FROM OPEN TRIVIA DB'S API
 * @param questionNumber NUMBER OF QUESTIONS TO BE FETCHED
 * @returns {Promise} response
 */
const getQuestions = async (questionNumber) => {
    const response = await fetch(`https://opentdb.com/api.php?amount=${questionNumber}&type=multiple`);
    return response;
};

export default getQuestions;