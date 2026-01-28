import { IconButtonComponentProps } from "@components-types/components.interfaces";

export const IconButton = ({
  children,
  className,
}: IconButtonComponentProps) => {
  return <div className={className}>{children}</div>;
};
