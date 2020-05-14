const  words=[
    {id: 'abc123', en:'One', vn:'một', isMemorized: true},
    {id: 'abc124', en:'Two', vn:'hai', isMemorized: true},
    {id: 'abc125', en:'Three', vn:'ba', isMemorized: false},
    {id: 'abc126', en:'Four', vn:'bốn', isMemorized: true}
]

export function wordReducer(state = words, action)
{
    if(action.type==='REMOVE_WORD'){
        return state.words.filter(word=>word.id !== action.id);
    }
    if(action.type==='TOGGLE_ISMEMORIZED'){
       const words = state.map(word=>{
        if(word.id !== action.id) return word;
        else return {...word,isMemorized: !word.isMemorized}
       });
       return words;
    }
    if(action.type==='ADD_WORD'){
        return [action.word,...state];
     }

    return state;
}