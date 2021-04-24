import React, {  Component } from 'react';
import Cronometro from './assets/cronometro.png'
import './style.css'

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            number:0,
            buttonLabel:'INICIAR'
        }
        this.timer=null;
        this.playPause=this.playPause.bind(this);
        this.zerar=this.zerar.bind(this);
    }

    playPause(){
        if(!this.timer){
            this.timer=setInterval(()=>{
                let newState = this.state;
                newState.number+=0.1;
                newState.buttonLabel='PAUSAR'
                this.setState(newState);
            },100)
        } else {
            clearInterval(this.timer);
            this.setState({buttonLabel:'CONTINUAR'})
            this.timer=null;
        }
    }
    zerar(){
        const initialState={
            number:0,
            buttonLabel:'INCIAR'
        }
        clearInterval(this.timer);
        this.timer=null;
        this.setState(initialState)
    }

    render(){
        return(
            <div className='container'>
                <img className='img' src={Cronometro}/>
                <a className='timer'>{this.state.number.toFixed(1)}</a>
                <div className='areaBtn'>
                    <a className='botao' onClick={this.playPause}>{this.state.buttonLabel}</a>
                    <a className='botao' onClick={this.zerar}>ZERAR</a>
                </div>
            </div>
        )
    }
}
export default App;