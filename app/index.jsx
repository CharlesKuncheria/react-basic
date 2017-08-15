import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import App from './components/App'

ReactDOM.render(<App msg={['hello', 'world']}/>, document.getElementById('app'));
