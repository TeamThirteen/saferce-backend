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

Route.get('/categories', 'CategoryController.index');

Route.group(() => {
  Route.delete('/users/:id', 'UserController.delete');

  Route.post('/file', 'FileController.store');

  Route.get('/categories', 'CategoryController.index');

  Route.get('/safeitems', 'CategoryController.index');
}).middleware(['auth']);
