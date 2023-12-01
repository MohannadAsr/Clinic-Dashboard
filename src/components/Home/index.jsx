import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import { Manager } from '../../App/AppProvider';
import { useNavigate } from 'react-router-dom';

const homeCards = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    description: 'View your clinic statistics and your general settings',
    url: '/dashboard',
    span: '12',
  },
  {
    name: 'Patients',
    icon: 'users',
    description: ' Manage your patients informations and data',
    url: '/patients',
  },
  {
    name: 'Reservations',
    icon: 'calendar alternate',
    description: 'Manage your patients reservations',
    url: '/reservations',
  },

  {
    name: 'Treatment',
    icon: 'first aid',
    description: 'Manage your patients treatment',
    url: '/treatment',
  },
  {
    name: 'Settings',
    icon: 'setting',
    description: 'Manage your app settings',
    url: '/settings',
  },
];

export default function Home() {
  const navigate = useNavigate();
  const { general } = React.useContext(Manager);
  return (
    <section className="main-section px-2 py-3 ">
      <Row className="my-4 g-2">
        <Col xs={12} md={{ offset: 3, span: 6 }}>
          <h1 className="text-center ">
            Welcome Dr
            <span className="text-primary fw-bold text-capitalize">{` ${general.dr_Name}`}</span>
          </h1>
          <Row className="text-center my-3 g-1">
            {homeCards.map((card, index) => {
              return (
                <Col
                  xs={card.span || 6}
                  key={index}
                  onClick={() => {
                    navigate(card.url);
                  }}
                >
                  <Card className="h-100  py-3 px-2 home-card">
                    <Icon name={card.icon} size="huge" className="m-auto" />
                    <p className="fs-2 my-2">{card.name}</p>
                    <p className="text-muted">{card.description}</p>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </section>
  );
}
