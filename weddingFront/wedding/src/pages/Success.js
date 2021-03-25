import React,{ Component} from 'react';
import './com/css/style.css';
class Success extends Component{

    constructor(props){
        super(props);

        this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

    handleSubmit2(event){ 
        localStorage.clear();
        this.props.history.push("/pages/login");
        event.preventDefault();
    }

    
   

    render(){

        return(
            <div>
                 <nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand" href="/">Double Hearts</a>

    </nav>
                <div class='scc'>  
                            <form onSubmit={this.handleSubmit2}>
                            <table width="45%" cellPadding='10' align='center'border='0' >                
                            <tr>
                            <td align='center'>
                                Youre have successfully signup with Double Hearts !                         
                                </td>
                            </tr>
                            <tr>
                                <td  align='center'>
                                <button  class="btn btn-info "  color="primary" > Go to Login </button>
                                </td>
                            </tr>
                        </table>  
                        </form>           
                </div>
              
            </div>
           
        );
    }
}
    
export default Success;
