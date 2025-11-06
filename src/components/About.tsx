import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 sm:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              About DreamHomes
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Welcome to Laker Group Ltd., established in 2023, and proudly serving as your dedicated partner in the real estate market. We founded Lakers Group with a clear vision, offer a comprehensive and accessible platform for individuals and businesses seeking diverse property solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine local market knowledge with innovative technology to offer you the best possible experience. Whether you're a first-time buyer or an experienced investor, we're here to make your real estate dreams come true.
            </p>
          </div>
          <div className="relative">
            <img
              src={teamPhoto}
              alt="DreamHomes Team"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
