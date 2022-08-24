import React from 'react'
import ReactDOM from "react-dom";
import { render, screen } from '@testing-library/react';
import {GeneralApp} from './App';

test('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GeneralApp />, div)
  ReactDOM.unmountComponentAtNode(div)
});
