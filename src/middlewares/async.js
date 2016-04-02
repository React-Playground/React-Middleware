export default function ( { dispatch } ) {
  return next => action => {
    console.log(action);
    //if action doesn't have a payload or doesn;t have 'then' we don't care
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    //make sure promise is resolves
    action.payload
    .then(function(response) {
      // create a new action with the old type but replace the promise with response
      const newAction = {... action, payload: response }
    });
  }
}

/* **** ES 5 Version ****
export default function({dispatch}) {
  return function(next) {
    return function(action) {
      console.log(action);

      next(action);
    }
  }
} */
