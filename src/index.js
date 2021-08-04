import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import './styles.scss';
import BoardView from './components/BoardView';

const App = () => {
    return <BoardView/>
};

ReactDOM.render(<App/>, document.getElementById('root'));
