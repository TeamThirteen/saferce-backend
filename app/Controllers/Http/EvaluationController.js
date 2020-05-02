'use strict';

const Evaluation = use('App/Models/Evaluation');
const { validate } = use('Validator');

class EvaluationController {
  async store({ request }) {
    const rules = {
      user_id: 'required',
      provider_id: 'required',
      rating: 'required|integer',
      comment: 'required',
    };

    const messages = {
      'user_id.required': 'Requisição inválida',
      'provider_id.required': 'Requisição inválida',
      'rating.required|integer': 'Insira o seu voto',
      'comment.required': 'Faça um comentário',
    };

    const dataEvaluation = request.only(['user_id', 'provider_id', 'rating', 'comment', 'answer']);

    const validation = await validate(dataEvaluation, rules, messages);

    if (validation.fails()) {
      return validation.messages();
    }

    const evaluation = await Evaluation.create(dataEvaluation);

    return evaluation;
  }
}

module.exports = EvaluationController;
