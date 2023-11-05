

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/DM95sq5/3.jpg)'}}>
  <div className="hero-overlay"></div>
  <div className="hero-content  text-neutral-content">
    <div className="max-w-full text-right ml-56">
      <h1 className="mb-5 text-5xl font-bold">Discover the <br /><span className="text-[#fbbd2f]">World Through Words</span> </h1>
      <p className="mb-5">Immerse yourself in a world of stories, ideas, and inspiration. <br /> Our blog is your gateway to a universe of knowledge, creativity, and exploration. <br /> Join us on a journey through the written word and be inspired to share your own unique voice with the world.</p>
      <button className="btn btn-outline btn-warning">Get Started</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;