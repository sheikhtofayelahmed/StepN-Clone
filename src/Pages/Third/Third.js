import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Third.css";
const Third = () => {
  const [distance, setDistance] = useState(49165824534.66);
  useEffect(() => {
    setDistance(distance + 0.01083);
  }, [distance]);
  const [carbon, setCarbon] = useState(3289318.66);
  useEffect(() => {
    setCarbon(carbon + 0.000000383);
  }, [carbon]);
  const [calories, setCalories] = useState(3053502126);
  useEffect(() => {
    setCalories(calories + 0.000253);
  }, [calories]);
  return (
    <div className="third">
      <div class="pc">
        <img src="https://stepn.com/img/shoeLines.svg" alt="" />
        <div class="data">
          <div class="item">
            <span>{distance.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            <span>DISTANCE RUN (M)</span>
          </div>
          <div class="item">
            <span>{carbon.toFixed(4).toString().replace(/\B(?=(\d{4})+(?!\d))/g, ",")}</span>
            <span>CARBON OFFSET (KG)</span>
          </div>
          <div class="item">
            <span>{calories.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            <span>CALORIES BURNED (KCAL)</span>
          </div>
          <div class="item">
            <span>806,530</span>
            <span>
              DISCORD MEMBERS
              <a href="https://discord.com/invite/stepn2">
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
