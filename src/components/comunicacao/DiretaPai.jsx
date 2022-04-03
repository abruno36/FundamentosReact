import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd={true} />
            <DiretaFilho nome="Yago" idade={10} nerd={true} />
            <DiretaFilho nome="Gabriel" idade={15} nerd={false} />
        </div>
    )
}