import React from 'react';
import Button from "../components/Button";
import uche from "../images/uche.jpg";
import github from "../images/github.png";
import slack from "../images/slack.png";
import { info } from "../assets/info";
import { BiCamera} from 'react-icons/bi';
import Share from "../components/Share";

const Home = () => {
  return (
    <div>
      <Share />
      <section
        id="profile"
        className="profile flex flex-col justify-center items-center mt-10 mb-5 py-5 px-5"
      >
        <div className="img-bg relative">
            <img
              id='profile__img'
              src={uche}
              alt="Photo of Nigeria's most decorated Engineer"
              className="w-24 h-24 rounded-full"
            />
            <span className="cam-icon w-fit"><BiCamera fontSize='1.5rem'/></span>
        </div>
        <h1 id='twitter' className="font-bold text-xl my-1 py-2 px-3">@Maazi_Of_042</h1>
        <h1 id='slack' className="hidden font-bold text-xl my-1 py-2 px-3">Uche.Dev</h1>
      </section>
      {info.map((data, index) => {
        return (
          <Button
            key={index}
            url={data.url}
            title={data.title}
            id={data.id}
            internal={data.internal}
          />
        )
      })}
      <div className="socials justify-center items-center py-6 flex">
        <img src={slack} alt="slack icon" className="m-2 w-6 h-6" />
        <img src={github} alt="github icon" className="m-2 w-6 h-6" />
      </div>
    </div>
  )
}

export default Home;