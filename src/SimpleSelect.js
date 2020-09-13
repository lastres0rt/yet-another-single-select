import React, {useState} from 'react'
import Select from './Select'

export default function SimpleSelect({select}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
  
    const [selected, setSelected] = useState('default value');
    const onOptionClicked = value => () => {
      setSelected(value);
      setIsOpen(false);
    }

    return (
        <div>
        <div onClick={toggling}>{selected}</div>
        {isOpen && (select.map(select => {
            return <div onClick={onOptionClicked(select.name)}>
                    <Select key={select.id} select = {select.name} />
                </div>
            }))
        }
        </div>
    )
}