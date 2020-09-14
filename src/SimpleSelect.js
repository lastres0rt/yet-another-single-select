import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Select from './Select'
import './SimpleSelect.css'

export default function SimpleSelect({select}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
  
    const [selected, setSelected] = useState('default value');
    const onOptionClicked = value => () => {
      setSelected(value);
      setIsOpen(false);
    }
    
    return (
        <div className="SimpleSelect">
        <div className="SimpleSelect-header" onClick={toggling}>
            <div className="default-text">
                {selected}
            </div>
            <div className="FontAwesomeIcon">{isOpen
                ? <FontAwesomeIcon icon={faAngleUp} size="1x" />
                : <FontAwesomeIcon icon={faAngleDown} size="1x" />}
            </div>
        </div>
        {isOpen && (select.map(select => {
            return <div className="SimpleSelect-selector" 
                        onClick={onOptionClicked(select.name)}>
                    <Select key={select.id} select = {select.name} />
                </div>
            })
            )
        }
        </div>
    )
}