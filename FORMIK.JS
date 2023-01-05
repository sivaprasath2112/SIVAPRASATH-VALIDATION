import React from 'react'
import{ USEFORMIK}FROM "FORMIK"

Function CREATEUSER(){
    
    LETFORMIK=USEFORMIK({
        INITIALVALUES:{
            NAME:"",
            POSITION:"",
            AGE:""'
            OFFICE:"",
            STARTDATE:"",
            SALARY:"",
        }
    })

    return(
        <DIV CLASSNAME='CONTAINER'>
        <FORM ONSUBMIT={FORMIK.HANDLESUBMIT}></FORM>
            <DIV CLASSNAME='ROW'>
                <DIV CLASSNAME='COL-LG-6'>
                    <label>POSITION</label><</label>
                    <INPUT TYPE="TEXT" CLASSMATE='FORM-CONTROL'/>


                </DIV>
                <DIV CLASSNAME='COL-LG-6'>
                <label>EMAIL</label>
                <DIV CLASSNAME='CONTAINER'>
            <DIV CLASSNAME='ROW'>
                <DIV CLASSNAME='COL-LG-6'>
                    <label>AGE</label><</label>
                    <INPUT TYPE="TEXT" CLASSMATE='FORM-CONTROL'/>


                </DIV>
                <DIV CLASSNAME='COL-LG-6'>
                <label>AGE</label>
                <DIV></DIV>
                </DIV>
                <DIV CLASSNAME='COL-LG-6'>
                <label>STARTDATE</label>
                <DIV></DIV>
                <DIV CLASSNAME='COL-LG-6'>
                <label>SALARY</label>
                <DIV></DIV>



        </DIV>
    )
}
export default CREATEUSER