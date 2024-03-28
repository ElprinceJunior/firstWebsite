import Navbar from "./component/Navbar/navbar"
import Intro from "./component/Intro/intro"
import About from "./component/about/about"
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer"
import Clinic from "./component/clinic/clinic"
import Videos from "./component/videos/videos"



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Clinic/>
      <Videos/>
      <Contact/>
      <Footer/> 




    </div>
  );
}

export default App;
