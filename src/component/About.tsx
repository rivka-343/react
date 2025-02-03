import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1>About Our Website</h1>
                <p className="about-description">
                    Our website was created out of a great love for food and a diverse kitchen. Here, you'll find a wide range of delicious, healthy, and simple recipes that suit everyone – whether you're into vegan food, gluten-free options, or just love good food.
                </p>
                <p>
                    Each recipe on our site is carefully selected, and every one is accompanied by detailed instructions and clear steps to make it easy and friendly for everyone to cook.
                </p>
                <h2>Why Choose Us?</h2>
                <p>
                    Our website offers a wide variety of recipes for every person and every type of meal – from everyday dishes to special festive meals.
                </p>
                <h3>Our Advantages:</h3>
                <ul>
                    <li>A wide range of recipe categories</li>
                    <li>Clear steps with images for guidance</li>
                    <li>Creative ideas for every celebration or event</li>
                </ul>
                <p className="about-footer">
                    We are here to give you the tools to succeed in the kitchen with recipes that will suit every meal and every taste.
                </p>
            </div>
        </div>
    );
};

export default About;
