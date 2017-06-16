import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import style from '../style/main.scss'

class App extends Component{
    constructor(props){
        super(props)

        this.state = {}
    }
    render(){
        return(
            <div>
                <h1>Hello World!</h1>
                <p>Now you can start coding</p>
                <p>If you meet any problems please visit <a className="link" href="https://github.com/mrdck/React-Webpack2-Babel-Starter-Files">GitHub Page</a> and post your issue</p>
                <i className="author">By Mateusz 'mrdck' Perlak</i>
            </div>
        )
    }
}

ReactDOM.render(<App /> , document.querySelector('.container'));