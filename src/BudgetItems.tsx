import React, { useState } from 'react';

type BudgetItem = {
  id: number; //inputted items become part of this array, need ID to know which to delete
  name: string; //what the user inputs in, the items name
};

function BudgetItems() {
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);
  //React hook that is used to declare a state variable called   budgetItems. The initial value of budgetItems is an empty array [].

  const addBudgetItem = (name: string) => {
    setBudgetItems(prevItems => [
      ...prevItems,
      {
        id: Date.now(), //the timestamp it is inputted in is the id
        name
      }
    ]);
  };

  const deleteBudgetItem = (id: number) => { //will delete by the id
    setBudgetItems(prevItems => //it checks by previous items
      prevItems.filter(item => item.id !== id)
    );
  };

 return (
    <div>
      <h2>$  Budget App Version 1.0  $</h2>
      <ul>
        {budgetItems.length === 0 ? ( //no budget items in the list? Display the message
          <li>No budget items to display.</li>
        ) : (
          (() => {
            const items = [];
            for (let i = 0; i < budgetItems.length; i++) {
              const item = budgetItems[i]; //chosen item from array
              items.push(
                <li key={item.id}>
                  {item.name} 
                  <button onClick={() => deleteBudgetItem(item.id)}>
                    Delete 
                  </button>
                </li>
              );
            }
            return items;
          })()
        )}
      </ul>
      <form
        // onSubmit={e => { //prevents error during sub,it, e stands for the event!
        //   e.preventDefault();
        //   const name = e.target.elements.name.value;
        //   addBudgetItem(name);
        //   e.target.reset(); //resets after the "Add item" button is clicked, so the form can take                                   another input
        // }}
      >
        <label>
          Budget Item: 
          <input type="text" name="name" required />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default BudgetItems;
