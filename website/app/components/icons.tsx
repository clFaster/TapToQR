import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faPenToSquare,
  faMobileScreen,
  faBolt,
  faPalette,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

interface IconProps {
  className?: string;
}

export const Icons = {
  OneClick: ({ className }: IconProps) => (
    <FontAwesomeIcon icon={faQrcode} className={className} />
  ),
  CustomContent: ({ className }: IconProps) => (
    <FontAwesomeIcon icon={faPenToSquare} className={className} />
  ),
  MobileFriendly: ({ className }: IconProps) => (
    <FontAwesomeIcon icon={faMobileScreen} className={className} />
  ),
  QuickActions: ({ className }: IconProps) => (
    <FontAwesomeIcon icon={faBolt} className={className} />
  ),
  Personalization: ({ className }: IconProps) => (
    <FontAwesomeIcon icon={faPalette} className={className} />
  ),
  SimpleSettings: ({ className }: IconProps) => (
    <FontAwesomeIcon icon={faSliders} className={className} />
  ),
};
