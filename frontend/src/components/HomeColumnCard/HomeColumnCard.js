import {React} from 'react'
import { Link , Route} from 'react-router-dom'
import SCollectionButton from '../SCollectionButton'
import './HomeColumnCard.css'

export default function HomeColumnCard() {
    return (
        <>
            <div className="blog-card">
                <div className="meta">
                    <div className="photo"></div>
                </div>
                <div className="description">
                    <h2>TOOLS & ACCESSORIES</h2>
                    <h1>Handmade in small batches</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    <p className="read-more"><Route render={({history}) => <SCollectionButton history={history}></SCollectionButton>}></Route></p>
                </div>
            </div>
            <div className="blog-card alt">
                <div className="meta">
                    <div className="photo2"></div>
                </div>
                <div className="description">
                    <h2>ABOUT US</h2>
                    <h1>For balanced living.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    <p className="read-more"><Link to="/about-us">READ MORE</Link></p>
                </div>
            </div>
        </>
    )
}
