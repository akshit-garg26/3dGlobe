import logo from './logo.svg';
import './App.css';
// import './main.js'
import ThreeComponent from './globe';

import canada_img from './assets/canada.jpg';
import newZealand_img from './assets/new_zealand.jpg';
import australia_img from './assets/australia.png';
import usa_img from './assets/usa.png';
import uk_img from './assets/uk.jpg';

function App() {
  return (<>
    <div className='landing_page'></div>
    <div className='home_container'>
      <div className='container'>
        <h1 className='title cont1'>Start your Journey to study Abroad</h1>
        <div className='img_container'>
          <div className='canada_container flag_container'>
            <img className='flag' src={canada_img} alt="Description of the image" />
            <h1 className='country_name'>Canada</h1>
          </div>
          <div className='newZealand_container flag_container'>
            <img className='flag' src={newZealand_img} alt="Description of the image" />
            <h1 className='country_name'>New Zealand</h1>
          </div>
          <div className='usa_container flag_container'>
            <img className='flag' src={usa_img} alt="Description of the image" />
            <h1 className='country_name'>USA</h1>
          </div>
          <div className='australia_container flag_container'>
            <img className='flag' src={australia_img} alt="Description of the image" />
            <h1 className='country_name'>Australia</h1>
          </div>
          <div className='uk_container flag_container'>
            <img className='flag' src={uk_img} alt="Description of the image" />
            <h1 className='country_name'>UK</h1>
          </div>
        </div>
        <button className='btn cont1'>Enquire Now</button>
      </div>
      <div className="App">
        <ThreeComponent />
      </div>
    </div>
    <div className='tag_line'>
      <h1 className='tag_line_heading'>Unlocking Doors to a World of Possibilities </h1>
    </div>


  </>
  );
}

export default App;
