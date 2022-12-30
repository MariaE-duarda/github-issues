import { AnchorHTMLAttributes, ReactNode } from "react";
import { ExternalLinkContainer } from "./styles";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  icon?: ReactNode;
  variant?: "iconLeft";
}

export function ExternalLink({
  text,
  icon,
  variant,
  ...props
}: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...props} variant={variant}>
      {text}
      {icon}
    </ExternalLinkContainer>
  );
}
