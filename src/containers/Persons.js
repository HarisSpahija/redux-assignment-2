import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as actionTypes from '../store/actions'

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPersons} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemovePersons(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.persons
    }
}

const mapDispatchToProps = dispatch => {
     return {
         onAddPersons: (name, age) => dispatch({type: actionTypes.ADD, personData: {name: name, age: age}}),
         onRemovePersons: (id) => dispatch({type: actionTypes.REMOVE, personId: id})
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);