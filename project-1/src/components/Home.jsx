function Home() {
    return (
        <section className="products">
            <h2>Featured Products</h2>

            <div className="product-container">

                <div className="product-card">
                    <div className="product-image">📱</div>
                    <h3>iPhone 16</h3>
                    <p>₹65,900</p>
                    <button>Buy Now</button>
                </div>

                <div className="product-card">
                    <div className="product-image">💻</div>
                    <h3>MacBook Air</h3>
                    <p>₹1,14,900</p>
                    <button>Buy Now</button>
                </div>

                <div className="product-card">
                    <div className="product-image">⌚</div>
                    <h3>Smart Watch</h3>
                    <p>₹4,999</p>
                    <button>Buy Now</button>
                </div>

                <div className="product-card">
                    <div className="product-image">👟</div>
                    <h3>Running Shoes</h3>
                    <p>₹2,999</p>
                    <button>Buy Now</button>
                </div>

            </div>
        </section>

    )

}
export default Home