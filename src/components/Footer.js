import React from 'react';
import '../css/Footer.css'

const 
  pub = process.env.PUBLIC_URL,
  iggLogo = `${pub}/i.gg-180x180.png`,
  links = {
    discord: 'https://discord.gg/XB6mepj',
    itch: 'https://icarusgg.itch.io/',
    youtube: 'https://www.youtube.com/channel/UCoNB91kdKkvFBR41lYRMNYw?view_as=subscriber',
    instagram: 'https://www.instagram.com/icarusggwp/',
    twitter: 'https://twitter.com/icarusggwp',
    github: 'https://github.com/icarus-gg'
  }

const Footer = () => {

  const joinDiscord = () => {
    window.open(`${links.discord}`)
  }

  return (
    <div class="social-bar social">

      <div 
        className="join-discord clickable"
        onClick={() => joinDiscord() }
      >
        <div>
        <img src={iggLogo} className="img-igg" alt="join our discord" />
        </div>
        <div>
        <p>join our discord</p>
        </div>
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

        <li>
          <a class="github" href={`${links.github}`} target="_blank">
          <i class="fab fa-github-square"></i>
          </a>
        </li>
      </ul>

      <p>Indie Game Dev</p>

    </div>

  )
}

export default Footer;