import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../css/style.css';

export default class SignUp extends React.Component {
  render() {
    const style = {
      width: '80%',
      height: '50vh'
    };
    return (
      
      <Form style={style}>
        <h2>Reserve Spot / Check In</h2>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="John Smith" required />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="email@email.com" required  title="Please use a valid email"/>
        </FormGroup>
        <FormGroup>
          <Label for="people_select">Number of people</Label>
          <Input type="select" name="select" id="exampleSelect" required>
          <option disabled selected value> -- select an option -- </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="shelterSelect">Select Shelter</Label>
            <Input type="select" name="shelterSelection" id="shelter" required>
              <option disabled selected value> -- select an option -- </option>
              <option value="18 Marlborough Road">PS 249 - (18 Marlborough Road)</option>
              <option value="1827 Archer Street">PS 102 - (1827 Archer Street)</option>
              <option value="901 Classon Avenue">Clara Barton HS - (901 Classon Avenue)</option>
              <option value="549 Audobon Avenue">George Washington Educational Campus - (549 Audobon Avenue)</option>
              <option value="29 Ft Greene Place">Brooklyn Tech HS - (29 Ft Greene Place)</option>
              <option value="660 W 237 Street">MS - HS 141 - (660 W 237 Street)</option>
              <option value="111 Bristol Street">PS 327 - (111 Bristol Street)</option>
              <option value="154 W 93 Street">IS 118 - (154 W 93 Street)</option>
              <option value="427 38 Street">PS 24 - (427 38 Street)</option>
              <option value="237 7th Avenue">John Jay Educational Campus - (237 7th Avenue)</option>
              <option value="730 Bryant Avenue">IS 201 - (730 Bryant Avenue)</option>
              <option value="21 Jumel Place">IS 90 - (21 Jumel Place)</option>
              <option value="1919 Prospect Avenue">PS 211 - (1919 Prospect Avenue)</option>
              <option value="1300 Greene Avenue">IS 383 - (1300 Greene Avenue)</option>
              <option value="425 W 123 Street">PS 125 - (425 W 123 Street)</option>
              <option value="122 Amsterdam Avenue">Martin Luther King Jr. HS - (122 Amsterdam Avenue)</option>
              <option value="233 E 56 Street">Midtown East Campus - (PS 59) - (233 E 56 Street)</option>
              <option value="100 Hester Street">IS 131 - (100 Hester Street)</option>
              <option value="222 W 134 Street">PS 92 - (222 W 134 Street)</option>
              <option value="501-503 W 152 Street">PS - IS 210 - (501-503 W 152 Street)</option>
              <option value="142-30 Barclay Avenue">PS 20 - (142-30 Barclay Avenue)</option>
              <option value="72-24 Grand Avenue">PS 58 - (72-24 Grand Avenue)</option>
              <option value="61-15 Oceania Street">IS 74 - (61-15 Oceania Street)</option>
              <option value="35-12 35Th Avenue">Frank Sinatra HS - (35-12 35Th Avenue)</option>
              <option value="2225 Webster Avenue">IS 391 - (2225 Webster Avenue)</option>
              <option value="1245 Washington Avenue">PS 132 - (1245 Washington Avenue)</option>
              <option value="858 Jamaica Avenue">PS 7 - (858 Jamaica Avenue)</option>
              <option value="283 Adams Street">Adams Street Educational Campus - (283 Adams Street)</option>
              <option value="790 East New York Avenue">IS 391 - (790 East New York Avenue)</option>
              <option value="100 Noll Street">PS 145 - (100 Noll Street)</option>
              <option value="800 Gates Avenue">IS 324 - (800 Gates Avenue)</option>
              <option value="2021 Bergen Street">IS 55 - (2021 Bergen Street)</option>
              <option value="6500 16 Avenue">IS 227 - (6500 16 Avenue)</option>
              <option value="6006 23 Avenue">PS 226 - (6006 23 Avenue)</option>
              <option value="655 Parkside Avenue">IS 2 - (655 Parkside Avenue)</option>
              <option value="40-20 100 Street">PS 207 - (40-20 100 Street)</option>
              <option value="100 Essex Drive">Jerome Parker Campus - (100 Essex Drive)</option>
              <option value="921 E 228 Street">IS - HS 362 - (921 E 228 Street)</option>
              <option value="7002 4 Avenue">PS - IS 30 - (7002 4 Avenue)</option>
              <option value="10 E 15 Street">Clinton School - (10 E 15 Street)</option>
              <option value="715 Ocean Terrace">Petrides Complex - (715 Ocean Terrace)</option>
              <option value="40 West Tremont Avenue">PS 306 - (40 West Tremont Avenue)</option>
              <option value="20 Houston Street">IS 51 - (20 Houston Street)</option>
              <option value="1220 Gerard Avenue">PS - IS 218 - (1220 Gerard Avenue)</option>
              <option value="160-05 Highland Avenue">Hillcrest HS - (160-05 Highland Avenue)</option>
              <option value="45-30 36 Street">Aviation HS - (45-30 36 Street)</option>
              <option value="21-27 Himrod Street">Grover Cleveland HS - (21-27 Himrod Street)</option>
              <option value="67-01 110 Street">Forest Hills HS - (67-01 110 Street)</option>
              <option value="244 E 163 Street">HS of Law, Gov't and Justice - (244 E 163 Street)</option>
              <option value="149-11 Melbourne Avenue">Townsend Harris HS - (149-11 Melbourne Avenue)</option>
              <option value="92-07 175 Street">PS - IS 268 - (92-07 175 Street)</option>
              <option value="33-34 80 Street">IS 145 - (33-34 80 Street)</option>
              <option value="34-65 192 Street">IS 25 - (34-65 192 Street)</option>
              <option value="74-20 Commonwealth Blvd">HS of Teaching, Lib Arts and Sci - (74-20 Commonwealt)h Blvd</option>
              <option value="17-15 Weirfield Street">PS 239 - (17-15 Weirfield Street)</option>
              <option value="111-11 118 Street">PS 100 - (111-11 118 Street)</option>
              <option value="2780 Reservoir Avenue">Walton HS - (2780 Reservoir Avenue)</option>
              <option value="800 Home Street">IS 158 - (800 Home Street)</option>
              <option value="250 Kramer Avenue">PS 56 - (250 Kramer Avenue)</option>
              <option value="290 St Marks Place">Ralph McKee HS - (290 St Marks Place)</option>
            </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
} 
