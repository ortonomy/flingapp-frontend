// basic react imports
import React from 'react';

// dependent components
import LandingButton from './LandingButton';

// styles
import styles from './LandingHero.module.css';

// copy
import { Hero as HeroText } from '../../assets/copy/Landing';

const LandingHero = (props) => {
  return (
    <div className={styles.LandingHero}>
      <div className={styles.LandingHeroLeft}>
        <h1>{HeroText.heroTitle1}</h1>
        <h1>{HeroText.heroTitle2}</h1>
        <h1>{HeroText.heroTitle3}</h1>
        <p>{HeroText.heroSubTitle1}</p>
        <div className={styles.LandingHeroCTA}>
          <LandingButton 
            text={HeroText.heroButtonText1}
            size='cta'
            color='blue'
            icon='fa-rocket'
          />
        </div>
      </div>
      <div className={styles.LandingHeroRight}>
      </div>
      
    </div>
  )
}

export default LandingHero;