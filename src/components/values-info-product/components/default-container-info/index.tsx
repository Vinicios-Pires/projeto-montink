import classNames from "classnames";
import type { PropsWithChildren } from "react";

interface DefaultContainerInfoProps extends PropsWithChildren {
  overrideClassName?: string;
}

const DefaultContainerInfo = ({
  children,
  overrideClassName,
}: DefaultContainerInfoProps) => {
  return (
    <div className={classNames("flex gap-2 mt-2", overrideClassName)}>
      {children}
    </div>
  );
};

export default DefaultContainerInfo;
