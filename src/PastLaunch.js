import React from 'react';
import Emoji from './Emoji';
import Links from './Links';
import Gallery from './Gallery';

const PastLaunch = ({ pastLaunch, pastLaunchID, setPastLaunchID }) => {
  console.log(pastLaunch.links.flickr_images);

  return (
    <>
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
          <Links links={pastLaunch.links} />
          <Gallery images={pastLaunch.links.flickr_images} />
        </div>
				<button
					onClick={() => window.scrollTo(0, 0)}
					style={{
						fontSize: '1.5rem',
						width: '100%',
						padding: '0.5rem',
						marginTop: '1rem'
					}}
				>
				go to next launch
			</button>

    </>
  );
};

export default PastLaunch;
