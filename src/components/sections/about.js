import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 1000px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--blue);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 500px; // Set a maximum width for the image container

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 80%; // Adjust the size for smaller screens
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      // Removed background and border for a clean image look
      filter: none;
      width: 100%; // This will make the image fill the width of the container
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: none; // Hide the pseudo-elements to remove the background effect
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Python',
    'SciKit-Learn',
    'Pandas',
    'PyTorch',
    'TensorFlow',
    'ChromaDB',
    'MongoDB',
    'SQL',
    'R',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello Viewers! Welcome to my website. As you know, my name is Archita. From a very
              young age, I was captivated by the world of robotics, though I couldn't fully
              articulate my fascination at the time. As I grew older, I started developing an
              interest in mathematics. However, when I was comtemplating my university major, I
              enrolled in a Coursera course on Big Data, AI, and Ethics which ignited an interest in
              learning about Machine Learning, leading me to pursue a degree in Computing Science
              with a concentration in AI/ML. Ever since then, my academic journey has only
              intensified my enthusiasm for creating impactful projects in the field of Machine
              Learning and Artificial Intelligence. As I continue to expand my knowledge and skills,
              I remain eager to explore new challenges and opportunities in the AI/ML space. My
              ultimate goal, however, is to pursue a PhD focused on applying AI/ML to healthcare,
              with a specific interest in Precision Medicine.
            </p>

            <p>
              Previously, I’ve had the privilege of working at the
              <a href="https://www.rbcroyalbank.com/personal.html/">
                Generative AI Innovation lab at a Canadian Bank,
              </a>{' '}
              <a href="https://vectorinstitute.ai/">an AI research institute</a>, and a few research
              labs at <a href="https://www.sfu.ca/"> the Simon Fraser University</a> and{' '}
              <a href="https://datascienceandhealth.ubc.ca/">
                the University of British Columbia.{' '}
              </a>
              {/* <a href="https://scout.camd.northeastern.edu/">a student-led design studio</a>. My
              main focus these days is building accessible, inclusive products and digital
              experiences at <a href="https://upstatement.com/">Upstatement</a> for a variety of
              clients. */}
            </p>

            <p>
              While in university, I have been actively participating in clubs such as SFU{' '}
              <a href="https://www.sfuaxisconsulting.com/">Axis Consulting</a>,
              <a href="https://www.sfu.ca/computing/wics//">
                Women in Computing Science Club (WICS)
              </a>
              ,
              <a href="https://gdsc.community.dev/simon-fraser-university-burnaby-canada/">
                Google Developer Students Club (GDSC)
              </a>
              , and <a href="https://sfucsss.org/">Computing Science Student Society (CSSS)</a>.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
