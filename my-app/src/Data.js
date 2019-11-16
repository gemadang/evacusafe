import React from "react";
import fire from './fire';

class Data extends React.Component {
    constructor(props) {
      super(props);
      this.state = { people: [], safe_areas: [], not_safe_areas: [] }; // <- set up react state
    }
    componentWillMount(){
      //
      // reference to PEOPLE in firebase database
      //
      let people_ref = fire.database().ref('people').orderByKey().limitToLast(100);
      people_ref.on('child_added', snapshot => {
        /* Update React state */
        let person = { text: JSON.stringify(snapshot.val()), id: snapshot.key };
        this.setState({ people: [person].concat(this.state.people) });
      })

      //
      // reference to SAFE in firebase database
      //
      let safe_areas_ref = fire.database().ref('safe').orderByKey().limitToLast(100);
      safe_areas_ref.on('child_added', snapshot => {
        /* Update React state  */
        let safe_area = { text: JSON.stringify(snapshot.val()), id: snapshot.key };
        this.setState({ safe_areas: [safe_area].concat(this.state.safe_areas) });
      })


      //
      // reference to NOTSAGE in firebase database
      //
      let not_safe_areas_ref = fire.database().ref('notsafe').orderByKey().limitToLast(100);
      not_safe_areas_ref.on('child_added', snapshot => {
        /* Update React state e */
        let not_safe_area = { text: JSON.stringify(snapshot.val()), id: snapshot.key };
        this.setState({ not_safe_areas: [not_safe_area].concat(this.state.not_safe_areas) });
      })
    }
    addMessage(e){
    //   e.preventDefault(); // <- prevent form submit from reloading the page
    //   /* Send the message to Firebase */
    //   fire.database().ref('messages').push( this.inputEl.value );
    //   this.inputEl.value = ''; // <- clear the input
    }
    render() {
      return (
          <ul>
              <div>
                <p>PEOPLE</p>
                { /* Render the list of people */
                    this.state.people.map( person => <li key={person.id}>{person.text}</li> )
                }
                
                <p>SAFE</p>
                { /* Render the list of people */
                    this.state.safe_areas.map( safe_area => <li key={safe_area.id}>{safe_area.text}</li> )
                }
                
                <p>NOT SAFE</p>
                { /* Render the list of people */
                    this.state.not_safe_areas.map( not_safe_area => <li key={not_safe_area.id}>{not_safe_area.text}</li> )
                }
              </div>

          </ul>
      );
    }
  }
  
  export default Data;