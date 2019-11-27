import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import Routes from './routes'
import store from './store'
import {ThemeProvider} from 'styled-components'

function App() {

  const theme = {
    primaryColor: '#0C162A',
    secundaryColor: '#0E4F8A',
    disabledColor: '#C1C1C1',
    primaryFontColor: '#09345C',
    secundaryFontColor: '#06DCDB',
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
