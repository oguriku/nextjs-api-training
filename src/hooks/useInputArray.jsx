import { useCallback, useState } from 'react'

export const useInputArray = () => {
    const [text,setText] = useState("");
    const [array, setArray] = useState([]);

    const onChangeValue = (e) => setText(e.target.value)
  
    const handleAdd = useCallback(() => {
      setArray((array) => {
        if(array.some(item => item === text)) {
          alert("同じ要素が既に存在します")
          return array;
        }  
        return [...array, text]
      }
      )
    },[text])

    return [text,array,handleAdd, onChangeValue]
}