import React from 'react';
import Emoji from './Emoji';

const PastLaunch = ({ pastLaunch, pastLaunchID, setPastLaunchID }) => {
  console.log(pastLaunch.links.flickr_images);

  return (
    <div>
      <h2>Past</h2>
      <div className="pagination">
        <button
          style={{ color: 'black' }}
          onClick={() => setPastLaunchID(pastLaunchID + 1)}
        >
          previous
        </button>
        <span>{pastLaunch.id}</span>
        <button
          style={{ color: 'black' }}
          onClick={() => setPastLaunchID(pastLaunchID - 1)}
        >
          next
        </button>
      </div>
      <span>
        <Emoji emoji="🗓" />
        {pastLaunch.launch_date_local}
      </span>
      <h3>
        Mission
        <Emoji emoji="📌" />:{pastLaunch.mission_name}
      </h3>
      {
        <div>
          <h2>Rocket details:</h2>
          <h3>
            Rocket
            <Emoji emoji="🚀" />:{pastLaunch.rocket.rocket.name}
          </h3>
          <p>
            Diameter:
            {pastLaunch.rocket.rocket.diameter.meters + 'm'}
          </p>
          <p>
            Height:
            {pastLaunch.rocket.rocket.height.meters + 'm'}
          </p>
          <p>
            Mass:
            {pastLaunch.rocket.rocket.mass.kg + 'kg'}
          </p>
          <ul>
            Links:
            <li>
              <a href={pastLaunch.links.video_link}>Video</a>
            </li>
            <li>
              <a href={pastLaunch.links.article_link} target="_blank">Article</a>
            </li>
            <li>
              Images:
              <ul>
                {pastLaunch.links.flickr_images.map(link => (
                  <li key={link}>
                    <img alt="rocket-launch" width="100%" src={link} />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      }
    </div>
  );
};

export default PastLaunch;
