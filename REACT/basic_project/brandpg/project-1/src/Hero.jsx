const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero__content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                
                
                <div className="shopping">
                <div className="hero__buttons">
                    <button>Shop Now!</button>
                    <button className= "secondary_button">Category</button>
                </div>
                <p>Also Available On</p>
                <div className="brand_icons">
                    <img src="/images/brand_logo.png" alt="Brand Logo" />
                    <img src="/images/brand_logo.png" alt="Brand Logo" />
                </div>
            </div>
            </div>
            
            <div className="hero__image">
                <img src="/images/shoe_image.png" alt="Hero" />
            </div>
        </main>
    );
};

export default HeroSection;