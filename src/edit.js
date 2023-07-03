import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { EDIT_USER} from "./reducer";
import { useNavigate, useParams } from "react-router-dom";
function Edit() {
    const [name,setName] = useState("")
    const [email,setEmail]= useState("")
    const [num,setNum]=useState("")
    const userdetail=useSelector(state=>state.user.details)
    const dispatch =useDispatch()
    const navigate=useNavigate()
    const {id}=useParams()
    const handlesubmit = (e) =>{
        e.preventDefault()
        const data={
            id:id,
            name,
            email,
            num
        }
        dispatch(EDIT_USER(data))
        navigate("/")
    }
    
  
    return(
        <div>
            <h1>edit</h1>
            <Container className="cc">
            <Form onSubmit={handlesubmit}>
                
<input className="ib" type="text" placeholder="enter your name" value={name} onChange={(e) =>setName(e.target.value)}></input><br></br>
<input className="mt-4 ib" type="email" placeholder="enter your email" value={email} onChange={(e) =>setEmail(e.target.value)}></input><br></br>
<input className="mt-4 ib" type="number" placeholder="enter your Mobile number" value={num} onChange={(e) =>setNum(e.target.value)}></input>
<Button type="submit"className="ibb mt-4 ">submit</Button>
            </Form>
            </Container>
        </div>
    )
}
export default Edit;