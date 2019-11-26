import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import Routes from './routes'
import store from './store'
import {ThemeProvider} from 'styled-components'

function App() {

  const theme = {
    primaryColor: '#BADA56',
    secundaryColor: '#7A41C4',
    disabledColor: '#C1C1C1'
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
