import './Technology.scss';

const Technology = ({img, name}) => {
  return (
    <div className='technology'>
        <img className='technology-icon' src={img} alt={name} />
        <span>{name}</span>
    </div>
  )
}

export default Technology;