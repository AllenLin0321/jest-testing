export default ({ dispatch }) => next => action => {
  // 若 action 沒有payload 或是 action.payload 不等於 Promise
  if (!action.payload || !action.payload.then) {
    // 交給下一個Middleware
    return next(action);
  }

  // 若是一個Promise，需等待API回應，將API回傳的資料提交一個新的Action，並dispatch
  action.payload
    .then(res => {
      dispatch({ ...action, payload: res });
    })
    .catch(err => {
      dispatch({ ...action, payload: err, err: true });
    });
};
