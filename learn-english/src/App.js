import React ,{ Component }from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {WordList} from './components/WordList';
import { Provider } from 'react-redux';
import {store} from './redux/store'


export class App extends Component {
 
  render() {
    return (
        <div>
          <h1 className ="title-app">WEB APP HỌC TỪ MỚI</h1>
            <div className="container">
              <div className="row">
                <div class="col-xl-6">
                  <Provider store={store}>
                    <WordList/>
                  </Provider>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

