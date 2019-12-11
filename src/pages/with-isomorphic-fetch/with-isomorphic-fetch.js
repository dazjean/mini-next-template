'use strict';
import './with-isomorphic-fetch.scss';
import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

var inBrowser = typeof window !== 'undefined';
inBrowser && ReactDom.hydrate(<App />, document.getElementById('app'));
module.exports = App;
