import { Form } from 'react-bootstrap'
import './FormCom.css'

const FormCom = () => {
  return (
    <>
        <div className='shadow rounded mt-5 p-5'>
            <h1 className='mb-5 fw-bold'>Send Message</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Control className='fw-bold' type="text" placeholder="Name" />
                </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control className='fw-bold' type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                  <Form.Control className='fw-bold' as="textarea" rows={4} placeholder='Message' />
                </Form.Group>   
                <a href="mailto:mootazalhalak695@gmail.com" className='bg-color text-decoration-none d-block w-100 rounded border-0 fw-bold text-white py-2 '>SEND</a>
            </Form>
        </div>
    </>
  )
}

export default FormCom