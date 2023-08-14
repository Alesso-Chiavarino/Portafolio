import { Typewriter } from '../../config/import.config'

const TypeWriter = () => {

  return (
    <Typewriter
      words={['Frontend Developer', 'Backend Developer', 'Full Stack Developer']}
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