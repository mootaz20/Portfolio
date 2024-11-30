import { Button } from "react-bootstrap"

const ButtonCom = ({text}) => {
  return (
    <div>
        <Button className='mt-4 fw-bold px-4 bg-color'>{text} </Button>
    </div>
  )
}

export default ButtonCom