import './Task.css';
import heart from './images/heart.jpg'
import location from './images/location.png'
export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    return (
      <div className="outer">
          <div className="inner1"></div>
          <div className="inner2">
            <div className="inner2-1">
              <div className="in1"><h2>2023 Maruti Alto K10 VXI plus</h2> <button>CERTIFIED</button><img src={heart} alt="" /></div>
              <div className="in2"><p>5846 kms</p><h1>.</h1><p>Petrol</p><h1>.</h1><p>Manual</p><h1>.</h1><p>1st Owner</p></div>
              <div className="in3"><h2>$5.21 Lakh</h2><a href="">EMI starts@$12,932/mo</a></div>
              <div className="in4">
                <div className="in4-1">
                <img src={location} alt="" /><p>Yelahanka, Bangalore</p><input type="checkbox" />Compare
                </div>
                <button>View Seller Details</button>
                </div>
            </div>
            <div className="inner2-2"><h3>Trending Car! </h3><p> High chances of sale in next 6 days</p></div>
              
          </div>
        </div>
    );
  }