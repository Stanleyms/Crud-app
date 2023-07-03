import Table from "react-bootstrap/Table";
import {Button, Container} from "react-bootstrap"
import { Link } from "react-router-dom";
import Create from "./create";
import Edit from "./edit";
import { useSelector,useDispatch } from "react-redux";
import { DEL_USER } from "./reducer";

function Home(){
   const hdetails=useSelector(state=>state.user.details)
   const dispatch=useDispatch()
    return(
        <div>
        <h1 className="text-center mb-5">This is crud </h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>MobileNumber</th>
                </tr>
            </thead>
            <tbody>
                {hdetails.map(user=>(   <tr key={user.id}>
                     <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.num}</td>
                <td>    <Button className="btn-success btn p-2 m-2 cuu" ><Link to={`/edit/${user.id}`}>Edit</Link></Button>
                <Button className="btn-danger btn2" onClick={()=>dispatch(DEL_USER(user))}> delete</Button></td>
                </tr>))}
            </tbody>
         
           
            
        </Table>
        <Container >
            <Button className="cuu"><Link to={"/Create"}>Create</Link></Button>
            </Container>
        </div>
    )
}
export default Home;