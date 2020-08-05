import React,{Component} from 'react'


class DrumMachine extends Component {
    constructor(){
        super()
        this.state = {
            isClicked: false
        }
    }
    render(){
        return(
            <div className='main'>
                <p>Drum Machine</p>
            </div>
        )
    }
}


export default DrumMachine