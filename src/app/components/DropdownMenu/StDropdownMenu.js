import React from 'react';
import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { PlusCircle } from "react-feather";

const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
    /* border: none; */
    display: flex;
    align-items: center;
    justify-content:center;
    background: transparent;
    cursor: pointer;
    display: inline-block;
    border-radius: var(--border-radius-size-big);
    margin: 24px;
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
    --dropdown-bg-color:var(--color-white);
    padding: 6px;
    
    background-color: var(--dropdown-bg-color);
    border-radius: var(--border-radius-size-big);
    box-shadow: 4px 4px 2px var(--color-grey-800);
`;

const DropdownMenuArrow = styled(DropdownMenu.Arrow)`
    fill: var(--color-white);
`;

const DropdownMenuItem = styled(DropdownMenu.Item)`
    padding: 8px;
    cursor: pointer;
    margin-bottom: 4px;
    color: black;
    background-color: var(--color-white);
    color: black;
    border-radius: var(--border-radius-size-small);
    
    &:hover, &:focus {
        background-color: var(--color-grey-900);
        color: var(--color-white);
    }

    &:last-child {
        margin-bottom: initial;
    };
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
                    {options.map(({ id, label }) => (
                        <DropdownMenuItem
                            key={id}
                            onSelect={() => onMenuOptionSelect(id)}>
                            {label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}

export default StDropdownMenu;