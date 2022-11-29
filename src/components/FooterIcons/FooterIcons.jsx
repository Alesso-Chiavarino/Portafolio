import './FooterIcons.scss';

const FooterIcons = () => {
  return (
    <div className='footer-network-container'>
        <a href="https://wa.me/3513079987" target="_blank"> <i className='whatsapp fa fa-whatsapp'></i> </a>
        
        <a href='https://github.com/Alesso-Chiavarino' target="_blank">
            <i className='github fa fa-github'></i>
        </a>
        <a href='https://twitter.com/alesso_1912' target="_blank">
            <i className='twitter fa fa-twitter'></i>
        </a>
        <a href='https://www.facebook.com/alessandro.chiavarino' target="_blank">
            <i className='facebook fa fa-facebook'></i>
        </a>
        <a href='https://www.instagram.com/alesso_chiavarino/' target="_blank">
            <i className='instagram fa fa-instagram'></i>
        </a>
    </div>
  )
}

export default FooterIcons;