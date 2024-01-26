const Testimonials = ({img, testimonial, name, position}: {img: string, testimonial: string, name: string, position: string}) => {
  return (
    <div className='flex flex-col items-center mb-[64px]'>
        <img className='w-[72px] rounded-full' src={img} alt={name} />
        <p className='my-8 font-Barlow text-Very-dark-grayish-blue px-4 max-w-[400px] desktop:my-14'>{testimonial}</p>
        <h3 className='font-Fraunces text-[18px] text-Very-dark-desaturated-blue'>{name}</h3>
        <p className='text-Grayish-blue font-Barlow text-[14px]'>{position}</p>
    </div>
  )
}

export default Testimonials