import TestimonialTab from "./TestimonialTab";
import "./TestimonialsSection.css";
import testimonial_1 from "../assets/testimonial_images/1.jpg";
import testimonial_2 from "../assets/testimonial_images/2.jpg";
import testimonial_3 from "../assets/testimonial_images/3.jpg";
import testimonial_4 from "../assets/testimonial_images/4.jpg";
import testimonial_5 from "../assets/testimonial_images/5.jpg";
import testimonial_6 from "../assets/testimonial_images/6.jpg";
import testimonial_7 from "../assets/testimonial_images/7.jpg";
import testimonial_8 from "../assets/testimonial_images/8.jpg";
import testimonial_9 from "../assets/testimonial_images/9.jpg";

const TestimonialsSection = () => {
  const testimonials_first_set = [
    {
      image: testimonial_1,
      name: "ALEX JOHNSON",
      position: "Web Developer",
      testimonial:
        "Absolutely transformed my job search with fantastic and professional resume templates. It's free, effective, and the results are truly professional!",
    },
    {
      image: testimonial_2,
      name: "ELIJAH BENNETT",
      position: "Freelance Writer",
      testimonial: `As a freelance writer juggling various gigs, I found the resume builder to be an invaluable tool.

      The templates are sleek and the suggestions specific to my field elevated my resume.

      It's as if I had a career coach right there with me, guiding each step.`,
    },
    {
      image: testimonial_3,
      name: "SAMANTHA LEE",
      position: "Marketing Specialist",
      testimonial:
        "This resume builder is a game-changer! Landed multiple interviews quickly with its help. Free, user-friendly, and highly effective for professionals.",
    },
  ];

  const testimonials_second_set = [
    {
      image: testimonial_4,
      name: "RAJ PATEL",
      position: "Graphic Designer",
      testimonial:
        "As a designer, finding a tool that combines creativity with professionalism like this is rare. It's simple, free, and absolutely fantastic. Absolutely loved it!",
    },
    {
      image: testimonial_5,
      name: "EMILY SMITH",
      position: "Project Manager",
      testimonial:
        "Secured my dream job thanks to this incredible tool. The resumes it generates are spot-on, showcasing skills in the best light possible!",
    },
    {
      image: testimonial_6,
      name: "SOPHIA RODRIGUEZ",
      position: "Research Scientist",
      testimonial: `Transitioning from academia to the corporate world was daunting until I found this website.
  
        The guided process helped me translate my experience into industry-speak.
  
        I was impressed by the customization options that allowed my personality to shine through.`,
    },
  ];

  const testimonials_third_set = [
    {
      image: testimonial_7,
      name: "LUCAS FERNANDEZ",
      position: "PR Intern",
      testimonial: `Starting as an intern in the competitive field of public relations requires a standout resume. This platform was a game-changer for me; it made the daunting task of resume building simple and effective.
  
        I noticed an increase in replies and enquiries from different recruiters and companies after I started using the resume I created on this platform.`,
    },
    {
      image: testimonial_8,
      name: "CARLOS GARCIA",
      position: "Software Engineer",
      testimonial:
        "This tool made resume writing a breeze and helped me stand out in the tech industry. Brilliant, easy to use, and surprisingly free!",
    },
    {
      image: testimonial_9,
      name: "FIONA CHEN",
      position: "HR Consultant",
      testimonial:
        "From an HR perspective, this resume builder is a gift to job seekers. It significantly improves how candidates present themselves!",
    },
  ];

  return (
    <div className="testimonials_container">
      <h1 className="section_main_heading testimonials_heading">
        TESTIMONIALS
      </h1>
      <div className="testimonial_tab_main_container">
        <div className="testimonial_tab_sub_container">
          {testimonials_first_set.map((testimonial, index) => (
            <TestimonialTab key={index} {...testimonial} />
          ))}
        </div>
        <div className="testimonial_tab_sub_container">
          {testimonials_second_set.map((testimonial, index) => (
            <TestimonialTab key={index} {...testimonial} />
          ))}
        </div>
        <div className="testimonial_tab_sub_container">
          {testimonials_third_set.map((testimonial, index) => (
            <TestimonialTab key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
