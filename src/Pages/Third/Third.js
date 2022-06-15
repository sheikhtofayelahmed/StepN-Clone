import React from "react";
import "./Third.css";
const Third = () => {
  return (
    <div className="third">
      <div class="pc">
        <img src="https://stepn.com/img/shoeLines.svg" alt="" />
        <div class="data">
          <div class="item">
            <span>49,123,245,234.66</span>
            <span>DISTANCE RUN (M)</span>
          </div>
          <div class="item">
            <span>3,289,317.0625</span>
            <span>CARBON OFFSET (KG)</span>
          </div>
          <div class="item">
            <span>3,053,500,923.786</span>
            <span>CALORIES BURNED (KCAL)</span>
          </div>
          <div class="item">
            <span>806,530</span>
            <span>
              DISCORD MEMBERS
              <a href="https://discord.com/invite/stepn2" >
                <img src="https://stepn.com/img/discorddata.svg" alt="" />{" "}
              </a>
            </span>
          </div>
          <div class="item">
            <span>625,199</span>
            <span>
              TWITTER FOLLOWERS
              <a href="https://twitter.com/Stepnofficial" target="_blank">
                <img src="/img/twitterdata.svg" alt="" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
