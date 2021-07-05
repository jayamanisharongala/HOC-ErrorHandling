import React from 'react'
export default function HandleError(FallBack,NewComponent){
 class HandlingError extends React.Component {
     constructor(props) {
         super(props)
         this.state = {
              containError:false,
              error : null,
              errorData:null
         }
     }
     componentDidCatch (error,data){
         this.setState({
            containError:true,
            error,
            errorData:data
         })
     }
     render (){
         if(this.state.containError){
             return(
                 <FallBack/>
             )
         }
         return <NewComponent {...this.props}/>
     }
     
 }
 return HandlingError
}

