import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import React from 'react'

var events = [
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
          //events.push({ title: 'Test', start: new Date('2023-01-26T19:30:00') })
          //alert('Cantidad de eventos: ' + events.length);
          //events.pop();
          //alert('Info: ' + info.dateStr);
          events.push({ title: 'Test', start: info.date})
          var count = 1
          events.forEach(event => {
            alert('Evento ' + count + ': ' + event.title + ', ' + event.start);
            count++;
          });
          console.log(info);
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

class form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('La fecha es: ' + event.Date);
    event.preventDefault();
  }
}

export default DemoApp;
