import React from 'react';
import SplitPane from 'react-split-pane';
import {  Route, Link } from 'react-router-dom';
import Home from './Home';
import Topics from './Topics';
import {FaArrowUp} from "react-icons/fa"
import '../App.css';



const styles = {
    background: '#363232',
    width: '3px',
    cursor: 'col-resize',
    margin: '0 5px',
    height: '100%',
  };

const Navication = () => (
   
    <SplitPane
    split="vertical"
    minSize={100}
    defaultSize={100}
    resizerStyle={styles}
  >
    <menu className="Main_menu">
      <div><Link to="/"><FaArrowUp/></Link></div>
      <div><Link className = "font_color" to="/topics">Topics</Link></div>
    </menu>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/topics" component={Topics} />
    </div>
  </SplitPane>
);

export default Navication;
