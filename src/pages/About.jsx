const AboutPage = () => {
  return (
    <section className="section flex flex-col items-center justify-center bg-[#000000] w-[100%] pt-10 pr-[10px] pl-[10px] text-[#fff]">
      <div className="aboutUS flex flex-col items-center justify-center w-[90%] rounded-lg gap-[25px] p-[20px]">
        <div>
          <img
            src={
              "https://res.cloudinary.com/chikadibia/image/upload/v1717258515/My-GitHub-DP_fcjzv3.jpg"
            }
            alt="My-Pic"
            className="rounded-[30px] w-[230px] h-[250px]"
          />
        </div>

        <div className="flex flex-col gap-[15px] items-center justify-center text-[17px] w-[90%]">
          <div>
            We are a premier software development firm dedicated to transforming
            ideas into innovative, high-quality software solutions. Since our
            inception, we have been at the forefront of technological
            advancements, offering a comprehensive range of services tailored to
            meet the unique needs of our diverse clientele.
          </div>

          <div>
            We specialize in custom software development, mobile and web
            application development, cloud computing, and IT consulting. Our
            team of skilled professionals leverages cutting-edge technologies
            and best practices to deliver solutions that are not only robust and
            scalable but also aligned with your business objectives.
          </div>

          <div>
            Choosing us means partnering with a team that is passionate about
            technology and driven by a desire to help you succeed. Our
            collaborative approach ensures that we understand your vision and
            work diligently to bring it to life. Whether you are a startup
            looking to make a mark or an established enterprise seeking to
            enhance your operations, we have the expertise and experience to
            help you achieve your goals.
          </div>

          <div>
            Join us on a journey of innovation and excellence. Let’s build the
            future together.
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
