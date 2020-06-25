import React from 'react';
import {MyButton} from '../../AdminBtn';
import AdminNac from '../../AdminNav';
import AdminNav from '../../AdminNav';
import {Container} from '../../AdminBtn';
import { shadows } from '@material-ui/system';

class AdminGuide extends React.Component {
    render(){
        return(
                <div >
                    <AdminNav />
                    <div className="row ">
                    
                    <div className=' col-md-4 col-sm-6'>
                        <Container shadows={0}><MyButton>User Management</MyButton></Container>
                    </div>
                    
            
                    
                    <div className='col-md-4 col-sm-6'>
                        <Container shadows={0}><MyButton>Post Management</MyButton></Container>
                    </div>
                    
                </div>
                </div>
                
                
            
        )
    }
}

export default AdminGuide;
