const MOTH_SHORT_DAY_NUMERIC_DATE_FORMAT = {
  month: "short",
  day: "numeric",
} as Intl.DateTimeFormatOptions;

export const getFormatDate = (
  dateString: string,
  options: Intl.DateTimeFormatOptions = MOTH_SHORT_DAY_NUMERIC_DATE_FORMAT,
  locale?: Intl.LocalesArgument
) => {
  const date = new Date(dateString);

  return date.toLocaleDateString(locale, options as Intl.DateTimeFormatOptions);
};
