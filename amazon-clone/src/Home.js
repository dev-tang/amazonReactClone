import React from 'react'
import Product from "./Product"
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/OWY0MGNjMDYt/OWY0MGNjMDYt-NWU0Y2IzZDgt-w3000._CB407769481_.jpg"
                alt="" 
            />
            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
