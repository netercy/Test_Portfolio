import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;
          <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>
            {company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          &nbsp;
        </span>
        <p className='font-medium w-full md:text-sm'>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>And so on...</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute top-0 left-9 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />
        <ul className='w-full flex flex-col items-center justify-between ml-4 xs:ml-2'>
          <Details
            position='I really love to be a bilingual person and even more...'
            work='I know English but I am basic in Dutch and German. I hope to have the opportunity to learn more about other languages and cultures'
          />
          <Details
            position='Traveling is one of the most important things in my life...'
            work='As someone who was born in a traveling family, I think everyone should travel everywhere and have a chance to experience other peoples lifes and try to understand and enjoy it.'
          />
          <Details
          className='m'
            position='I am into music couse I think it can help the soul for being strong...'
            work="I've play Tombak for four years ago. But now I still love to play piano and in adition listening to the music is one part of my life"
          />
          <Details
            position='I Love books that could help me to improve myself and my personality...'
            work='Books like 48 laws of power or Never Split the Difference and ... really interest me...'
          />
        </ul>
      </div>
    </div>
  );
};
export default Experience;
