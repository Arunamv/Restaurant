import React,{ useEffect } from 'react'
import {connect} from 'react-redux'
import { addorder, resettablenumber, resetfilter } from '../Action/index'

const Card = ({filter_name,addorder,table_number}) => {
    const[data,setData] = React.useState([])
    const[cloneData,setCloneData] = React.useState([])
    
    useEffect(() => {
        fetch("http://localhost:3500/items").then(
            response=>response.json()
        ).then(
            json => {
                setData(json)
                setCloneData(json)
             }
        )
       
        
    }, [])

    

    React.useEffect(() => {
        if(filter_name != "All Items") {
            let specific = cloneData.filter(item => item.category===filter_name)
            setData(specific)
        }
        else {
            setData(cloneData)
        }


    },[filter_name])


    const Handler =async (id,name,prize,image) =>{
        if(table_number != null){
            await addorder(id,name,prize,table_number,image)
            await resettablenumber();
            await resetfilter();
            alert("please order successfully")
        }
        else {
            alert("please select table number")
        }

    }
    return (
        <div>
            <center>
                {data.length > 0 ?
                <div className='container'>
                    <div className='row'>
                        {data.map((item) => (
                            <div className='col-md-4' key={item.id} style={{padding:'5px'}}>
                                <div className='card' style={{width:'18rem',padding:'3px'}}>
                                <img src={item.image} className='card-img-top'/>
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                       {item.name}
                                    </h5>
                                    <div className='card-text'>Rs.{item.prize}</div>
                                    <button className='btn btn-primary' onClick={()=>Handler(item.id,item.name,item.prize,item.image)}>Order</button>
                                </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            :
            <div className='spinner-border text-primary' ></div>}
            </center>
           
        </div>

            
        
    )
}


const mapStateToProps = state =>({
    filter_name: state.filterreducer.filter_name,
    table_number : state.tablereducer.table_number
})
export default connect(mapStateToProps,{addorder})(Card)
