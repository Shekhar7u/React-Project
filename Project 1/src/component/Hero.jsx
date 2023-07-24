const Hero = () => {
    return (
        <main className="hero">
            <div className="hero-content">
                <h1>Your Feet Deserve The Best</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatum quas dolorum, reprehenderit, a eveniet iusto laborum quam expedita, suscipit unde veritatis iure possimus</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Avaliable on</p>
                    <div className="brand-icon">
                        <img src="/image/amazon.png" alt="amazon.logo" />
                        <img src="/image/flipkart.png" alt="flipkart.logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/image/shoe_image.png" alt="hero image" />
            </div>
        </main>
    )
}
export default Hero;