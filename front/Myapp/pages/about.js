import React from 'react'
import style from '../styles/white.module.css'

function About() {
  return (
    <div className={style.clk}>
      <h1>What is Web3?</h1>
      <p>Web 3.0 is still evolving and being defined, and as such, there isn't a canonical, universally accepted definition. What is clear, though, is that Web 3.0 will have a strong emphasis on decentralized applications and make extensive use of blockchain-based technologies. Web 3.0 will also make use of machine learning and artificial intelligence (AI) to help empower more intelligent and adaptive applications.

      Another aspect that is part of the emerging definition of Web 3.0 is the notion of a semantic web. Among those that have advocated for the integration of semantic technology into the web is the creator of the web, Tim Berners-Lee.

      It took over 10 years to transition from the original web, Web 1.0, to Web 2.0, and it is expected to take just as long, if not longer, to fully implement and reshape the web with Web 3.0.

      If the trend of change is traced from Web 1.0, a static information provider where people read websites but rarely interacted with them, to Web 2.0, an interactive and social web enabling collaboration between users, then it can be assumed that Web 3.0 will change both how websites are made and how people interact with them...<a className={style.direct} href='https://www.techtarget.com/whatis/definition/Web-30'>Read more</a></p>
    </div>
  )
}

export default About