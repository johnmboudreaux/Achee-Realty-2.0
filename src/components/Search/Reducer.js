const Reducer = (store = [], action) => {
  switch (action.type) {
    case 'LOAD_PROPERTY_DETAILS':
      return [...action.propertyDetails];
    case 'LOAD_PROPERTY_COMPS':
      return [...action.propertyComps];
    default:
      return store;
  }
};

export default Reducer;
