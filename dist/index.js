import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { App } from './App';
import store from './store';
ReactDOM.render(_jsx(React.StrictMode, { children: _jsxs(Provider, Object.assign({ store: store }, { children: [_jsx(GlobalStyle, {}), _jsx(App, {})] })) }), document.getElementById('root'));
