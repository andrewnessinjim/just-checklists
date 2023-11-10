import React from 'react';
import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { PlusCircle } from "react-feather";
import Spacer from '../Spacer';

const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
    /* border: none; */
    display: flex;
    align-items: center;
    justify-content:center;
    background: transparent;
    cursor: pointer;
    display: inline-block;
    border-radius: var(--border-radius-size-big);

    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: scale(0.9) !important;
    }
`;

const StPlusCircle = styled(PlusCircle)`
    color: var(--color-grey-100);
    padding: 2px;
    transition: 250ms transform cubic-bezier(0.075, 0.82, 0.165, 1);
    padding: 10px;
`;

const DropdownMenuContent = styled(DropdownMenu.Content)`
    --dropdown-bg-color:var(--color-primary-light);
    padding: 6px;
    
    background-color: var(--dropdown-bg-color);
    border-radius: var(--border-radius-size-big);
    box-shadow: 4px 4px 2px var(--color-grey-800);
`;

const DropdownMenuArrow = styled(DropdownMenu.Arrow)`
    fill: var(--dropdown-bg-color);
`;

const DropdownMenuItem = styled(DropdownMenu.Item)`
    padding: 8px;
    cursor: pointer;
    color: var(--color-primary-dark);
    background-color: var(--color-primary-light);
    border-radius: var(--border-radius-size-small);
    
    &:hover, &:focus {
        background-color: var(--color-primary-dark);
        color: var(--color-primary-light);
    }
`;
function StDropdownMenu({ options, onMenuOptionSelect }) {
    console.log(options)
    return (
        <DropdownMenu.Root>
            <DropdownMenuTrigger>
                <StPlusCircle
                    size={64}
                    strokeWidth={1} />
            </DropdownMenuTrigger>

            <DropdownMenu.Portal>
                <DropdownMenuContent>
                    <DropdownMenuArrow width={20} height={10} />
                    {options.map(({ id, label }, index) => {
                        const isLastItem = index === options.length -1;
                        return (
                            <>
                                <DropdownMenuItem
                                    key={id}
                                    onSelect={() => onMenuOptionSelect(id)}>
                                    {label}
                                </DropdownMenuItem>
                                {!isLastItem && <Spacer size="4px"/>}
                            </>
                        )
                    })}
                </DropdownMenuContent>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}

export default StDropdownMenu;
