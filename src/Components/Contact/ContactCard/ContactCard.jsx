import './ContactCard.css'

const ContactCard = ({icon,title}) => {
  return (
    <>
        <div className='shadow contactCard  px-3 py-4'>
            <div className='icon'>
                {icon}
            </div>
            <p className='fw-bold mt-3'>{title} </p>
        </div>
    </>
  )
}

export default ContactCard