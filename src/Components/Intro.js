import React from 'react';
import { HOME_IMAGE, LOGO_IMAGE, WELCOME_TEXT, TOWNSHIP_NAME_INTRO, DESCRIPTION_INTRO, SEARCH_BUTTON_TEXT } from './Constants/IntroConstants';
import Buttons from './Buttons';
const Intro = () => {
  return (
    <div>
      <img className='absolute inset-0 w-full h-full object-fill' src={HOME_IMAGE} alt='background image' />
      <div className='bg-black relative bg-opacity-50 text-white'>
        <img className='w-28 h-28 relative' src={LOGO_IMAGE} alt='logo' />
        <div className='p-48 text-center'>
          <h4>{WELCOME_TEXT}</h4>
          <h1 className='text-6xl p-10'>{TOWNSHIP_NAME_INTRO}</h1>
          <p className='text-balance'>{DESCRIPTION_INTRO}</p>
          <Buttons text={SEARCH_BUTTON_TEXT} color="white" className="border-white" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
