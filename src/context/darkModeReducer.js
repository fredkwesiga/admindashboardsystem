const DarkModeReducer = (state, action )=>{
    switch (action.type) {
      case 'LIGHT MODE': {
        return {
          darkMode: false,
        };
      }
      case 'DARK MODE': {
        return {
          darkMode: true,
        };
      }
      case 'TOGGLE': {
        return {
          darkMode: !state.darkMode,
        };
      }
      default: {
        return state;
      }
    }
}
export default DarkModeReducer;