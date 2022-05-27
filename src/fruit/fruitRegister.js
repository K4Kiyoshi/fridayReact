import React from "react";

// class FruitRegister extends React.Component {
//     render() {
//         return (
//             <div className="reg">
//                 <input type="text"  value={this.props.fruitName} onChange={this.props.handleChange}/>
//                 <button onClick={this.props.addFruit}>Add Fruit</button>
//             </div>
//         )
//     }
// }


const FruitRegister =(props)=>{
    return (
                    <div className="reg">
                        <input type="text"  value={props.fruitName} onChange={props.handleChange}/>
                        <button onClick={props.addFruit}>Add Fruit</button>
                    </div>
                )
}


export default FruitRegister;