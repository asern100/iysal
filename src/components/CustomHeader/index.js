import { display, fontWeight } from "@material-ui/system";
import React, { useLayoutEffect , useState} from "react";
import { Button, Container } from 'reactstrap';
import vid from '../../images/custom/log1.png'



function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

const CustomHeader = () => {
    
    
      
      
    const [width, height] = useWindowSize();

    return (
        
     <div  style={{
        position: 'relative',
        height: height - 90,
        width: width - 140,
        margin: "0 auto",
        overflow: 'hidden',
        backgroundColor: 'orange',
        
     }}>
        <img 
            style={{
                position: 'absolute',
                height: '100%',
                width:'100%',
                left:0,
                
            }}
            src={vid}
         />
        <div style={{
            position: 'absolute',
            height: '100%',
            width:'100%',
            left:0,
            overflow: 'hidden',
            backgroundColor: 'black',
            opacity:.8,
            zIndex:1
        }}></div>

        
        <div style={{
            position: 'absolute',
            height: '100%',
            width:'100%',
            left:0,
            overflow: 'hidden',
            boxShadow:` 10px 10px 206px 0px rgba(255,171,2,0.75) inset`,
            
            zIndex:2
            
        }}></div>

        <div style={{
            position: 'absolute',
            height: '100%',
            width:'100%',
            left:0,
            overflow: 'hidden',
            zIndex:4,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            padding:"10px",
            textAlign:"center"
            
        }}>
            <span style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color:"#fff",
                lineHeight: "3.5rem",
                margin: "10px 0 20px",
                display:"block",
                
            }}>
                Optimisez votre supply chain<br/> avec l'automatisation <br/>
                intelligente <br/>
                <Button style={{
                      backgroundColor:"orange",
                      color:"rgba(255, 118, 6, 0.9)",
                      color:"black",
                      fontWeight:"bold",
                      height:"60px",
                      border:"none",
                      borderRadius:"5px",
                      marginTop:"15px",
                  }}
                  
                  >
                   plus d'informations
                  </Button>
            </span>
            
                  
            
        </div>


     </div>
     
    );
  }


export default CustomHeader;
