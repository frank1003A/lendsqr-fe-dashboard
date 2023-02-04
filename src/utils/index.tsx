/**DateTime Conversion Utility Function */
export const convertDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options:Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleDateString("en-US", options);
  };
