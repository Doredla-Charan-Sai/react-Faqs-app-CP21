// Write your code here.
import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-cont">
      <div className="content-cont">
        <h1 className="main-head">FAQs</h1>
        <ul className="list-cont">
          {faqsList.map(eachItem => (
            <FaqItem details={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
