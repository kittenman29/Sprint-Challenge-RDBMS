module.exports = {
    intToBoolean,
    booleanToint,
    projectToBody,
    actionToBody,
  };
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function booleanToint(bool) {
    return bool === true ? 1 : 0;
  }
  
  function projectToBody(projects) {
    const result = {
      ...projects,
      completed: intToBoolean(projects.completed),
    };
  
    if (projects.actions) {
      result.actions = projects.actions.map(actions => ({
        ...actions,
        completed: intToBoolean(actions.completed),
      }));
    }
  
    return result;
  }
  
  function actionToBody(actions) {
    return {
      ...actions,
      completed: intToBoolean(actions.completed),
    };
  }