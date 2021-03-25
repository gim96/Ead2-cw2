import { Component } from 'react';
import p3 from './img/p3.jpg';
class ImgSlider extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
       
          <div>
            <img src={p3} width='100%' height="250px"></img>
          </div>
        );
    }

}

export default ImgSlider;