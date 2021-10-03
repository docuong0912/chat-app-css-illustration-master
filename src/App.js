import man from './images/avatar.jpg';
import dog1 from './images/dog-image-1.jpg';
import dog2 from './images/dog-image-2.jpg';
import dog3 from './images/dog-image-3.jpg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="phone">
        <div className="phone-header">
          <div className="info">
            <img src={man} alt="some random dude"/>
            <div className="status">
              <b>Samuel Green</b>
              <p>Available to Walk</p>
            </div>
          </div>
          <button className="more-btn" type="button"></button>
        </div>
        <div className="chat-box">
            <div className="conversation">
              <div className="left chat">
                <div className="texting t1">
                  <div className="loading"></div>
                </div>
                <p className="dialog d1">That sounds great. I'd be happy to discuss more.</p>
                <p className="dialog d2">Could you send over some more pictures of your dog, please?</p>
              </div>
              <div className="right chat">
                <div className="texting t2">
                    <div className="loading"></div>
                  </div>
                <div className="dialog d3">
                  <img src={dog1} alt="happy dog"/>
                  <img src={dog2} alt="happy dog"/>
                  <img src={dog3} alt="happy dog's carrying a branch"/>
                </div>
                <p className="dialog d4">Here are a few pictures. She's a happy girl!</p>
                <p className="dialog d5">Can you make it?</p>
              </div>
              <div className="left chat">
                <div className="texting t3">
                    <div className="loading"></div>
                  </div>
                <p className="dialog d6">She looks so happy! The time we discussed works. How long shall i take her out for?</p>
                <div className="booking dialog d7">
                  <div className="radio-btn"/>
                  <p>30 minute walk</p>
                  <p className="price">$29</p>
                </div>
                <div className="booking dialog d8">
                <div className="radio-btn"/>
                  <p>1 hour walk</p>
                  <p className="price">$49</p>
                </div>
              </div>
              
            </div>
            <input readOnly  type="text" placeholder="Type a message ..."/>
            <button className="send-btn" type="button"></button>
        </div>
        
      </div>
      <main>
        <h1>Simple booking</h1>
        <p className="paragraph">Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</p>
      </main>
      
    </div>
  );
}

export default App;
