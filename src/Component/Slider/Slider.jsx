import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css";

const Slider = ({ slider }) => {

    if (!slider || slider.length === 0) {
        return (
            <>
                <div className="bg-danger text-center">
                    <p className="fw-bold text-white pt-2">Failed to fetch - No content to display in the Slider.</p>
                    <span className="spinner-border spinner-border-sm mb-2 text-white"></span>
                </div>
            </>
        )
    }

    return (
        <div className='slider'>
            <Carousel data-bs-theme="dark">
                {slider.map((elem) => {
                    return (
                        <Carousel.Item key={elem.id}>
                            <img
                                className="d-block w-100"
                                src={elem.url}
                                alt={elem.alt}
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default Slider;
