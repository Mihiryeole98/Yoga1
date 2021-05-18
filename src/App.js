
import './App.css';
import { Icon, Navbar, NavItem, Parallax } from 'react-materialize';
import MyCarousel from './components/myCarousel.component';

function App() {
  return (
    <div className="App">
      <Navbar
        alignLinks="right"
        brand={<a className="brand-logo" href="//#region ">Logo</a>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <NavItem href="">
          Getting started
        </NavItem>
        <NavItem href="components.html">
          Components
        </NavItem>
      </Navbar>
        <MyCarousel/>
        

      <div>
        <Parallax
          image={<img alt="" src="http://materializecss.com/images/parallax1.jpg"/>}
          options={{
            responsiveThreshold: 0
          }}
        />
        <div className="section white">
          <div className="row container">
            <h2 className="header">
              Parallax
            </h2>
            <p className="grey-text text-darken-3 lighten-3">
              Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
            </p>
          </div>
        </div>
        <Parallax
          image={<img alt="" src="http://materializecss.com/images/parallax2.jpg"/>}
          options={{
            responsiveThreshold: 0
          }}
        />
      </div>
    </div>
  );
}

export default App;
