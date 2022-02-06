import React from 'react'
import {connect} from 'react-redux'

const Orders = ({list}) => {
    return (
        <div>
            <center>
                {list.length > 0 ?
                <div className='container'>
                    <div className='row'>
                        {list.map((item) => (
                            <div className='col-md-4' key={item.id} style={{padding:'5px'}}>
                                <div className='card' style={{width:'18rem',padding:'3px'}}>
                                <img src={item.image} className='card-img-top'/>
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                       {item.name}
                                    </h5>
                                    <div className='card-text'>Rs.{item.prize}</div>
                        <p>Table number:{item.table_number}</p>
                                </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            :
            <div className='h4' >No Order is Placed</div>}
            </center>
           
        </div>
    )
}
const mapStateToProps = state =>({
    list : state.orderreducer
})
export default connect(mapStateToProps)(Orders)