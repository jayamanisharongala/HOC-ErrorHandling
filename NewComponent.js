import React from 'react'
import HandleError from './HOC'
import FallBack from './FallBack'
export class WebSeries extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             favourite:props.watchedWebSeries
        }
    }
    render() {
        if(this.state.favourite ==='MoneyHeist'){
            throw new Error("Webseries not watched !!!!!!!")
        }
        return (
            <div>
                {this.state.favourite}
            </div>
        )
    }
}

export default HandleError(FallBack,WebSeries)
