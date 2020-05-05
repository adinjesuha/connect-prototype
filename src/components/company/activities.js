import React from 'react';

const Activity = item => (
  <div className="pb-4">
    <div className="media">
      <div className="text-center mr-4">
        <div className="bg-soft-primary p-1 rounded text-primary font-size-14">{item.date}</div>
      </div>
      <div className="media-body">
        <h6 className="font-size-15 mt-0 mb-1">{item.title}</h6>
        <p className="text-muted font-size-14">{item.description}</p>
      </div>
    </div>
  </div>
)

const Activities = () => {
  const activities = [
    { id: 1, title: 'Monitoreo #1', description: 'Vegan bicycle rights selvage meditation, DIY forage taxidermy.', date: 'hace 02 horas' },
    { id: 2, title: 'Monitoreo #2', description: ' Synth bespoke chillwave cliche try-hard green juice brunch street art hashtag vinyl iPhone banh mi subway tile letterpress', date: 'hace 21 horas' },
    { id: 3, title: 'Monitoreo programado', description: ' Live-edge vape hashtag, gochujang woke chambray squid next level cray.', date: 'hace 22 horas' },
  ]
  return (
    <React.Fragment>
      <h5 className="mt-3">Esta Semana</h5>
      <div className="left-timeline mt-3 mb-3">
        <ul className="list-unstyled events mb-0">
        {activities.map((item, idx) => (
          <li className="event-list" key={idx}>
            <Activity {...item} />
          </li>
        ))}
        </ul>
      </div>
      <h5 className="mt-3">Este mes</h5>
      <div className="left-timeline mt-3 mb-3">
        <ul className="list-unstyled events mb-0">
        {activities.map((item, idx) => (
          <li className="event-list" key={idx}>
            <Activity {...item} />
          </li>
        ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Activities;
