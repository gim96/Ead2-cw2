import React,{ Component} from 'react';
import axios from 'axios';
class TestPage extends Component{

    constructor(props){
        super(props);

        this.state={
            user:'',
            email:'',
            pass:'',
            rePass:'',
            phone:'',
            type:'V'
            
        }

        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
       
        const user={
 
            user:this.state.user,
            email:this.state.email,
            pass:this.state.pass,
            phone:this.state.phone,
            type:this.state.type,
            
          };

        //   alert("user "+this.state.user +" "+" email"+this.state.email +" "+"pass"+this.state.pass+" "+" phone "+this.state.phone  );
          
        //   if(this.state.user!=null && this.state.pass){
            axios.post("http://localhost:8080/venders/",user)
            .then(resp=>{
              if(resp.data!=null){
                //this.setState(this.i)
                alert("Data Saved..!");
              }else{
                alert("Error..!");
              }
            });
        //   }else{
        //     alert("required fields.!");
        //   }
         
       
        event.preventDefault();
    }

    render(){

         

        const handleChangeUser=(evt)=>{
            this.setState({user:evt.target.value});
        }
        const handleChangeEmail=(evt)=>{
            this.setState({email:evt.target.value});
        }
        const handleChangePass=(evt)=>{
            this.setState({pass:evt.target.value});
        }
        const handleChangePhone=(evt)=>{
            this.setState({phone:evt.target.value});
        }
        const handleChangeRePass=(evt)=>{
            this.setState({rePass:evt.target.value});
        }
 

        return(
            <div>
                <div >
                    <form  onSubmit={this.handleSubmit} > 
                       
                        <table width="25%" cellPadding='10' align='center'border='0' class='signUp1'>
                          
                            <tr>
                                <td>
                                <input type="text" class="form-control"  placeholder="Userame" onChange={handleChangeUser} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <input type="text" class="form-control"  placeholder="Email" onChange={handleChangeEmail} />
                                </td>
                            </tr>
                            
                            
                            <tr>
                                <td>
                                <input type="text" class="form-control"  placeholder="Password" onChange={handleChangePass} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <input type="text" class="form-control"  placeholder="Re-enter Password" onChange={handleChangeRePass} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <input type="text" class="form-control"  placeholder="Phone" onChange={handleChangePhone} />
                                </td>
                            </tr>
                            <tr>
                                <td align='center'>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                I accept terms and conditions.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <input variant="contained" type='submit' color="primary" value='Signup' />  
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>

            </div>
        );
    }
}

    
export default TestPage;
