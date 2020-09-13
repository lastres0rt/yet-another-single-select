import React from 'react'
import Select from './Select'

export default function SimpleSelect({select}) {
    return (
        select.map(select => {
            return <Select key={select.id} select = {select.name} />
        })
    )
}