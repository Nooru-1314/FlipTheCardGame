import React from 'react';
import {View, Text, TextInput, StyleSheet, FlatList, Image, TextInputComponent} from 'react-native';
import { Picker } from "@react-native-picker/picker";

export default function Movie(){
    const data=[
        {
          title: "After Dark in Central Park",
          year: 1900,
          cast: [],
          genres: [],
        },
        {
          title: "Boarding School Girls' Pajama Parade",
          year: 1900,
          cast: [],
          genres: [],
        },
        {
          title: "Buffalo Bill's Wild West Parad",
          year: 1900,
          cast: [],
          genres: [],
        },
        {
          title: "Caught",
          year: 1900,
          cast: [],
          genres: [],
        },
        {
            title: "After Dark in Central Park",
            year: 1900,
            cast: [],
            genres: [],
          },
          {
            title: "Boarding School Girls' Pajama Parade",
            year: 1900,
            cast: [],
            genres: [],
          },
          {
            title: "Buffalo Bill's Wild West Parad",
            year: 1900,
            cast: [],
            genres: [],
          },
          {
            title: "Caught",
            year: 1900,
            cast: [],
            genres: [],
          },
    ]
    // const RenderItem =(item) =>{
    //     return(
    //     <View style={styles.table}>
    //         <Text>{item.title}</Text>
    //         <Text>{item.year}</Text>
    //         <Text>{item.cast}</Text>
    //         <Text>{item.genres}</Text>
    //     </View>
    //     )
    // }

    return(

        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="search here"
                keyboardType='default'
            />
            <View style={styles.filtersContainer}>
            <TextInput
                style={[styles.filterByTitleInput,{borderWidth:1,borderColor:'grey'}]}
                placeholder="filter"
                keyboardType="default"
            />
            <TextInput
               style={[styles.filterByTitleInput,{borderWidth:1,borderColor:'grey'}]}
                placeholder="filter"
                keyboardType="default"
            />
            </View>
            <View style={styles.tableContainer}>
                <View style={styles.tableHead}>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.year}>Year</Text>
                    <Text style={styles.cast}>Cast</Text>
                    <Text style={styles.genres}>genres</Text>
                </View>
                {data.flatMap((item)=>(
                <View style={styles.table}>
                    <View id="title" style={styles.col1}><Text style={styles.title}>{item.title}</Text></View>
                    <View style={styles.col2}><Text style={styles.year}>{item.year}</Text></View>
                    <View style={styles.col3}><Text style={styles.cast}>{item.cast}</Text></View>
                    <View style={styles.col4}><Text style={styles.genres}>{item.genres}</Text></View>
                    {/* <Image
                        uri="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Searching_Ruins_on_Broadway_Galveston_for_Dead_Bodies_1900_Albert_E_Smith_Thomas_Edison.webm/320px--Searching_Ruins_on_Broadway_Galveston_for_Dead_Bodies_1900_Albert_E_Smith_Thomas_Edison.webm.jpg"
                    /> */}
                </View>
            ))}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:'lightyellow',
        padding:20,
    },
    input:{
        fontSize:20,
        marginHorizontal:20,
        marginTop:10,
        color:'black',
        padding:10,
        borderWidth:1,
        borderColor:'grey',
    },
    filtersContainer:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    filterByTitleInput:{
        fontSize:20,
        width:'30%',
    },
    tableContainer:{
        marginTop:30,
        borderWidth:1,
        borderColor:'grey',
        backgroundColor:'white'
    },
    table:{
        width:'100%',
        flexDirection:'row',
    },
    tableHead:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
    },
    title:{
        fontSize:15,
    },
    year:{
        marginLeft:10,
        fontSize:15,
    },
    cast:{
        fontSize:15,
    },
    genres:{
        fontSize:15,
    },
    col1:{
        width:'30%',
    },
    col2:{
        marginLeft:10,
        width:'15%'
    },
    col3:{
        width:'20%'
    },
    col4:{
        width:'30%'
    }
})