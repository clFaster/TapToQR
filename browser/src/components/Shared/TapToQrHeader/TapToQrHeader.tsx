import {
  HeaderIcon,
  HeaderContainer,
  HeaderTitle,
} from "../../../styled/styled-header.ts";

interface HeaderProps {
  title: string;
  hideIcon?: boolean;
}

const TapToQrHeader = (props: HeaderProps) => {
  return (
    <HeaderContainer style={props.hideIcon ? { margin: "3px 0 0 0" } : {}}>
      {!props.hideIcon && (
        <HeaderIcon
          src="./../img/ic_TapToQR.svg"
          alt="TapToQR Icon"
          aria-hidden="true"
        />
      )}
      <HeaderTitle>{props.title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default TapToQrHeader;
