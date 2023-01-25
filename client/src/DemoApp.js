import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import React from 'react'

const events = [
  { title: 'Meeting', start: new Date() }
]

function DemoApp() {
  return (
    <>
      <div>
        <h1>Teacher Schedule</h1>
      </div>
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        weekends={false}
        events={events}
        eventContent={renderEventContent}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        dateClick={function(info){
          console.log(info);
          //document.getElementsById('start').value
        }}
        locale="es-co"
        //weekends={weekends.weekendsVisible}
        //select={handleAddEventSelectAndOpenModal}
        //eventClick={handleEditEventSelectAndOpenModal}
        //eventChange={handleUpdateEventSelect}
        //initialEvents={eventsCalendar}
        longPressDelay={1000}
        eventLongPressDelay={1000}
        selectLongPressDelay={1000}
        selectable={true}
        dayMaxEvents={true}
        allDaySlot={false}
        editable={true}
        height="700px"
        buttonText={{
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Dia",
          list: "Lista",
        }}
      />
    </>
  );
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default DemoApp;
