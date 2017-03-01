/**
 * Created by apple on 17/2/27.
 */
import React from 'react';
import Footer from '../containers/foot';
import Input from '../containers/input';
import List from '../containers/list';

class App extends React.Component{
    render(){
        return(
            <div>
               <p>react-redux案例</p>
               <Input />
               <List />
               <Footer />
            </div>
        )
    }
}

export default  App;