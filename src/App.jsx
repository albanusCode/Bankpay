import styles from './style'
import { Navbar, Business, Billing, CardDeal, Hero, CTA, Client, Footer, Stats, Testimonials } from './components'

const App = () => (
  <div className='bg-primary w-full overflow-hidden px-0'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Client />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
)

export default App