import React from "react";
import { CompactFormField, InputContainer } from "../../../styled/styled.ts";
import { useQrContext } from "../../../contexts/QrContext.tsx";

const CalendarQrForm: React.FC = () => {
  const { calendarData, updateCalendarData } = useQrContext();

  return (
    <>
      <CompactFormField>
        <label htmlFor="calendarTitle">Event Title</label>
        <InputContainer>
          <input
            type="text"
            id="calendarTitle"
            value={calendarData.title}
            onChange={(e) => updateCalendarData("title", e.target.value)}
            placeholder="Event Title"
          />
        </InputContainer>
      </CompactFormField>
      <CompactFormField>
        <label htmlFor="calendarAllDay">All Day Event</label>
        <InputContainer>
          <input
            type="checkbox"
            id="calendarAllDay"
            checked={calendarData.allDay}
            onChange={(e) => updateCalendarData("allDay", e.target.checked)}
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label htmlFor="calendarStartDate">
          Start {calendarData.allDay ? "Date" : "Date & Time"}
        </label>
        <InputContainer>
          <input
            type={calendarData.allDay ? "date" : "datetime-local"}
            id="calendarStartDate"
            value={calendarData.startDate}
            onChange={(e) => updateCalendarData("startDate", e.target.value)}
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label htmlFor="calendarEndDate">
          End {calendarData.allDay ? "Date" : "Date & Time"}
        </label>
        <InputContainer>
          <input
            type={calendarData.allDay ? "date" : "datetime-local"}
            id="calendarEndDate"
            value={calendarData.endDate}
            onChange={(e) => updateCalendarData("endDate", e.target.value)}
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label htmlFor="calendarLocation">Location (Optional)</label>
        <InputContainer>
          <input
            type="text"
            id="calendarLocation"
            value={calendarData.location || ""}
            onChange={(e) => updateCalendarData("location", e.target.value)}
            placeholder="Event Location"
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label htmlFor="calendarDescription">Description (Optional)</label>
        <InputContainer>
          <textarea
            id="calendarDescription"
            value={calendarData.description || ""}
            onChange={(e) => updateCalendarData("description", e.target.value)}
            placeholder="Event Description"
            rows={3}
          />
        </InputContainer>
      </CompactFormField>
    </>
  );
};

export default CalendarQrForm;
