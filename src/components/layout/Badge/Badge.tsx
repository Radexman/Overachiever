import { useEffect, useState } from "react";
import { AiOutlineThunderbolt as IconImportant } from "react-icons/ai";
import { FaListUl as IconRegular } from "react-icons/fa";
import { FaRegCalendarCheck as IconAll } from "react-icons/fa";
import { taskType, BadgeCustomizationTypes, BadgeProps } from "./Badge.types";

const Badge = ({ taskType, taskAmount }: BadgeProps) => {
  const [badgeCustomization, setBadgeCustomization] =
    useState<BadgeCustomizationTypes>({
      color: "",
      icon: null,
      text: "",
    });

  useEffect(() => {
    customizeBadge(taskType);
  }, [taskType]);

  const customizeBadge = (taskType: taskType) => {
    switch (taskType) {
      case "important":
        setBadgeCustomization({
          color: "badge-warning",
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
          color: "badge-info",
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
    <div
      data-testid="badge"
      className={`text-md badge gap-2 md:text-xs ${badgeCustomization.color}`}
    >
      <div className="hidden md:block">{badgeCustomization.icon}</div>
      {`${badgeCustomization.text} ${taskAmount}`}
    </div>
  );
};

export default Badge;
