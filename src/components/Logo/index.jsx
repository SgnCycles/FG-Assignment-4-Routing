import styles from './logo.module.css'
import siteLogo from '../../assets/logos/logo.png'

const Logo = () => {

  return (
    <div>
      <img src={siteLogo} alt="Site Logo" height={50} width='auto'/>
    </div>
  )
}

export default Logo