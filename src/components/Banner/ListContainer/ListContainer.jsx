import './ListContainer.scss';

const ListContainer = () => {

    const links = [
        {
            name: "About me",
            path: "#"
        },
        {
            name: "Projects",
            path: "#"
        },
        {
            name: "Contact",
            path: "#"
        }
    ]

  return (
    <div className='nav-link-container'>
        {links.map( (link, i) => <p className='nav-link' key={i}>{link.name} </p> )}
    </div>
    
  )
}

export default ListContainer