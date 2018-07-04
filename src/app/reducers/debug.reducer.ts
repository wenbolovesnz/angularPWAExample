export function debug(reducer){
    return function(state, action) {
      console.log('state', state);
      console.log('action', action);  
      return reducer(state, action);
    };
}