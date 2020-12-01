import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Image, ScrollView, Alert, Platform} from "react-native";
import {connect} from 'react-redux'
import {Field, Form, reduxForm, formValueSelector} from "redux-form";
import {v4 as uuidv4} from 'uuid'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";

import Book from "../Book";
import * as selectors from '../../reducers'
import Button from "../Button";
import * as sessionActions from '../../actions/sessions'
import FormDateTimePicker from '../FormDateTimePicker'

const TutorDetails = ({ selectedTutor, authorBooks, navigation, onClick, showState, selectedDate }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const toggleShow = () => {
        setDatePickerVisibility(!isDatePickerVisible)
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };
    return(
        <View style={styles.detailsContainer}>
            <View style={styles.topContainer}>
                <Image source={require('../../assets/default_pp.png')} style={styles.authorPic}/>
                <View style={styles.authorInfo}>
                    <Text style={styles.name}>{selectedTutor ? selectedTutor.user.name : 'Nombre'}</Text>
                    <Text style={styles.bio}>{selectedTutor ? selectedTutor.user.lastname: 'Info'}</Text>
                </View>
            </View>
            <View style={styles.middleContainer}>
                <Text style={styles.header}>Horarios disponibles</Text>
                <Button
                    onPress={() => toggleShow()}
                    label={'Elegir horario'}/>
                <Button
                    onPress={() => console.log('yay')}
                    label={'Mostrar'}/>
            </View>
        </View>
    )};

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '90%',
        paddingTop: 16,
        flexDirection: 'row',
    },
    middleContainer: {
        flex: 3,
        width: '90%',
        marginTop: 32
    },
    authorInfo: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    authorPic: {
        height: 150,
        width: 150,
        borderRadius: 75,
        resizeMode: 'cover'
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'justify',
    },
    bio: {
        textAlign: 'justify',
        width: '90%'
    },
    horizontalScroll: {
        paddingLeft: 16,
        flex: 1,
        flexWrap: 'wrap'
    },
    header: {
        alignSelf: 'flex-start',
        color: '#428AF8',
        fontSize: 20,
        marginBottom: 16
    },
});

const dateSelector = formValueSelector('date')

export default reduxForm({
    form:'date'
})(connect (
    state=>({
        selectedTutor:selectors.getSelectedTutor(state)
    }),
    (dispatch, {navigation})=>({
        onClick({selectedTutor, selectedClass}){
            /*dispatch(sessionActions.startAddingSession(
                {
                    'id':getUuid(),
                    'tutor':selectedTutor.id,
                    'hora':'Martes 11:00 am',
                    'clase':selectedClass.id
                }))*/
            console.log('Tutoría apartada')
            navigation.navigate('Home')
        }
    })
)
(TutorDetails))