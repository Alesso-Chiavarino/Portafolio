import { Typewriter } from 'react-simple-typewriter'

const TypeWriter = () => {

  return (
          <Typewriter
            sty
            words={['Front end Developer', 'Backend Developer', 'Full Stack Developer']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
  )

}

export default TypeWriter;