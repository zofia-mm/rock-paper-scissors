import { style, animate, transition, state, trigger } from '@angular/animations';


export enum CircleState { Expanded = 'expanded', Contracted = 'contracted' }

const stateExpanded = state
(
    CircleState.Expanded,
    style( {
        width: 'calc( 100% + {{ expanded }} )',
        height: 'calc( 100% + {{ expanded }} )',
        margin: 'calc( -{{ expanded }} / 2 )'
        } ),
    { params: {
        expanded: '100px'
        } }
);
const stateContracted = state
(
    CircleState.Contracted,
    style( {
        width: 'calc( 100% + {{ contracted }} )',
        height: 'calc( 100% + {{ contracted }} )',
        margin: 'calc( -{{ contracted }} / 2 )'
        } ),
    { params: {
        contracted: '50px'
        } }
);

export const circleAnimation = trigger( 'circleAnimation', 
[
    stateExpanded,
    stateContracted,

    transition( ':enter', [
        style( { width: '100%', height: '100%' } ),
        animate( '1s' )
        ] ),
    transition( '* <=> *', animate( '1s' ) )
] );