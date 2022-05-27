import React from "react";

const FruitList = (props) => {
  return (
    <>
      {props.fruits.map((fruit, index) => {
        return (
          <div key={index}>
            <table>
              <tbody>
                <tr>
                  <td>Fruit ={fruit.name}</td>
                  <td>Price = {fruit.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default FruitList;
