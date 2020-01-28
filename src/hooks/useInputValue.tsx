import { useState,Dispatch } from 'react'
type InputValueParameter = any
type returnParameters = {
  value:any;
  onChange:Function;
  setValue:Dispatch<any>
}

export const useInputValue:Function = (initialValue:InputValueParameter):returnParameters => {
  const [value, setValue] = useState(initialValue)
  const onChange = (e:any) => setValue(e.target.value)
  return { value, onChange,setValue }
}
