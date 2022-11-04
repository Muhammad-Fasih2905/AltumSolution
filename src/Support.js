import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { err } from 'react-native-svg/lib/typescript/xml'
const Support = () => {

const [text,setText] = useState("")
const [result,setResult] = useState()


const handleChange =(e)=>{
  
  if(e.length > 200){
      setResult(200)
  }else{
    setText(e)
    setResult(0)
  }
}

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.header}>
          <Image style={styles.Arrowpic} source={require('../src/assets/Arrow.png')} />
          <Text style={styles.Headertext}>Support/Feedback</Text>
        </View>
        <View style={styles.midTextContainer}>
          <Text style={styles.midText}>
            Send direct feedback or help message to
            the admin
          </Text>
        </View>
        <View style={styles.Emailinputcon}>
          <Text style={styles.EmailText}>Email</Text>
          <TextInput style={styles.EmailInput} placeholder="Email address" />
        </View>
        <View style={styles.Subjectinputcont}>
          <Text style={styles.SubjectText}>Subject</Text>
          <TextInput style={styles.SubjectInput} placeholder="Brief subject of your message" />
        </View>
        <View style={styles.Messageinputcont}>

          <Text style={styles.MessageText}>Message</Text>
          <View style={styles.Inputview}>
          <ScrollView>
          <TextInput style={styles.MessageInput} 
         value={text} 
         onChangeText={handleChange}
          placeholder="Type your message in this field..."multiline={true} />
         
          </ScrollView>
          </View>
    
          <View style={styles.Messagebox}>
        <View style={styles.line}></View>    
          <Image style={styles.Sendmessage} source={require('../src/assets/Support/match_textfield/Path.png')}/>
          <Image style={styles.Selectoption} source={require('../src/assets/Select.png')}/>
          <Image style={styles.Shape} source={require('../src/assets/Shape.png')}/>
          <Image style={styles.Vector} source={require('../src/assets/Vector.png')}/>
          </View>
        </View>
        <View style={styles.textCount}>
          <Text style={styles.TextcountLimit}>{text.length} Of 200 Words</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Support

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: hp('100'),
    margin: 5
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    width: wp('90'),
    height: hp('10'),
  },
  Arrowpic: {
    display: 'flex',
    width: wp('5'),
    height: hp('3'),
    margin: 8,
    alignSelf: 'center'

  },
  Headertext: {
    display: 'flex',
    fontSize: 25,
    alignSelf: 'center',
    marginRight: 45,
    color: '#404040',
  },
  midTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: wp('65'),
    alignSelf: 'center',
  },
  midText: {
    display: 'flex',
    fontSize: 18,
    textAlign: 'center',
    color: "#404040",
    fontWeight: "200",
  },
  Emailinputcon: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 19,
    width: wp('85'),
    marginTop: 95,

  },
  EmailInput: {
    display: 'flex',
    borderWidth: 1,
    borderRadius: 9,
    paddingLeft: 15,
    color: 404040,
    fontSize: 16,
    fontWeight: "300",
    borderColor: "#AFAEAE",
  },
  EmailText: {
    display: 'flex',
    color: 404040,
    fontWeight: '300',
    fontSize: 16,
    marginBottom: 6,
  },
  Subjectinputcont: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 19,
    width: wp('85'),
  },
  SubjectInput: {
    display: 'flex',
    borderWidth: 1,
    borderRadius: 9,
    paddingLeft: 15,
    color: 404040,
    fontSize: 16,
    fontWeight: "300",
    borderColor: "#A4A0A0",
  },
  SubjectText: {
    display: 'flex',
    color: 404040,
    fontWeight: '300',
    fontSize: 16,
    marginBottom: 6,
    marginTop: 20,
  },
  Messageinputcont: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 19,
    width: wp('85'),
    height: hp('49'),
    borderColor:'#AFAEAE'
  },
  MessageInput: {
    display: 'flex',
    color: 404040,
    fontSize: 16,
    fontWeight: "300",
    height: hp('33'),
    textAlignVertical:'top',
    padding: 15,
   
  },
  MessageText: {
    display: 'flex',
    color: 404040,
    fontWeight: '300',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  Messagebox:{
    display:'flex',
    flexDirection:'column',
    borderRadius:3,
    width:wp("84"),
    height:hp('7.1'),
    bottom:54,
    margin:2,
    borderBottomEndRadius:8,
    borderBottomLeftRadius:8,
   backgroundColor: "#D4D3E0"
  },
  Inputview:{
    display:'flex',
   height:hp('40'),
   borderWidth: 1,
   borderRadius: 9,
   borderColor: 404040,
  },
   Sendmessage:{
    display:'flex',
    width:wp('6'),
    height:hp('3'),
    margin:12,
    marginLeft:270,
  },
  Selectoption:{
    display:'flex',
    bottom:32,
    width:wp('3'),
    height:hp('3'),
    marginHorizontal:85,
  },
  Shape:{
    display:'flex',
    width:wp('6'),
    height:hp('3'),
    bottom:53,
    marginHorizontal:50
  },
  Vector:{
    display:'flex',
    width:wp('6'),
    height:hp('3'),
    bottom:"136%",
    marginHorizontal:15,
  },
  textCount:{
    display:'flex',
    flexDirection:'column',
    width:wp('35'),
    height:hp('25'),
    marginHorizontal:190
  },
  TextcountLimit:{
    display:'flex',
    textAlign:'right',
    fontSize:15,
    fontWeight:'400',
    color:"#979797",
  },
  line:{
    borderTopWidth:StyleSheet.hairlineWidth,
    borderColor:"#A4A0A0",
  },
})