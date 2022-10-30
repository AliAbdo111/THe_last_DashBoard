import './Card.css'
import '../../Pages/Var.css'
import Topbar from './../topbar/Topbar';

function Card() {
      return (
        <>
     
        <div className="card">
          <div className="card1">
            <div>
              <div className="unmber">1,900</div>
              <div className="namecard">Jops</div>
              <div className="iconBox">
                <ion-icon name="eye-outline" />
              </div>
            </div>
          </div>
          <div className="card1">
            <div>
              <div className="unmber">80.00</div>
              <div className="namecard">Sna3y</div>
              <div className="iconBox">
                <ion-icon name="cart-outline" />
              </div>
            </div>
          </div>
          <div className="card1">
            <div>
              <div className="unmber">1,900</div>
              <div className="namecard">Users</div>
              <div className="iconBox">
                <ion-icon name="chatbubble-ellipses-outline" />
              </div>
            </div>
          </div>

         
        </div>
        </>
      );
    }
export default Card;
