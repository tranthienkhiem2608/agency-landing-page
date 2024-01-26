const Image = ({order="", imgMobile, imgDesktop}: {order?: string, imgMobile: string, imgDesktop: string}) => {
  return (
    <picture className={`${order} w-full`}>
        <source media='(min-width: 639px)' srcSet={imgMobile} />
        <source media='(max-width: 640px)' srcSet={imgDesktop} />
        <img className="w-full" src={imgMobile} alt="transform image"/>
    </picture>
  )
}

export default Image