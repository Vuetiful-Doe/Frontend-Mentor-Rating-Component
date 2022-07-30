import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.div)`
  padding: 2.5em 2em;
  border-radius:2em;
  width: 28em;
  min-height: 28em;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  /* backface-visibility:hidden; */
  perspective: 1000px;
  transform-origin:50% 50%;
  background: var(--dark-blue) linear-gradient(to bottom, rgba(2,2,2,.25) 60%, rgba(2,2,2,.4));
`;

export const Title = styled.h3`
  font-weight: 700;
  font-weight: 400;
  color: var(--white);
  text-align: left;
  font-size: 1.75rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  text-align: left;
  color: var(--medium-grey);
  font-size: 1.1rem;
  /* letter-spacing: .5px; */
  font-weight:500;
  line-height: 1.75;
`;

export const IconContainer = styled(motion.div)`
  display: flex;
  width: 3em;
  height: 3em;
  justify-content: center;
  align-items: center;
  border-radius: 10em;
  background: rgba(255,255,255,.05);
`;

export const RatingButton = styled.button`
  width: 3.25em;
  height: 3.25em;
  padding: 1.25em;
  margin: 2em 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  
  border:none;
  border-radius:50em;
  
  background: hsla(var(--medium-grey-2),16%);
  color: var(--medium-grey);
  
  font-weight: 700;
  font-size: 1rem;
  transition: .27s ease-in-out;
  
  &.selected{
    background: var(--light-grey);
    color: var(--white);
  }

  &:hover {
    color: var(--white);
    background: var(--orange);
    cursor: pointer;
  }

  

  `;

export const RatingContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  /* background:lime; */
`;

export const RatingMessage = styled(motion.div)`
  background: hsla(var(--medium-grey-2),16%);
  border-radius: 10em;
  padding: .75em 1.5em;
  width:max-content;
  color: var(--orange);
  letter-spacing:1px;
`

export const SubmitButton = styled.button`
  background: var(--orange);
  padding: 1rem;
  width: 100%;
  border-radius: 10em;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--white);
  letter-spacing: 2px;
  outline:none;
  border:none;
  cursor: pointer;
  
  transition: var(--default-transition);

  :hover:not(:disabled){
    background: var(--white);
    color: var(--orange);
  }

  :disabled{
    /* background: lime; */
    opacity: .5;
    cursor: not-allowed;
  }
`;



