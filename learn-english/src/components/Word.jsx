import React, { Component } from 'react'
import { connect } from 'react-redux';
 class WordComponent extends Component {
  
    render() {
        const {wordInfo,dispatch} = this.props;
        return (
            <div>
            <div className="word" key = {wordInfo.id}>
            <p>{wordInfo.en}</p>  
            <p>{wordInfo.isMemorized ? '...':wordInfo.vn}</p>
            <div >
                 <a 
                 className="btn btn-primary" 
                 role="button"
                 onClick={()=>dispatch({type:'TOGGLE_ISMEMORIZED', id: wordInfo.id})}
                 >{wordInfo.isMemorized?'Fogot':'isMemorized'}</a>
                 <a  onClick={()=>dispatch({type:'REMOVE_WORD',id : wordInfo.id })
               } className="btn btn-primary" role="button">Remove</a>
            </div>
        </div>
            <br/>
        </div>
        );
    }
}

export const Word = connect()(WordComponent);