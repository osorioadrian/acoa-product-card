import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductCard', () => {

    test('debe de mostrar el componente correctamente', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON()).toMatchSnapshot();
        
    });

    test('debe de incrementar el contador', () => {
        <ProductCard product={ product1 }>
            {
                ({count, increaseBy}) => (
                    <>
                        <h1>Product Card</h1>
                        <span>{ count }</span>
                        <button onClick={ () => increaseBy(1) }></button>
                    </>
                )
            }
        </ProductCard>
    });
})