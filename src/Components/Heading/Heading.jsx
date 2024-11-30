import './Heading.css'

const Heading = ({title}) => {
  return (
    <>
        <div className='text-center position-relative'>
            <h1 className='txt-color fw-bold section-title'>{title} </h1>
        </div>
    </>
  )
}

export default Heading