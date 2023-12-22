const CardComponent = () => {
  return (
    <article className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] sm:w-[35rem] rounded-xl overflow-hidden bg-whiteFn shadow-sm mx-4 ">
      {/* IMAGE PRODUCT */}
      <div>
        <img
          src="images/image-product-desktop.jpg"
          alt="product image"
          className="object-cover hidden sm:block"
        />
        <img
          src="images/image-product-mobile.jpg"
          alt="product image"
          className="object-cover sm:hidden"
        />
      </div>
      {/* iNFO */}
      <div className="p-8 flex flex-col gap-4">
        <h2 className="uppercase text-[.8rem] tracking-[0.25rem] text-darkGrayishBlue">
          Perfume
        </h2>
        <h1 className="text-3xl font-['Fraunces'] leading-8">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-left text-[.8rem] text-darkGrayishBlue">
          A floral, solar and voluptuous interpretation composed by Oliver
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className=" flex items-center gap-4">
          <span className="text-3xl font-bold font-['Fraunces'] text-darkCyan">$149.99</span>
          <span className="text-darkGrayishBlue text-[.8rem] line-through">$169.99</span>
        </div>
        <button className="w-full bg-darkCyan flex justify-center items-center gap-3 py-3 rounded-xl sm:mt-4 hover:bg-darkCyanHo transition-all">
          <img src="images/icon-cart.svg" alt="icon" className="object-cover" />
          <span className="font-bold text-whiteFn text-[.8rem]">Add to Cart</span>
        </button>
      </div>
    </article>
  );
};

export default CardComponent;
