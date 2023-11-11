import { ReactNode, useEffect, useState } from "react";
import { AiOutlineThunderbolt as IconImportant } from "react-icons/ai";
import { FaListUl as IconRegular } from "react-icons/fa";
import { MdOutlinePlaylistAddCheckCircle as IconAll } from "react-icons/md";

type BadgeProps = {
  taskType: "important" | "regular" | "all";
  taskAmount: number;
};

type BadgeCustomizationTypes = {
  color: string;
  icon: ReactNode;
  text: string;
};

const Badge = ({ taskType, taskAmount }: BadgeProps) => {
  const [badgeCustomization, setBadgeCustomization] =
    useState<BadgeCustomizationTypes>({
      color: "",
      icon: null,
      text: "",
    });

  useEffect(() => {
    customizeBadge(taskType);
  });

  const customizeBadge = (taskType: "important" | "regular" | "all") => {
    switch (taskType) {
      case "important":
        setBadgeCustomization({
          color: "badge-info",
          icon: <IconImportant />,
          text: "Important",
        });
        break;
      case "regular":
        setBadgeCustomization({
          color: "badge-success",
          icon: <IconRegular />,
          text: "Regular",
        });
        break;
      case "all":
        setBadgeCustomization({
          color: "badge-warning",
          icon: <IconAll />,
          text: "All",
        });
        break;
      default:
        setBadgeCustomization({
          color: "",
          icon: null,
          text: "",
        });
        break;
    }
  };

  return (
    <div className={`badge gap-2 ${badgeCustomization.color}`}>
      {badgeCustomization.icon}
      {`${badgeCustomization.text}  ${taskAmount}`}
    </div>
  );
};

export default Badge;
