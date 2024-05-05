const TestimonialTab = ({ image, name, position, testimonial }) => {
  return (
    <div className="testimonial_tab">
      <div>
        <img src={image} />
        <div>
          <p className="testimonial_name">{name}</p>
          <p className="testimonial_position">{position}</p>
        </div>
      </div>
      <p className="testimonial">{testimonial}</p>
    </div>
  );
};
export default TestimonialTab;
