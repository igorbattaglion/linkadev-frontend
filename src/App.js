import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import Routes from './routes'
import store from './store'
import {ThemeProvider} from 'styled-components'

function App() {

  const theme = {
    primaryColor: '#7A41C4',
    secundaryColor: '#B882FF',
    disabledColor: '#C1C1C1',
    primaryFontColor: '#00ebeb'
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
