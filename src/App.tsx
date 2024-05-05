import React , { useState } from 'react'
import './App.css';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';



const marks = [
  { value: 5, label: <><strong>$5</strong><br />500 credits</>, position: 'end' },
  { value: 10, label: <><strong>$10</strong><br />1200 credits</>, position: 'end' },
  { value: 15, label: <><strong>$15</strong><br />1700 credits</>, position: 'end' },
  { value: 20, label: <><strong>$20</strong><br />2500 credits</>, position: 'end' },
  { value: 25, label: <><strong>$25</strong><br />3900 credits</>, position: 'end' },
  { value: 30, label: <><strong>$30</strong><br />5000 credits</>, position: 'end' },
];




const App = () => {

  // button
  const ColorButton = styled(Button) ({
    color:'#fff',
    backgroundColor: '#9747FF',
    padding:'0.7rem',
    borderRadius:'0.70rem',
    textTransform:'none',
    fontWeight:'bold',
    letterSpacing:'0.8px',
    '&:hover': {
      backgroundColor:'#ab6bff' ,
    },
  });

 //Custom slider
  const PrettoSlider = styled(Slider)({
    color: '#EEEEEE',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
      color:'#9747FF',
    },
    '& .MuiSlider-thumb': {
      height: 20,
      width: 20,
      backgroundColor: '#fff',
      border: '5px solid #9747FF',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&::before': {
        display: 'none',
      },
    },
    
  });

  //switch button
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#24AE9D',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));


  const [sliderValue, setSliderValue] = useState<number>(10);
  const [switchChecked, setSwitchChecked] = useState<boolean>(true);

  //slide change logic
  const handleSliderChange = (event:Event, newValue:number | number[]) => {
     if(switchChecked){
      return;
     }
    setSliderValue(newValue as number);
  };

  const handleSwitchChange = () => {
    setSwitchChecked(!switchChecked);
    if (!switchChecked) {
      setSliderValue(10); 
    }
    else{
      setSliderValue(5);
    }
  };

  const handleButtonClick = () => {
    switch (sliderValue) {
      case 5: return console.log('500 credits');
      case 10: return console.log('1200 credits');
      case 15: return console.log('1700 credits');
      case 20: return console.log('2500 credits');
      case 25: return console.log('3900 credits');
      case 30: return console.log('5000 credits');
        
      default:
        break;
    }
    
  };




  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden bg-black' >
        
        <div className='w-full overflow-hidden h-full'>
           
           {/* Slider Section */}
           
           <div className='w-[990px] h-[330px] rounded-xl bg-[#fff] pt-[1rem] pb-[1rem] px-[2rem] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]'>
                 <div className='w-full pt-[1rem]'>
                    <div>
                       <div className='flex gap-3 items-center '>
                          <p className='font-semibold text-[20px] tracking-wider '>Setup Auto Top-up</p>
                          <AntSwitch checked={switchChecked} onChange={handleSwitchChange} />
                       </div>
                        
                        
                    </div>
                   
                    <p className='pt-[0.5rem] leading-[24px] text-[#7B7B7B] font-light'>Once the credit goes below a minimum thresold <span className='text-[#9747FF] font-bold'>50</span> , we will auto-purchase <span className='font-bold text-[#9747FF]'>1200 credits</span> credits and add them to your account . <span className='font-semibold underline'>Learn more</span> </p>
                 </div>

                 <div className='p-2 px-6'>
                    <PrettoSlider
                      aria-label="pretto slider"
                      value={sliderValue}
                      onChange={handleSliderChange}
                      step={null}
                      marks={marks}
                      min={5}
                      max={30}
                    
                     />
                
                 </div>


                 <div className='mt-[3rem]'>
                    <ColorButton variant="text" onClick={handleButtonClick}>
                       Confirm auto-purchase
                    </ColorButton>

                 </div>
             
             


           </div>

        </div>
           

    </div>
  )
}

export default App