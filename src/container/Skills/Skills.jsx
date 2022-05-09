
import React, { useState,useEffect,useRef } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { urlFor, client } from '../../client';
import image from '../../assets/video.mp4';


const Skills = () => {
 const [playVideo, setPlayVideo] = useState(false);
  const [skills, setSkills] = useState([]);
 const vidRef = useRef();
  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  const handleVideo=()=>{
     setPlayVideo(!playVideo);
  if (playVideo) {
              vidRef.current.pause();
            }
  else {
              vidRef.current.play();
            }
  }

  return (
    <>
     <h2 className="head-text">Skills</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className='app__video' onClick={() =>handleVideo() }>
          <video 
          src={image}
          ref={vidRef}
          type='video/mp4'
          controls={false}
          />
          <div className='app__video-overlay flex__center'>
            <div className='app__video-overlay_circle flex__center'
                      >
          {playVideo ? 
            <BsPauseFill color="#fef4f5" fontSize={30}  />
           : 
            <BsFillPlayFill color="#fef4f5" fontSize={30} />
          }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);