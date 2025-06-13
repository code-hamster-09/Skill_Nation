import styles from './NotFound.module.scss'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'



const NotFound = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.notFound}>
        <h1>404</h1>
        <h2>Страница не найдена</h2>
        <p>Извините, запрашиваемая страница не существует или была перемещена.</p>
        <Button to="/">Вернуться на главную</Button>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound