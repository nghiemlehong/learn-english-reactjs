import React, { Component } from 'react';
import { connect } from 'react-redux';
class WordFilterComponent extends Component { 
    render() {
        return (
            <div class="form-group">
                 <label for="">Lựa chọn</label>
                    <select
                        className="form-control" 
                        value ={this.props.filterMode}
                        onChange={
                        evt=>this.props.dispatch({type: 'SET_FILTER_MODE', filterMode: evt.target.value})
                        }
                    >
                        <option value='SHOW_ALL'>Show All</option>
                        <option value='SHOW_MEMORIZED'>Show Memorized</option>
                        <option value='SHOW_FORGOT'>Show Fogot</option>
                    </select>
          </div>
        );
    }
}

const mapState = state=>({filterMode: state.filterMode});
export const WordFilter = connect(mapState)(WordFilterComponent);