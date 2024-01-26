const ImageText = ({ imgMobile, imgDesktop, title, text }) => {
  return (
    <div className="relative order-5 pt-[398px] sm:pt-[350px] tablet:pt-[150px] md:pt-[160px] lg:pt-[250px] xl:pt-[350px] desktop:pt-[398px]">
      <picture className="absolute z-[-1] top-0 w-full">
        <source media="(max-width: 639px)" srcSet={imgMobile} />
        <source media="(min-width: 640px)" srcSet={imgDesktop} />
        <img className="w-full" src={imgMobile} alt="text image" />
      </picture>
      <h2 className="text-center font-Fraunces text-[28px] text-Dark-desaturated-cyan mb-7 sm:mt-[40px] xl:text-[50px] xl:mt-[80px]">{title}</h2>
      <p className="text-center font-Barlow text-Dark-desaturated-cyan mx-3 mb-[60px] tablet:text-sm lg:w-[300px] lg:mx-auto xl:text-[17px]">{text}</p>
    </div>
  );
};

export default ImageText;
