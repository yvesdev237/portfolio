import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export const SectionHeading = ({
  eyebrow,
  title,
  intro,
  align = "left",
}: SectionHeadingProps) => {
  const alignClasses =
    align === "center"
      ? "mx-auto max-w-2xl text-center items-center"
      : "max-w-2xl";

  return (
    <Reveal className={`mb-10 flex flex-col gap-4 ${alignClasses}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-stone-100 sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="text-base text-stone-300 sm:text-lg">{intro}</p>
      ) : null}
    </Reveal>
  );
};
