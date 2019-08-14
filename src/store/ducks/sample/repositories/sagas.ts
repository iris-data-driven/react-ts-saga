import { call, put } from 'redux-saga/effects';

import { loadSuccess, loadFailure } from './actions';
import services from '../../../../services';

const { GITHUB_URL } = services;

export function* load() {
  try {
    const response = yield call(GITHUB_URL.get, 'users/ivoneijr/repos');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
