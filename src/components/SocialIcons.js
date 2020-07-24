import React from 'react';
import '../css/social-bar.css'

const 
  pub = process.env.PUBLIC_URL,
  iggLogo = `${pub}/i.gg-180x180.png`,
  links = {
    discord: 'https://discord.gg/XB6mepj',
    itch: 'https://icarusgg.itch.io/',
    youtube: 'https://www.youtube.com/channel/UCoNB91kdKkvFBR41lYRMNYw?view_as=subscriber',
    instagram: 'https://www.instagram.com/icarusggwp/',
    twitter: 'https://twitter.com/icarusggwp'
  }

const SocialIcons = () => {

  const joinDiscord = () => {
    window.open(`${links.discord}`)
  }

  return (
    <div class="social-bar social">

      <div 
        className="join-discord clickable"
        onClick={() => joinDiscord() }
      >
        <img src={iggLogo} className="img-igg" alt="join our discord" />
        <p>join our discord</p>
      </div>

      <ul class="">
        <li>
          <a class="discord" href={`${links.discord}`} target="_blank">
          <i class="fab fa-discord"></i>
          </a>
        </li>

        <li>
          <a class="itch.io" href={`${links.itch}`} target="_blank">
          <i class="fab fa-itch-io"></i>
          </a>
        </li>

        <li>
          <a class="youtube" href={`${links.youtube}`} target="_blank">
          <i class="fab fa-youtube"></i>
          </a>
        </li>

        <li>
          <a class="instagram" href={`${links.instagram}`} target="_blank">
          <i class="fab fa-instagram"></i>
          </a>
        </li>

        <li>
          <a class="twitter" href={`${links.twitter}`} target="_blank">
          <i class="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialIcons;