import React, { Component } from 'react';

import {WordForm} from './WordForm.jsx'
import {WordFilter} from './WordFilter'
import {Word} from './Word.jsx'
import { connect } from 'react-redux'

 class WordListComponent extends Component {   
  genListWord()
  {
        const listFilter = this.props.words.filter(w=>{
        if(this.props.filterMode==='SHOW_ALL') return true;
        if(this.props.filterMode==='SHOW_FORGOT')  return !w.isMemorized;
        else return w.isMemorized;
      })
      return (
        <div>
            { 
                listFilter.map((w)=>{
                    return (
                        <div>
                            <Word 
                             wordInfo={w}   
                            />
                        </div>
                    )})
            }
                  
        </div>
    )}
    render() {
        return (
            <div>
                <WordForm/>
                <br/>
                <WordFilter/>
                {this.genListWord()}
            </div>

        );
    }
}
const mapState = state =>({filterMode : state.filterMode, words: state.words})
export const WordList = connect(mapState)(WordListComponent);