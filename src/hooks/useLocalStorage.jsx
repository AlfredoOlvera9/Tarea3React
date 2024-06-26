import React from "react";

export function useLocalStorage(itemName, initialValue){

    const localStorageItems = localStorage.getItem(itemName);
  
    let parsedItems;
  
    if(!localStorageItems){
      localStorage.setItem('Games', JSON.stringify(initialValue));
      parsedItems = initialValue;
    }
    else {
      parsedItems = JSON.parse(localStorageItems);
    }
  
    const[item, setItem] = React.useState(parsedItems);
  
    const saveItem = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      setItem(newItems);
    }
  
    return [item, saveItem];
    
  }