import {useState} from 'react';
import axios from 'axios';

export default function ImageContainer(){
    

    const [searchKey,setSearchKey] = useState('');
    const [results,setResults] = useState();




    async function callApi(e){
            e.preventDefault();
            setSearchKey(e.target.value);
            

            // calling the api using axios  
            const data = axios.get(`/services/rest/?method=flickr.photos.search&text=${searchKey}&api_key=4aec095b2d22b455bd1f2bdd6d627234&per_page=20&page=1&format=json&nojsoncallback=1`)
            .then((resp)=> {setResults(resp.data.photos.photo)
            console.log(results)});
            
            if(data?.status==200){
                setResults(data.data.photos.photo);
                //updating the api response in a useState hook
                console.log(results);
            }
            else{
                console.log("an error occured");
            }
            
            // console.log((typeof(results))); 
    }


    const headerStyle={
        width:'100%',
        background:'gray',
        height:'75px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        alignContent:'center',
    }

    const inputStyle={
        width:'30%',
        height:'25px',
    }

    const textStyle={
        color:'white',
        fontSize:'30px'
    }

    const imagesStyle={
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',   
        alignContent:'center',
        alignItems:'center',
        justifyContent:'space-evenly',
    }

    const imageStyle={
        height:'300px',
        width:'275px',
        margin:'5px',

    }

    return(
        <div>
            
            <div style={headerStyle}>
                <div style={textStyle}>My Gallery</div>
                <input style={inputStyle} type='text' value={searchKey} placeholder='photos, people, groups' onChange={(e)=>{callApi(e)}}></input>
                <div style={{...textStyle, fontSize:'20px'}}>Login   SignUp</div>
            </div>
            <div style={imagesStyle}>
                {/* mapping through the results state to display each image */}
                {results!=undefined ? results?.map((onephoto, ind)=>{
                    // console.log("yaha se",photo);
                    // creating the image url from the data returned by the api
                    const img_url=`https://live.staticflickr.com/${onephoto.server}/${onephoto.id}_${onephoto.secret}_w.jpg`;
                    return <img style={imageStyle} src={img_url} key={ind} alt=""></img>                  
                })
                :<div></div>
            }
            </div>
        </div>
    )
}