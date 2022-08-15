import './css/HomeTopCSS.css'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const HomeTop = () =>{
    return(         
        <div className="background">    
            <div className="hero">
            <h1 className="hero-title">作品をシェアする楽しみを見つけるサイト</h1>
	            <p className="hero-about1">You better lose yourself in the music, the moment You own it, You better never let it go</p>
                <p className="hero-about2">Tiy ibkt get ibe sgit, di bit nuss tiyr chance to blow This opportunity comes once in a lifetime yo</p>
	        </div>
            <div className="button-wrapper">
                <Button 
                    className="button1" 
                    type="button" 
                    variant="contained" 
                    size="large" 
                    color='primary' 
                    component={Link} 
                    to="/signup">                       
                新規登録
                </Button>

                <Button 
                    className="button2" 
                    type="button" 
                    variant="contained" 
                    size="large" 
                    color='primary' 
                    component={Link} 
                    to="/signin">                        
                ログイン
                </Button>
            </div>
		</div>
    )
}



export default HomeTop