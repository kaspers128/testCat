import React, {Component} from 'react';
import Product from '../product'


export default class Content extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    weight: '0,5',
                    flavor: 'с фуа-гра',
                    portion: 10,
                    present: 'мышь в подарок',
                    headDefault: 'Сказочное заморское яство',
                    headActive: 'Котэ не одобряет?',
                    bottomActive: 'Печень утки разварная с артишоками.',
                    bottomDisabled: 'Печалька, с фуа-гра закончился..',
                    active: false,
                    activeLeave: false,
                    disabled: false,
                    id: 1
                },
                {
                    weight: 3,
                    flavor: 'с рыбой',
                    portion: 40,
                    present: '2 мыши в подарок',
                    headDefault: 'Сказочное заморское яство',
                    headActive: 'Котэ не одобряет?',
                    bottomActive: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                    bottomDisabled: 'Печалька, с рыбой закончился..',
                    active: true,
                    activeLeave: true,
                    disabled: false,
                    id: 2
                },
                {
                    weight: 5,
                    flavor: 'с курой',
                    portion: 100,
                    present: '5 мышей в подарок',
                    headDefault: 'Сказочное заморское яство',
                    headActive: 'Котэ не одобряет?',
                    bottomActive: 'Печень куры разварная с артишоками.',
                    bottomDisabled: 'Печалька, с курой закончился..',
                    active: false,
                    activeLeave: false,
                    disabled: true,
                    id: 3
                },
            ]
        }
    
        this.onChangeActive = this.onChangeActive.bind(this);
        this.onLeaveActive = this.onLeaveActive.bind(this);
    }
    
    onChangeActive(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            let newItem = {...old, active: !old.active}
            if (old.active) newItem = {...newItem, activeLeave: false}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    onLeaveActive(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            if (!old.activeLeave){
                const newItem = {...old, activeLeave: true}
                const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
                return {
                    data: newArr
                }
            }
        })
    }

    render(){

        const {data} = this.state;

        const productItem = data.map((item,index) =>{
            return (
                <Product 
                    key={index}
                    weight={item.weight}
                    flavor={item.flavor}
                    headDefault={item.headDefault}
                    headActive={item.headActive}
                    bottomActive={item.bottomActive}
                    bottomDisabled={item.bottomDisabled}
                    portion={item.portion}
                    present={item.present}
                    onChangeActive={() => this.onChangeActive(item.id)}
                    onLeaveActive={() => this.onLeaveActive(item.id)}
                    active={item.active}
                    activeLeave={item.activeLeave}
                    disabled={item.disabled}
                />
            )
        })

       

        return (
            <main>
                {productItem}
            </main>
        )
    }

}