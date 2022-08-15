import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const SignUpOK = () =>{
    return(
        <div>
        <h2>
            Sign Up DONE
        </h2>

        <Button 
            className="button2" 
            type="button" 
            variant="contained" 
            size="large" 
            color='primary' 
            component={Link} 
            to="/">                        
            Homeに戻る
        </Button>

        </div>

    )
}

export default SignUpOK