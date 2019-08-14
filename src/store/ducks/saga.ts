import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './sample/repositories/types';
import { load } from './sample/repositories/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
  ]);
}
