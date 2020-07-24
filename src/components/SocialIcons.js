import React from 'react';
import '../css/social-bar.css'

const 
  pub = process.env.PUBLIC_URL,
  iggLogo = `${pub}/i.gg-180x180.png`

const SocialIcons = () => {
  return (
    <div class="social-bar social">

      <div className="join-discord">
        <img src={iggLogo} className="img-igg" alt="join our discord" />
        <p>join our discord</p>
      </div>

      <ul class="">

      <li>
        <a class="discord" href="">
        <i class="fab fa-discord"></i>
        </a>
      </li>

      <li>
        <a class="youtube" href="">
        <i class="fab fa-youtube"></i>
        </a>
      </li>

      <li>
        <a class="instagram" href="">
        <i class="fab fa-instagram"></i>
        </a>
      </li>

      <li>
        <a class="twitter" href="">
        <i class="fab fa-twitter"></i>
        </a>
      </li>
      
      </ul>
    </div>
  )
}

export default SocialIcons;