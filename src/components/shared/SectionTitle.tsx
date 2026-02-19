import { classNames } from "@site/src/utils/classNames";

interface ISectionTitleProps {
  title: string;
  className?: string;
}

export const SectionTitle: React.FC<ISectionTitleProps> = ({
  title,
  className,
}) => {
  return (
    <h2
      className={classNames(
        className,
        "uppercase text-center !tracking-wider text-[18px] font-medium text-transparent leading-[1.2] bg-[linear-gradient(178deg,_#F05C80_-26.55%,_#CC34DF_98.09%)] bg-clip-text",
      )}
    >
      {title}
    </h2>
  );
};
