import './ServicesCard.css'

const ServicesCard = ({icon,name,desc}) => {
  return (
    <>
        <div className='text-center translate shadow rounded-3 p-3 px-md-5 pb-md-4 pt-md-5'>
            <div className='mb-4 icon'>
                {icon}
            </div>
            <h4 className='fw-bold txt-color'>{name} </h4>
            <p className='fw-bold'>{desc} </p>
        </div>
    </>
  )
}

export default ServicesCard