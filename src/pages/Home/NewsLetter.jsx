const NewsLetter = () => {

    const handleSubmit = () => {
        alert("Thanks for Subscribing to our newsletter")
    }

  return (
    <div>
      <div className="my-20">
        <div className="text-center">
          <h2 className="text-4xl">Subscribe to Our Newsletter</h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-24 mt-10">
          <div>
            <div className="avatar indicator">
              
              <div className="w-20 h-20 rounded-lg">
                <img src="https://i.ibb.co/hBw19FZ/s5.jpg" />
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="Email"
              type="email"
              required
            />
            
            <input  type="submit" className="btn join-item rounded-r-full" value="Subscribe" />
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
