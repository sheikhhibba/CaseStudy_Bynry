import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Dummy profile data
const profiles = [
  {
    name: 'John Doe',
    photo: 'https://via.placeholder.com/150',
    description: 'Web Developer',
    address: '1600 Amphitheatre Parkway, Mountain View, CA',
    lat: 37.42216,
    lng: -122.08427
  },
  {
    name: 'Jane Smith',
    photo: 'https://via.placeholder.com/150',
    description: 'Graphic Designer',
    address: '1 Infinite Loop, Cupertino, CA',
    lat: 37.33182,
    lng: -122.03118
  }
];

// Google Map component to display the location
const MapComponent = ({ lat, lng }) => {
  return (
    <iframe
      width="600"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${lat},${lng}&zoom=14`}
    ></iframe>
  );
};

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div>
      <h1>Profile List</h1>
      <div>
        {profiles.map((profile, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <img src={profile.photo} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <button onClick={() => handleSummaryClick(profile)}>Show Summary</button>
          </div>
        ))}
      </div>

      {selectedProfile && (
        <div>
          <h2>Map for {selectedProfile.name}</h2>
          <MapComponent lat={selectedProfile.lat} lng={selectedProfile.lng} />
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
