import { Button as TButton, GetProps, styled, Spinner } from "tamagui";
import React, { ReactElement } from "react";

const sharedPress = { pressStyle: { opacity: 0.8 } };

const ButtonBase = styled(TButton, {
  rounded: "$md",
  fontFamily: "$outfit",
  fontWeight: 500,
  fontSize: "$base",
  items: "center",
  justify: "center",
  flexDirection: "row",
  display: "inline-flex",
  unstyled: true,
  disabledStyle: { opacity: 0.7 },
  borderWidth: 1,

  variants: {
    variant: {
      default: {
        ...sharedPress,
        elevate: true,
        elevation: 4,
        bg: "$primary",
        color: "$primary_foreground",
        borderColor: "$primary",
      },
      destructive: {
        ...sharedPress,
        elevate: true,
        elevation: 4,
        bg: "$destructive",
        color: "$destructive_foreground",
        borderColor: "$destructive",
      },
      secondary: {
        ...sharedPress,
        elevate: true,
        elevation: 4,
        bg: "$secondary",
        color: "$secondary_foreground",
        borderColor: "$border",
      },
      outline: {
        ...sharedPress,
        elevate: true,
        elevation: 2,
        bg: "$background",
        color: "$foreground",
        borderColor: "$border",
      },
      "destructive-outline": {
        ...sharedPress,
        elevate: true,
        elevation: 2,
        bg: "$background",
        color: "$destructive",
        borderColor: "$destructive",
      },
      ghost: {
        ...sharedPress,
        elevate: false,
        bg: "$transparent",
        color: "$foreground",
        borderColor: "$transparent",
      },
    },
    size: {
      sm: { height: 32, px: 16, fontSize: "$sm" },
      default: { height: 40, px: 16 },
      lg: { height: 48, px: 24, fontSize: "$lg" },
    },
  } as const,

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type IconProps = {
  size: number;
};
type ButtonProps = Omit<GetProps<typeof ButtonBase>, "icon" | "iconAfter"> &
  Partial<{
    isLoading: boolean;
    icon?: ReactElement<IconProps>;
    iconAfter?: ReactElement<IconProps>;
  }>;

const ICON_SIZES = {
  sm: 18,
  default: 22,
  lg: 26,
};

const cloneIcon = (el?: ReactElement<IconProps>, size?: number) => {
  if (!React.isValidElement(el)) {
    return el;
  }

  const { size: iconSize, ...restIconProps } = el?.props || {};

  return React.cloneElement(el, {
    size: iconSize ?? size,
    ...restIconProps,
  });
};

const Button = ({
  disabled,
  isLoading,
  icon,
  iconAfter,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) => {
  return (
    <ButtonBase
      disabled={disabled || isLoading}
      variant={variant}
      size={size}
      icon={
        isLoading ? (
          <Spinner size={"small"} />
        ) : (
          cloneIcon(icon, ICON_SIZES[size as keyof typeof ICON_SIZES])
        )
      }
      iconAfter={cloneIcon(icon, ICON_SIZES[size as keyof typeof ICON_SIZES])}
      {...props}
    />
  );
};

export { Button, ButtonProps };
