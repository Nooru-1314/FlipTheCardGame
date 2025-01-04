import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, FlatListComponent, StatusBar } from 'react-native';

const userTable=()=>{
    const[users, setUsers] = useState([]);
    useEffect(()=>{
        const fetchUsers = async () =>{
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            }
            catch(error){
                console.error("Error fetching data:", error);
            }
        };
        fetchUsers();
    },[]);
    const renderUser = ({item})=>(
        <View style={styles.row}>
            <Text styles={styles.cell}>{item.name}</Text>
            <Text styles={styles.cell}>{item.username}</Text>
        </View>
    )
    return(
        <View style={styles.conatiner}>
            <View style={styles.header}>
                <Text>Name</Text>
                <Text>Username</Text>
            </View>
        <FlatList

            data={users}
            renderItem={renderUser}
            // keyExtractor={(item)=>item.id.toString()}
        />
        </View> 
    )
}
export default userTable

const styles = StyleSheet.create({
    conatiner:{
        
        flex:1,
        padding:16,
        backgroundColor:'#fff'
    },
    header:{
        marginTop:100,
        flexDirection:'row',
        borderBottomWidth:2,
        borderColor:'#ddd',
        paddingBottom:8,
        marginBottom:8,
    },
    headerCell:{
        flex:1,
        fontWeight:'bold',
        fontSize:16,
    },
    row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  cell: {
    flex: 1,
    fontSize: 14,
  },
});