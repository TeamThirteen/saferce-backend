'use strict';

const Evaluation = use('App/Models/Evaluation');
const { validate } = use('Validator');

class AnswerController {
  async store({ request }) {
    const rules = {
      evaluation_id: 'required',
      answer: 'required',
    };

    const messages = {
      'evaluation_id.required': 'Requisição inválida',
      'answer.required': 'Faça um comentário',
    };

    const dataAnswer = request.only(['evaluation_id', 'answer']);

    const validation = await validate(dataAnswer, rules, messages);

    if (validation.fails()) {
      return validation.messages();
    }

    const evaluation = await Evaluation.find(dataAnswer.evaluation_id);

    evaluation.answer = dataAnswer.answer;

    await evaluation.save();

    return evaluation;
  }
}

module.exports = AnswerController;
