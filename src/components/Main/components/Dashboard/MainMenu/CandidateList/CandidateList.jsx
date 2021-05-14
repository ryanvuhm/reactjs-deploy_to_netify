import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Candidate from "./Candidate/Candidate";
import "./CandidateList.scss";
import { db, auth } from "../../../../../../firebaseConntect";
import firebase from "../../../../../../firebaseConntect";


import CreateCanditate from "./CreateCandidate/CreateCandidate";
import Filter from "../../../../../../features/Filter/Filter";
import ConfirmationPosition from "../../../../../../features/Filter/FilterByPosition/FilterByPosition";
import FilterByDate from "../../../../../../features/Filter/FilterByDate/FilterByDate";
import { Button } from "@material-ui/core";
import { updateInterviewCalendar } from "../../RightSideMenu/InterviewSlice";

CandidateList.propTypes = {};

function CandidateList(props) {
  const [spells, setSpells] = useState([]);
  const [newSpellName, setNewSpellName] = useState();
  const [fileUrl, setFileUrl] = React.useState(null);
  const [time, setTime] = React.useState("");
  const [attractive, setAttractive] = React.useState(true);
  const [filterCandidate, setFilterCandidate] = React.useState([]);
  const [toggle, setToggle] = useState(true);
  const dateRange = useSelector(state => state.dateRange);
  const dispatch = useDispatch();
  // console.log(dateRange.date)

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("Projects").onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setSpells(data);

        setFilterCandidate(data);

        const interviewCalendar = [];
   
        data.sort((a, b) => (a.time > b.time) ? 1 : -1)
     

        for (let i = 0; i < 10; i++) {
      
          if(data[i] === undefined){
            break;
          }
          interviewCalendar.push(data[i])
        }


        const listInterViewCalendar = updateInterviewCalendar(interviewCalendar)

         dispatch(listInterViewCalendar);
      });
    };
    return fetchData();
  }, []);

  useEffect(
    () => {
      var displayedContacts = spells.filter(function(el) {
        console.log(el.time);
        return el.time >= dateRange.date[0] && el.time <= dateRange.date[1];
      });

      setFilterCandidate(displayedContacts);
    },
    [dateRange.date]
  );

  useEffect(
    () => {
      var displayedContacts = spells.filter(function(el) {
        console.log(el.time);
        return el.positon == dateRange.position;
      });

      setFilterCandidate(displayedContacts);
    },
    [dateRange.position]
  );
  const onCreate = async values => {
    const newCandidate = {
      ...values,
      image: fileUrl,
      time: time,
      attractive: attractive
    };
    // console.log(values.time.value)
    await db.collection("Projects").add(newCandidate);
    // const data = await db.collection("Projects").get();
    // setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const ChangeSpells = data => {
    setSpells(data);
  };

  const handleFileChange = async e => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const handleCalendar = async e => {
    setTime(e.target.value);
  };

  const handleAttractive = async e => {
    setAttractive(e.target.value);
  };

  console.log(spells);

  const handleChangeInput = event => {
    var searchQuery = event.target.value.toLowerCase();
    var displayedContacts = spells.filter(function(el) {
      var searchValueName = el.name.toLowerCase();
      var searchValuePosition = el.positon.toLowerCase();

      return (
        searchValueName.indexOf(searchQuery) !== -1 ||
        searchValuePosition.indexOf(searchQuery) !== -1
      );
    });

    setFilterCandidate(displayedContacts);
  };

  console.log(filterCandidate);

  const handleClickAttractive = () => {
    setToggle(!toggle);
    var displayedContacts = spells.filter(function(el) {
      return toggle ? el.attractive == true : true;
    });

    setFilterCandidate(displayedContacts);
  };
  const handleClearResult = () => {
    setFilterCandidate(spells);
  };
  return (
    <Fragment>
      <div className="container__base__content__main__title2">
        <h2>
          {filterCandidate.length} Candidates
        </h2>
        <Button onClick={handleClearResult}>Clear Result</Button>
        <div className="container__base__content__main__title2__action">
          <CreateCanditate
            onSubmit={onCreate}
            handleFileChange={handleFileChange}
            handleCalendar={handleCalendar}
            handleAttractive={handleAttractive}
          />
        </div>
      </div>

      <div className="container__base__content__main__candidate">
        <div className="container__base__content__main__candidate__input-form">
          <div className="search-form">
            <i className="fas fa-search" />
            <input
              type="text"
              placeholder="Search"
              onChange={handleChangeInput}
            />
          </div>

          <div className="position">
            <ConfirmationPosition data={spells} />
          </div>
          <Filter tag={FilterByDate} name="Date" />
          <div className="more" onClick={handleClickAttractive}>
            <p>Attractive</p>
            <i className="fas fa-cog" />
          </div>
        </div>
        <div className="container__base__content__main__candidate__info">
          {filterCandidate.map((item, index) =>
            <Candidate
              key={index}
              dataCandidate={item}
              ChangeSpells={ChangeSpells}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default CandidateList;
