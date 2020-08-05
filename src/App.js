import React from 'react';
import MainHeader from './components/MainHeader';
import ArtPrueba from './components/ArtPrueba';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container m-0 p-0 w-100">

          <MainHeader />

          <div className="row">
            <ArtPrueba />
            <ArtPrueba />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
