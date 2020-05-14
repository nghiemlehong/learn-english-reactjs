export function shouldShowFormReducer(state = false, action)
{
    if(action.type ==='SHOULD_SHOW_FORM') return !state;
    if(action.type==='ADD_WORD') return false;
    return state;
}