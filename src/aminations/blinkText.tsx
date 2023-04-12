import {  keyframes } from "@chakra-ui/react"


export const flicker = keyframes`
    0%, 
    19.999%, 
    22%, 
    62.999%, 
    64%, 
    64.999%, 
    70%, 
    100% {
		opacity: .99;
		text-shadow: -1px -1px 0 rgba(#fff, .4), 1px -1px 0 rgba(#fff, .4), -1px 1px 0 rgba(#fff, .4), 1px 1px 0 rgba(#fff, .4), 0 -2px 8px, 0 0 2px, 0 0 5px #ff7e00, 0 0 15px #ff4444, 0 0 2px #ff7e00, 0 2px 3px #000;
	}
    20%, 
    21.999%, 
    63%, 
    63.999%, 
    65%, 
    69.999% {
		opacity: 0.4;
		text-shadow: none;
    }

`
