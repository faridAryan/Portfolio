import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://twitter.com/faridariyan_twe?t=WBzDAK9vv9HhrH5xgIlSFQ&s=09'>
      <BsTwitter />
      </a>
    </div>
    <div>
      <a href='https://www.facebook.com/profile.php?id=100073929597111'>
      <FaFacebookF  />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/faridaryan_insta'>
      <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
