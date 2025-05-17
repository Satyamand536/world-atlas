import { FaArrowRightLong } from "react-icons/fa6";
export const HeroSection=()=>{
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">Explore the World</h1>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring <FaArrowRightLong />
                    </button>
                </div>
                <div className="hero-image">
                    <img src="images/atlas.avif" alt="atlas" className="banner-image"/>
                </div>

            </div>
        </main>
    )
}