import styled from "styled-components";
import StDropdownMenu from "../DropdownMenu/StDropdownMenu";
import Spacer from "../Spacer";

const NEW_EMPTY_LIST_OPTION = 1;
const NEW_TEMPLATE_LIST_OPTION = 2;

const MENU_OPTIONS = [{
        id: NEW_EMPTY_LIST_OPTION,
        label: "New Empty List"
    }, {
        id: NEW_TEMPLATE_LIST_OPTION,
        label: "New List From Template"
    }
]

const StWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StNoListsMsg = styled.p`
    background-color: var(--color-grey-800);
    padding: 10px 20px;
    border-radius: var(--border-radius-size-big);
    `

function ZeroChecklists() {
    function onMenuOptionSelect(id) {
        console.log(`Item selection: ${id}`)
    }
    return (
        <StWrapper>
            <StNoListsMsg>You do not have any checklists</StNoListsMsg>
            <Spacer size="24px"/>
            <StDropdownMenu
                options={MENU_OPTIONS}
                onMenuOptionSelect={onMenuOptionSelect}
            />
        </StWrapper>
    )
}

export default ZeroChecklists;