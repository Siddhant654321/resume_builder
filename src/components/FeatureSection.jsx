import "./FeatureSection.css";

const FeatureSection = () => {
  const features = [
    {
      heading: "FREE TO USE",
      description:
        "Our resume builder is completely free to use, empowering you to create and download resumes without worrying about any fees or hidden charges.",
    },
    {
      heading: "ATS COMPLIANT",
      description:
        "Increase your job application success with resumes optimized for Applicant Tracking Systems (ATS), ensuring your profile gets noticed by employers.",
    },
    {
      heading: "MULTIPLE TEMPLATES",
      description: "Our resume builder offers you a curated list of templates to choose your next great resume. Every template has been created with your success in mind.",
    },
    {
      heading: "BEST QUALITY RESUME",
      description:
        "We make sure that your next resume is designed to highlight your skills and experiences with clarity, precision, and visual appeal setting you apart from the competition.",
    },
  ];
  return (
    <div className="feature_section">
    <h1 className="section_main_heading">FEATURES</h1>
      <div className="feature_container">
        {features.map((feature_data, index) => (
          <div className="feature_box" key={index}>
            <p className="feature_subheading">{feature_data.heading}</p>
            <p className="feature_description">{feature_data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeatureSection;
