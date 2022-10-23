import "./App.css";
import Button from "./components/Button";
import Footer from "./components/Footer";
import uche from "./images/uche.jpg";
import github from "./images/github.png";
import slack from "./images/slack.png";
import { info } from "./assets/info";

function App() {
  return (
    <div className="App">
      <div
        id="profile"
        className="profile flex flex-col justify-center items-center my-5 py-5 px-5"
      >
        <img
          src={uche}
          alt="Photo of Nigeria's most decorated Engineer"
          className="w-24 h-24 rounded-full"
        />
        <h1 className="font-bold text-xl my-1 py-2 px-3">@Maazi_Of_042</h1>
      </div>
      {info.map((data, index) => {
        return (
          <Button
            key={index}
            url={data.url}
            title={data.title}
            desc={data.desc}
          />
        )
      })}
      <div className="socials justify-center items-center py-6 hidden md:flex">
        <img src={slack} alt="slack icon" className="m-2 w-6 h-6" />
        <img src={github} alt="github icon" className="m-2 w-6 h-6" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
