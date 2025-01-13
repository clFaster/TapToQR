import {HeaderIcon, HeaderContainer, HeaderTitle} from "../../../styled/styled-header.ts";

interface HeaderProps {
    title: string;
    hideIcon?: boolean;
}

// Header Component with editable Title
const TapToQrHeader = (props: HeaderProps) => {

    return (
        <HeaderContainer>
            {/*Hide Icon*/}
            {
                !props.hideIcon && <HeaderIcon src="./../img/ic_TapToQR.svg" alt="TapToQR Icon" aria-hidden="true" />
            }
            <HeaderTitle>
                {props.title}
            </HeaderTitle>
        </HeaderContainer>
    );
};

export default TapToQrHeader;
