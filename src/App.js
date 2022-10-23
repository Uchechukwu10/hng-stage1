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
      <Button
        url={"https://training.zuri.team/"}
        title={"Zuri Team"}
        desc={"Gain access to enough knowledge to introduce and aid your success in the tech industry"}
      />
      <Button
        url={"http://books.zuri.team"}
        title={"Zuri Books"}
        desc={"Unlimited access to books on design and coding"}
      />
      <Button
        url={"https://books.zuri.team/python-for-beginners?ref_id=Uchechukwu"}
        title={"Python Books"}
        desc={"Acquire books that will help you pick up python very quickly"}
      />
      <Button
        url={"https://background.zuri.team"}
        title={"Background Check for Coders"}
        desc={"Gain access to enough knowledge to introduce and aid your success in the tech industry"}
      />
      <div className="socials justify-center items-center py-6 hidden md:flex">
        <img src={slack} alt="slack icon" className="m-2 w-6 h-6" />
        <img src={github} alt="github icon" className="m-2 w-6 h-6" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
