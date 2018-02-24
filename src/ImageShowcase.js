import React, {Component} from 'react';
import {Images} from './Images';
import {backGround, Bagels, Oranges, imageEffects} from './Images';

export class ImageShowcase extends React.Component {
    render(){
        return(
        <div>
            <a href = "#">
                <img
                    src = {backGround.src}
                    alt = {backGround.alt}
                    width = "200"
                    height = "200"
                />
            </a>
            <a href = "#">
                <img
                    src = {Bagels.src}
                    alt = {Bagels.alt}
                    width = "200"
                    height = "200"
                />
            </a>
            <a href = "#">
                <img
                    src = {Oranges.src}
                    alt = {Oranges.alt}
                    width = "200"
                    height = "200"
                />
            </a>
        </div>
        );
    }
}