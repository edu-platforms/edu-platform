import React from "react";
import { Link } from "react-router-dom";
import { facebook, telegram, appStore, instagram, playMarket } from "@/assets";
import { useMedia } from 'src/libs/hooks';
// import FooterMobile from './Mobile';
import { FooterMobile } from './Mobile';


export default function Footer() {

  const { isSmallMobile } = useMedia()

  return (
    <footer>
      {isSmallMobile ? <FooterMobile /> :
        <div>
          <ul className="footer-list">
            <li>
              <h4>Lessons</h4>

              <p>1-on-1 Lessons</p>
              <p>Group Class</p>
            </li>

            <li>
              <h4>Teaching</h4>

              <Link to="/sign-up/teacher">Become a teacher</Link>
            </li>

            <li>
              <h4>Mobile apps</h4>

              <div>
                <a href="#">
                  <img src={playMarket} alt="Play Market" />
                </a>
                <a href="#">
                  <img src={appStore} alt="App Store" />
                </a>
              </div>
            </li>

            <li>
              <h4>Social links</h4>

              <div>
                <a href="#">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={telegram} alt="Telegram" />
                </a>
                <a href="#">
                  <img src={instagram} alt="Instagram" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      }
    </footer>
  );
}
