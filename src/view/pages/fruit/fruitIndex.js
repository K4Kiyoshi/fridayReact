import React, { useEffect, useState } from "react";
import FruitList from "../../../fruit/fruitList";
import FruitRegister from "../../../fruit/fruitRegister";
const Fruit =()=>{
    const [fruits, setFruits] = useState([
        { name: "banana", price: 1000 },
        { name: "kiwi", price: 1000 },
        { name: "Lychee", price: 600 },
        { name: "Watermalone", price: 1050 },
        { name: "Avocado", price: 1000 },
        { name: "Strawberry", price: 1000 },
       ]);
    
       const [fruitName, setFruitName] = useState("");
       const [title, setTitle] = useState("Fruit List");
    
       useEffect(() =>{
    
       let gd = fruits.filter((data) => {
          return data.price === 1000;
         });
    
         setFruits(gd);
    
    
       setTimeout(() =>{
       setTitle("Fruit Data")
     },3000)
     }, [])
    
     function handleChange(e) {
       setFruitName(e.target.value);
     }   
    
    
     const addFruit =() =>{
       setFruits([...fruits, { name: fruitName }]);
         setFruitName("");
        
     }
    
        
 

   return (
     <div className="fruitContainer">
       <h1>{title}</h1>
       <FruitList fruits={fruits} />
   <FruitRegister
     fruitName={fruitName}
     handleChange={handleChange}
     addFruit={addFruit}
   />
     </div>
   );
 };
 class App extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
       fruits: [
         { name: "banana", price: 1000 },
         { name: "kiwi", price: 1000 },
         { name: "Lychee", price: 600 },
         { name: "Watermalone", price: 1050 },
         { name: "Avocado", price: 1000 },
         { name: "Strawberry", price: 1000 },
       ],
       fruitName: "",
       title: "Fruits",
     };
   }

   componentDidMount() {
     setTimeout(() => {
       this.setState({ title: "Fruit Data" });
     }, 10000000000000000000000000000000000000000000000);

     let gd = this.state.fruits.filter((data) => {
       return data.price === 1000;
     });

     this.setState({ fruits: gd });
   }

    componentDidUpdate(){
      alert("upgrade")
    }

   handleChange = (e) => {
     this.setState({ fruitName: e.target.value });
   };

   addFruit = () => {
     this.setState({
       fruits: [...this.state.fruits, { name: this.state.fruitName }],
       fruitName: "",
     });
   };

   render() {
     return (
 <div className="fruitContainer">
   <h1>{this.state.title}</h1>
   <FruitList f={this.state.fruits} />
   <FruitRegister
     fruitName={this.state.fruitName}
     handleChange={this.handleChange}
     addFruit={this.addFruit}
   />
 </div>
     );
   }
    
    
}

export default Fruit;