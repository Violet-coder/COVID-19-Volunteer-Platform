import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Card';





export const  MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 100,
  padding: '0 0px',
  width: 300,
  fontSize:20,
  justifyContent:'center',


});


export const MyCard = styled(Card)(
    {
        justifyContent:'center'
    }
);

export const Container = styled(Box)(
    {
        textAlign: "center",
        justifyContent:'center',
        display:'flex',
        boxShadow:'none',
        backgroundColor: 'transparent',      
        marginTop:'20%',
        marginBottom:'20%',
        marginLeft:'10px',
        marginRight:'10px'

    }
)


// export default function StyledComponents() {
//   return <MyButton>Styled Components</MyButton>;
// }