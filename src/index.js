import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
  } from "react-router-dom";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SinglePost from './Components/SingleBlog';
import Blogs from './Components/Blogs';
import Categories from './Components/Categories';
import {RoomProvider} from './Context'

ReactDOM.render(
    <RoomProvider>
    <Router>
        <Switch>
            <Route path="/categories/:category" component={Categories} />
            <Route path="/blogs">
                 <Blogs/>
            </Route>
            <Route path="/singlePost/:slug" component={SinglePost}/>  
           <Route exact path="/">
              <App />
           </Route>
           <Route path="*">
               <Redirect to="/"/>
           </Route>
        </Switch>
    </Router> 
 </RoomProvider>   
, document.getElementById('root'));
registerServiceWorker();
