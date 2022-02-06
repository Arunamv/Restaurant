import React from 'react'
import { connect } from 'react-redux'
import { settablenumber } from '../Action/index'   

const Table = ({settablenumber,table_number}) => {
    const number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    let inActiveBtn='btn btn-outline-primary m-2'
    let activeBtn='btn btn-outline-primary m-2 active'
    const[numbers,setNumbers]=React.useState(null)
    return (
        <div>
            <center className='mt-2'>
                <h1>Please Select Your Table Number:</h1>
                {number.map((num,index)=>(
                   <div style={{display:'inline'}} key={index}>
                       <button className= {table_number===num?activeBtn:inActiveBtn}  onClick={()=>settablenumber(num)}>
                          {num} 
                       </button>
                   </div> 
                ))}
            </center>
            
        </div>
    )
}

const mapStateToProps = state =>({
    table_number : state.tablereducer.table_number
})

export default connect(mapStateToProps,{settablenumber})(Table)
