'use strict';

const Database = use('Database');
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/users', 'UserController.create');
Route.post('/sessions', 'SessionController.create');

Route.group(() => {
  Route.delete('/users/:id', 'UserController.delete');

  Route.post('/file', 'FileController.store');

  Route.get('/categories', 'CategoryController.index');

  Route.get('/types', 'TypeController.index');

  Route.get('/safeitems', 'SafeItemController.index');

  Route.get('/evaluations', 'EvaluationController.index');
  Route.post('/evaluations', 'EvaluationController.store');

  Route.post('/answer', 'AnswerController.store');
}).middleware(['auth']);
