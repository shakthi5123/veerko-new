import about1 from "../assets/about-img/about1.jpeg";
import teamImg from "../assets/about-img/teamImg.png";
import CoreValues from "../components/CoreValues";
import BrandPartners from "../components/BrandPartners";


const About = () => {
  return (
    <div className=" py-16 px-6 md:px-12 lg:px-20">
      {/* title box */}
      <div className="text-center mb-20 border-4 border-[#414141] py-3  rounded-4xl  bg-[#1f65ca] text-white font-semibold leading-relaxed">
        <h3 className="text-[30px]">WELCOME TO VEERKO</h3>
        <h1 className="text-[56px]">Corporate Gifting Company</h1>
        <h2 className="text-[30px]">
          One Stop Solution for Assured Quality Corporate Gifts & Promotional
          Products
        </h2>
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold ">About Us</h2>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-6 text-gray-800">
          <p>
            Welcome to <span className="font-semibold">Veerko</span>, your
            premier destination for customized corporate gifting solutions,
            nestled in the vibrant heart of Navi Mumbai's bustling city, Vashi.
            Established in 2024, Veerko is a fresh yet dynamic entrant in the
            corporate gifting industry. In a short span of time, we have earned
            the trust of corporate clients by consistently delivering
            high-quality, customized products that perfectly align with their
            branding requirements.
          </p>
          <p>
            At Veerko, we take pride in being your go-to solution for
            personalized printing and gifting. Our diverse range of offerings
            includes branded merchandise, promotional items, and bespoke gifts,
            all designed to leave a lasting impression. Our dedicated team
            brings creativity and innovation to every project, ensuring your
            corporate gifts stand out.
          </p>
          <p>
            With a passion for precision and a commitment to excellence, we
            transform ordinary items into memorable tokens that elevate your
            brand and foster stronger professional relationships.
          </p>
        </div>

        {/* Right: Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <img
              src={about1}
              alt="team working"
              className="rounded-lg shadow-md w-full h-[280px] object-cover"
            />
          </div>
          <img
            src={about1}
            alt="team collaboration"
            className="rounded-lg shadow-md w-full h-[180px] object-cover"
          />
          <img
            src={about1}
            alt="discussion"
            className="rounded-lg shadow-md w-full h-[180px] object-cover"
          />
        </div>
      </div>

      {/* Who we are  */}
      <div className=" py-16 px-6 md:px-12 lg:px-20">
        {/* Top Section: Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Team Image */}
          <div className="flex justify-center">
            <img
              src={teamImg}
              alt="Our Team"
              className="rounded-lg shadow-md max-h-[300px] object-contain"
            />
          </div>

          {/* Right: Who We Are */}
          <div>
            <h1 className="text-3xl md:text-3xl font-bold mb-4">Who We Are</h1>
            <p className="text-gray-800 leading-relaxed">
              At <span className="font-semibold">Veerko</span>, we understand
              that corporate gifting is more than just a formality; it is a
              meaningful way to strengthen business relationships, recognize
              efforts, and enhance brand visibility. With a focus on innovation,
              customization, and quality, we aim to help our clients make a
              lasting impression through thoughtfully curated and personalized
              gifts.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="text-center">
            <h3 className="text-xl md:text-4xl font-bold mb-4">Our Mission</h3>
            <div className="bg-[#1b5fbd] border-3 border-[#414141] text-white p-6 rounded-4xl shadow-lg">
              <p className="leading-relaxed text-[16px] font-semibold">
                Our mission is to create memorable gifting experiences that
                foster stronger professional relationships. By combining
                creativity, craftsmanship, and customer-centricity, we aim to
                set new benchmarks in the corporate gifting industry and become
                the go-to partner for businesses across sectors.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="text-center">
            <h1 className="text-xl md:text-4xl font-bold mb-4">Our Vision</h1>
            <div className="bg-[#1b5fbd] border-3 border-[#414141] text-white p-6 rounded-4xl shadow-lg">
              <p className="leading-relaxed text-[16px] font-semibold">
                Veerko envisions becoming a leader in the corporate gifting
                industry by continuously innovating and exceeding client
                expectations. We aspire to expand our reach and offer a diverse
                portfolio of products that cater to evolving market needs while
                staying true to our values of trust, quality, and
                sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Core Values  */}
      <CoreValues />

      {/* Why Choose veerko  */}
      <div className="py-12 px-6">
      {/* Why Choose Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Why Choose Veerko?</h2>
          <ul className="space-y-3 text-gray-800">
            <li><span className="font-bold">Expertise :</span> A deep understanding of corporate gifting trends and needs.</li>
            <li><span className="font-bold">Innovative Designs :</span> Unique, creative, and impactful gifting solutions.</li>
            <li><span className="font-bold">Customer Focus :</span> A dedicated team committed to your satisfaction.</li>
            <li><span className="font-bold">Trusted by Clients :</span> A growing list of satisfied corporate clients across industries.</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={teamImg}
            alt="Why Choose Veerko"
            className="rounded-xl shadow-md w-full md:w-4/5"
          />
        </div>
      </div>

      {/* We Reached So Far Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">We Reached So Far</h2>
        <div className="bg-[#1b5fbc] border-3 border-[#414141] text-white rounded-xl shadow-md grid grid-cols-2 md:grid-cols-5 gap-6 py-6 px-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">1,000 +</h3>
            <p>Diverse Products</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">20k +</h3>
            <p>Gifts Delivered</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">2000 +</h3>
            <p>Customized Products</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">500 +</h3>
            <p>Happy Clients</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">1K +</h3>
            <p>PAN India Deliveries</p>
          </div>
        </div>
      </div>
    </div>

    <BrandPartners />
      
    </div>
  );
};

export default About;
