import React from 'react'
import WebSeries from './NewComponent'
 class MainComponent extends React.Component {
    render() {
        return (
            <div>
             <WebSeries watchedWebSeries="Lucifier"/>
             <WebSeries watchedWebSeries="FamilyMan"/>
             <WebSeries watchedWebSeries="MoneyHeist"/>   
            </div>
        )
    }
}
export default MainComponent
