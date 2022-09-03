import { style, animate, transition, state, keyframes } from '@angular/animations';


export enum ResultAnimationState { Start='start', End='end' };

export const expandInbetweenAnimation =
[
    state(
        ResultAnimationState.Start,
        style({
            'width': '0',
            'opacity' : 0
            })
        ),
    state(
        ResultAnimationState.End,
        style({
            'width': '15rem',
            'opacity' : 1
            })
        ),
    
    transition( 'start => end',
    [
        animate( '0.5s ease-out', keyframes([
            style({
                'width': '0',
                }),
            style({
                'width': '15rem',
                }),
            ])),
        animate( '1s', keyframes([
            style({
                'opacity': 0
                }),
            style({
                'opacity': 1
                })
            ]))
    ] )
]

export const expandBelowAnimation =
[
    state(
        ResultAnimationState.Start,
        style({
            'height': '0',
            'opacity' : 0
            })
        ),
    state(
        ResultAnimationState.End,
        style({
            'height': '5rem',
            'opacity' : 1
            })
        ),
    
    transition( 'start => end',
    [
        animate( '0.5s ease-out', keyframes([
            style({
                'height': '0',
                }),
            style({
                'height': '5rem',
                }),
            ])),
        animate( '1s', keyframes([
            style({
                'opacity': 0
                }),
            style({
                'opacity': 1
                })
            ]))
    ] )
];