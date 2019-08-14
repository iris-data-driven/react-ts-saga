import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './ducks/sample/repositories/types';

import redux from './ducks/redux';
import saga from './ducks/saga';

export interface ApplicationState {
  repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  redux,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(saga);

export default store;
