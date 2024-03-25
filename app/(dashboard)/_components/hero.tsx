function Hero() {
  return (
    <>
      <section className="relative bg-[url(https://as2.ftcdn.net/v2/jpg/06/90/36/01/1000_F_690360142_eeVOp21jfnALPxSI8FmXoO00Ms6wqimf.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Join our
            <br className="lg:hidden"/>
            <span className="block text-rose-700">bill-splitting</span>
          </h1>

          <div className="mt-6 max-w-lg mx-auto lg:mx-0 lg:w-2/3 xl:w-1/2 text-lg">
            <div className="lg:flex lg:justify-between">
              <p className="lg:w-1/2 mb-4 lg:mb-0">3 steps to split bills with ease.</p>
              <p className="lg:w-1/2 lg:text-right">Step 1: Connect with our team for a quick demo.<br/>
              Step 2: Receive personalized bill-splitting tips.<br/>
              Step 3: Start splitting bills like a pro.</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center lg:justify-start">
            <a
              className="block px-12 py-3 text-base font-medium text-white bg-rose-600 rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              href="#">
              Join now
            </a>
          </div>
        </div>
      </div>

      </section>
    </>
  );
}
export default Hero;
