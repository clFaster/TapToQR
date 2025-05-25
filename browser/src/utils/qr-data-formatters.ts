export enum QrDataType {
  TEXT = "Text",
  WIFI = "Wi-Fi",
  CONTACT = "Contact",
  EMAIL = "Email",
  TELEPHONE = "Telephone",
  MAPS = "Maps",
  CALENDAR = "Calendar",
}

export interface WifiData {
  ssid: string;
  password: string;
  securityType: "WPA" | "WEP" | "nopass";
}

export interface ContactData {
  name: string;
  phone: string;
  email: string;
  website?: string;
  nickname?: string;
}

export interface EmailData {
  to: string;
  cc?: string;
  bcc?: string;
  subject?: string;
  body?: string;
}

export interface TelephoneData {
  number: string;
  type: "tel" | "sms" | "facetime" | "facetime-audio";
}

export interface MapsData {
  latitude: string;
  longitude: string;
  query?: string;
}

export interface CalendarData {
  title: string;
  description?: string;
  location?: string;
  startDate: string;
  endDate: string;
  allDay?: boolean;
}

export const formatWifiData = (data: WifiData): string => {
  return `WIFI:T:${data.securityType};S:${data.ssid};P:${data.password};;`;
};

export const formatContactData = (data: ContactData): string => {
  let meCard = "MECARD:";

  meCard += `N:${data.name};`;

  if (data.phone) meCard += `TEL:${data.phone};`;
  if (data.email) meCard += `EMAIL:${data.email};`;
  if (data.website) meCard += `URL:${data.website};`;
  if (data.nickname) meCard += `NICKNAME:${data.nickname};`;

  meCard += ";";

  return meCard;
};

export const formatEmailData = (data: EmailData): string => {
  let emailUri = `mailto:${encodeURIComponent(data.to)}`;

  const params = [];
  if (data.cc) params.push(`cc=${encodeURIComponent(data.cc)}`);
  if (data.bcc) params.push(`bcc=${encodeURIComponent(data.bcc)}`);
  if (data.subject) params.push(`subject=${encodeURIComponent(data.subject)}`);
  if (data.body) params.push(`body=${encodeURIComponent(data.body)}`);

  if (params.length > 0) {
    emailUri += `?${params.join("&")}`;
  }

  return emailUri;
};

export const formatTelephoneData = (data: TelephoneData): string => {
  switch (data.type) {
    case "tel":
      return `tel:${data.number}`;
    case "sms":
      return `sms:${data.number}`;
    case "facetime":
      return `facetime:${data.number}`;
    case "facetime-audio":
      return `facetime-audio:${data.number}`;
    default:
      return `tel:${data.number}`;
  }
};

export const formatMapsData = (data: MapsData): string => {
  if (data.query) {
    return `https://maps.google.com/maps?q=${encodeURIComponent(data.query)}`;
  }
  return `https://maps.google.com/maps?q=${data.latitude},${data.longitude}`;
};

export const formatCalendarData = (data: CalendarData): string => {
  let icalContent = "BEGIN:VCALENDAR\n";
  icalContent += "VERSION:2.0\n";
  icalContent += "BEGIN:VEVENT\n";

  icalContent += `SUMMARY:${data.title}\n`;

  // Format dates according to iCalendar standard (YYYYMMDDTHHMMSSZ)
  const formatDate = (dateStr: string, isEnd = false, allDay = false) => {
    const date = new Date(dateStr);

    if (allDay) {
      // For all-day events, use date only format (YYYYMMDD)
      const yyyy = date.getUTCFullYear();
      const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
      const dd = String(date.getUTCDate()).padStart(2, "0");

      // For end dates of all-day events, add 1 day according to iCal spec
      if (isEnd) {
        date.setUTCDate(date.getUTCDate() + 1);
        return `${yyyy}${mm}${dd}`;
      }

      return `${yyyy}${mm}${dd}`;
    } else {
      // For timed events, use full date-time format
      const yyyy = date.getUTCFullYear();
      const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
      const dd = String(date.getUTCDate()).padStart(2, "0");
      const hh = String(date.getUTCHours()).padStart(2, "0");
      const min = String(date.getUTCMinutes()).padStart(2, "0");
      const ss = String(date.getUTCSeconds()).padStart(2, "0");

      return `${yyyy}${mm}${dd}T${hh}${min}${ss}Z`;
    }
  };

  if (data.allDay) {
    icalContent += `DTSTART;VALUE=DATE:${formatDate(data.startDate, false, true)}\n`;
    icalContent += `DTEND;VALUE=DATE:${formatDate(data.endDate, true, true)}\n`;
  } else {
    icalContent += `DTSTART:${formatDate(data.startDate)}\n`;
    icalContent += `DTEND:${formatDate(data.endDate)}\n`;
  }

  if (data.description)
    icalContent += `DESCRIPTION:${data.description.replace(/\n/g, "\\n")}\n`;
  if (data.location) icalContent += `LOCATION:${data.location}\n`;

  icalContent += "END:VEVENT\n";
  icalContent += "END:VCALENDAR";

  return icalContent;
};

export const formatQrContent = (
  dataType: QrDataType,
  data:
    | string
    | WifiData
    | ContactData
    | EmailData
    | TelephoneData
    | MapsData
    | CalendarData,
): string => {
  switch (dataType) {
    case QrDataType.TEXT:
      return data as string;

    case QrDataType.WIFI:
      return formatWifiData(data as WifiData);

    case QrDataType.CONTACT:
      return formatContactData(data as ContactData);

    case QrDataType.EMAIL:
      return formatEmailData(data as EmailData);

    case QrDataType.TELEPHONE:
      return formatTelephoneData(data as TelephoneData);

    case QrDataType.MAPS:
      return formatMapsData(data as MapsData);

    case QrDataType.CALENDAR:
      return formatCalendarData(data as CalendarData);

    default:
      return data as string;
  }
};
