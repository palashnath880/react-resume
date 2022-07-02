import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialItem from "../SubComponants/TestimonialItem";
import TestimonialData from "../SubComponants/TestimonialData";
import { Autoplay } from 'swiper';

export default function TestimonialArea() {
    return (
        <section id="testimonial-area" className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title">
                        <h2>CLIENT TESTIMONIALS</h2>
                    </div>
                </div>
            </div>
            <div className="row pt-5 justify-content-center">
                <div className="col-md-8">
                    <div className="testimonail-content owl-carousel">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                            >
                            { TestimonialData.map((item, index) => <SwiperSlide key={index}><TestimonialItem TestimonialImg={item.image} TestiClientName={item.name} TestiClientDescrip={item.desciption} /></SwiperSlide> ) }    
                        </Swiper>
                                
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}