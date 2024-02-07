import { useSelector, useDispatch } from "react-redux";
import {changeEmail} from '../redux/user-slice';


export const Email = () => {

    const dispatch = useDispatch();
    const email = useSelector((state) => state.user.email);


const handleChange = (event) => {

    dispatch(changeEmail(event.target.value))
};

  return (
    <input 
        type="email" 
        value={email} 
        placeholder="Email.." 
        onChange={handleChange} />
  )
}
