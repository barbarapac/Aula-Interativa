import React, { Component } from 'react'
import Button from '../button/button'
import Input from '../TextField/input'


class Teste extends Component{
    render(){
        return(
            <div>
                <Button title="FODEE"/>
                <Input label='Essa bucetinha' />
            </div>
        )
    }
}

export default(Teste)