const Badge = ({ badgeText, className }) => {
  return (
    <div
      className={`inline-block px-7.5 py-2.25 text-white bg-[#262626] text-sm font-DMSans font-bold ${className}`}
    >
      {badgeText}
    </div>
  );
};

export default Badge;
