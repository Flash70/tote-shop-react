import React from 'react';
import style from './Shop.module.scss';
import {Card} from './Card';


export const Shop = () => {
    const images = {
        img: [
            {
                "id": "1",
                "title": "I'm a product",
                "price": "15.00",
                "images": {
                    "small": "../../img/tote_1.webp",
                    "large": "../../img/tote1.webp"
                },
                "info": "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions.  This is also a great space to write what makes this product special and how your customers can benefit from this item."
            },
            {
                'id': '2',
                'title': 'I\'m a product',
                'price': '15.00',
                'images': {
                    'small': '../../img/tote_2.webp',
                    'large': "../../img/tote2.webp"
                },
                'info': 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, ' +
                    'care and cleaning instructions. ' +
                    'This is also a great space to write what makes this product special and how your customers can benefit from this item.',
            },
            {
                'id': '3',
                'title': 'I\'m a product',
                'price': '15.00',
                'images': {
                    'small': '../../img/tote_3.webp',
                    'large': "../../img/tote3.webp"
                },
                'info': 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, ' +
                    'care and cleaning instructions. ' +
                    'This is also a great space to write what makes this product special and how your customers can benefit from this item.',
            },
            {
                'id': '4',
                'title': 'I\'m a product',
                'price': '15.00',
                'images': {
                    'small': '../../img/tote_4.webp',
                    'large': "../../img/tote4.webp"
                },
                'info': 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, ' +
                    'care and cleaning instructions. ' +
                    'This is also a great space to write what makes this product special and how your customers can benefit from this item.',
            },
            {
                'id': '5',
                'title': 'I\'m a product',
                'price': '15.00',
                'images': {
                    'small': '../../img/tote_5.webp',
                    'large': "../../img/tote5.webp"
                },
                'info': 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, ' +
                    'care and cleaning instructions. ' +
                    'This is also a great space to write what makes this product special and how your customers can benefit from this item.',
            },
            {
                'id': '6',
                'title': 'I\'m a product',
                'price': '15.00',
                'images': {
                    'small': '../../img/tote_6.webp',
                    'large': "../../img/tote6.webp"
                },
                'info': 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, ' +
                    'care and cleaning instructions. ' +
                    'This is also a great space to write what makes this product special and how your customers can benefit from this item.',
            },
            {
                'id': '7',
                'title': 'I\'m a product',
                'price': '15.00',
                'images': {
                    'small': '../../img/tote_7.webp',
                    'large': "../../img/tote7.webp"
                },
                'info': 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, ' +
                    'care and cleaning instructions. ' +
                    'This is also a great space to write what makes this product special and how your customers can benefit from this item.',
            },
            {
                'id': '8',
                'title': 'I\'m a product',
                'price': '15.00',
                'images': {
                    'small': '../../img/tote_8.webp',
                    'large': "../../img/tote8.webp"
                },
                'info': 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, ' +
                    'care and cleaning instructions. ' +
                    'This is also a great space to write what makes this product special and how your customers can benefit from this item.',
            },
            {
                'id': '9',
                'title': 'I\'m a product',
                'price': '15.00',
                'images': {
                    'small': '../../img/tote_9.webp',
                    'large': "../../img/tote9.webp"
                },
                'info': 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, ' +
                    'care and cleaning instructions. ' +
                    'This is also a great space to write what makes this product special and how your customers can benefit from this item.',
            },
            {
                'id': '10',
                'title': 'I\'m a product',
                'price': '15.00',
                'images': {
                    'small': '../../img/tote_10.webp',
                    'large': "../../img/tote10.webp"
                },
                'info': 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, ' +
                    'care and cleaning instructions. ' +
                    'This is also a great space to write what makes this product special and how your customers can benefit from this item.',
            },
            {
                'id': '11',
                'title': 'I\'m a product',
                'price': '15.00',
                'images': {
                    'small': '../../img/tote_11.webp',
                    'large': "../../img/tote11.webp"
                },
                'info': 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, ' +
                    'care and cleaning instructions. ' +
                    'This is also a great space to write what makes this product special and how your customers can benefit from this item.',
            },
            {
                'id': '12',
                'title': 'I\'m a product',
                'price': '15.00',
                'images': {
                    'small': '../../img/tote_12.webp',
                    'large': "../../img/tote12.webp"
                },
                'info': 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, ' +
                    'care and cleaning instructions. ' +
                    'This is also a great space to write what makes this product special and how your customers can benefit from this item.',
            },
        ]
    };

    const card = images.img.map(i => <Card small={i.images.small} large={i.images.large} title={i.title}
                                           price={i.price}/>);

    return (
        <div className={style.cart}>
            {card}
        </div>
    )
}