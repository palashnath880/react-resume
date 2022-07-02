export default function TestimonialItem({TestimonialImg, TestiClientName, TestiClientDescrip }) {
    return (
        <div className={ `single-testimonial text-center` }>
            <img src={TestimonialImg} alt={TestimonialImg} className="client-thum" />
            <h3>{ TestiClientName }</h3>
            <p className="m-0">{ TestiClientDescrip }</p>
        </div>
    );
}