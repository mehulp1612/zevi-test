import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';


export default function Container (props){


    const isTabletOrMobile = useMediaQuery({ query: "(min-width: 825px)" });


    // states for maintaining user selections
    const [small, setSmall]=useState(isTabletOrMobile);
    const [bold, setBold] = useState(false);
    const [italics, setItalics] = useState(false);
    const [underLine, setUnderLine] = useState(false);
    const [textSize, setTextSize] = useState('15');
    const [color,setColor] = useState('#000000');

    // using the use effect hook to get the scrren size of the device
    useEffect(()=>{
        setSmall(isTabletOrMobile);

        // console.log(small);

    },[isTabletOrMobile]);

    const container={
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        margin:'2%',
        // border:'solid 2px black',
        width:'90vw',
        justifyContent:'space-between',
        // border:'solid 2px black',
        // height:'100%'
    }
    const buttonscontainer={
        width:small?'45%':'95%',// conditional styling based on users choice
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        padding:'10px 25px 10px 10px',
        border:'solid 0.5px black', 
        marginTop:'10px'
    }

    const textContainer={    
        padding:'10px 10px 10px 25px',
        border:'solid 0.5px black',
        width:small?'45%':'95%',// setting width according to device width
        marginTop:'10px',
        fontSize:`${textSize||15}px`,// conditional styling based on users choice
        fontWeight:bold?'bold':'normal',// conditional styling based on users choice
        fontStyle:italics?'italic':'normal',// conditional styling based on users choice
        textDecoration:underLine?'underline':'none',// conditional styling based on users choice
        color:color,
        // marginLeft:'10px',
    }

    const buttonStyle={
        margin:'5px',
        width:'auto',
        cursor:'pointer',
    }

    const inputStyle={
        textAlign:'center',
        margin:'5px',
        maxWidth:'100px'
    }

    return(
        <div style={container}>
            <div style={buttonscontainer}>
                <button style={buttonStyle} onClick={(e)=>{setBold(!bold)}}>Bold</button>
                <button style={buttonStyle} onClick={(e)=>{setItalics(!italics)}}>Italic</button>
                <button style={buttonStyle} onClick={(e)=>{setUnderLine(!underLine)}}>Underline</button>
                <input style={inputStyle} type='number' value={textSize} min='5' max='50'  onChange = {(e)=>{setTextSize(e.target.value)}} placeholder='Text Size'></input>
                <input style={inputStyle} type='color' value={color} onChange = {(e)=>{setColor(e.target.value)}} placeholder='Text Color'></input>
            </div>
            <div style={textContainer}>
                {props.text}
            </div>
        </div>
    )
}