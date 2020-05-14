import React, { Component } from 'react';
import { connect } from 'react-redux';
 class WordFormComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            txtEn:'',
            txtVn:''
        }
        this.addWord=this.addWord.bind(this);
    }
    
    addWord()
    {
        const {dispatch} = this.props;
        const word ={
            id: Math.random()+'',
            en: this.state.txtEn,
            vn: this.state.txtVn

        }
        dispatch({type: 'ADD_WORD', word: word});


        this.setState({txtEn:'', txtVn:''});
    }
    render() {
        const {shouldShowForm,dispatch} = this.props;
        return (
            <div>
            {shouldShowForm? 
            <div className="form-group">
            <label for=""></label>
            <input className="form-control" 
             placeholder="English" 
             value={this.state.txtEn}
             onChange={evt=>this.setState({txtEn: evt.target.value})}
            />
            
          <br/>
            <label for=""></label>
            <input
             className="form-control"
             placeholder="Vietnamese" 
             value={this.state.txtVn}
             onChange={evt=>this.setState({txtVn: evt.target.value})}
            />
            <br/>
            <button 
             type="button" 
             className="btn btn-primary"
             onClick={this.addWord}
            >
                Add Word</button>
            <p/>
            <button 
             onClick={()=>dispatch({type:'SHOULD_SHOW_FORM'})} 
             type="button" 
             className="btn btn-primary"
            >
                Cancel</button>
            <br/>
          </div>
          :
          <button 
             onClick={()=>dispatch({type: 'SHOULD_SHOW_FORM'})} 
             type="button" 
             className="btn btn-primary"
          >
              Create a new word</button>
            }
        </div>
        );
    }
}
const mapState = state =>({shouldShowForm: state.shouldShowForm});
export const WordForm = connect(mapState)(WordFormComponent);