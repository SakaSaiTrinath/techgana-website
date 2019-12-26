import React, {useState} from "react";
import {Grid, Header, Button, Icon, Modal, Dropdown} from "semantic-ui-react";
import {Link} from "react-router-dom";
import MembersTab from "../components/MembersTab";

function MembersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const gridStyle = {
    padding: "1rem",
    paddingTop: "4rem",
    marginTop: 0,
  };

  const memberItems = [
    {
      link: true,
      raised: true,
      header: "Saka Sai Trinath",
      image: "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
      as: Link,
      to: "/members/member-id",
      meta: "Reactjs, Redux",
    },
    {
      link: true,
      raised: true,
      header: "Rama Kishore",
      image: "https://react.semantic-ui.com/images/avatar/small/christian.jpg",
      as: Link,
      to: "/members/member-id",
      meta: "Reactjs, Redux",
    },
  ];

  const techOptions = [
    {key: "all", text: "All", value: "all"},
    {key: "reactjs", text: "Reactjs", value: "reactjs"},
    {key: "nodejs", text: "Nodejs", value: "nodejs"},
    {key: "android", text: "Android", value: "android"},
  ];

  return (
    <Grid style={gridStyle}>
      <Grid.Row textAlign='center'>
        <Grid.Column>
          <Header as='h2' content='Members' color='blue' />
          <Modal
            trigger={
              <Button
                onClick={() => setModalOpen(true)}
                floated='left'
                content='Stats'
                icon='line graph'
                color='blue'
                size='small'
              />
            }
            open={modalOpen}
          >
            <Modal.Content>
              <Modal.Description>
                <Header>Statistics</Header>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color='violet' onClick={() => setModalOpen(false)}>
                <Icon name='remove' /> Close
              </Button>
            </Modal.Actions>
          </Modal>
          <Dropdown
            style={{float: "right"}}
            trigger={<Button icon='filter' content='Filter' color='blue' />}
            icon={null}
            options={techOptions}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign='center'>
        <Grid.Column>
          <MembersTab items={memberItems} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default MembersPage;
