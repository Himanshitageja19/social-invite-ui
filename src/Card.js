import { Card, CardBody, CardText,CardImg, CardTitle, Button  } from "reactstrap";
import {BsFillKeyFill, BsLightning, BsChat} from "react-icons/bs"
import {AiOutlineLike,AiOutlineRetweet} from "react-icons/ai"
import {MdOutlineAddReaction} from "react-icons/md"
import Badge from '@mui/material/Badge';
import parser from 'html-react-parser'
import { styled } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  })); 

  const actions = [
    { icon: <BsChat />, name: 'chat' },
    { icon: <AiOutlineRetweet />, name: 'Reply' },
    { icon: <Badge className="p-0" color="primary" anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
    }}><AiOutlineLike /></Badge>, name: 'Share' },
  ];

function Post(props) {
    function contentParser(text){
        var repl = text.replace(/#(\w+)/g, '<a href="#">#$1</a>');
        var replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;

        return repl.replace(replacePattern1,'<a href="$1" target="_blank">$1</a>');
    }

  return (<>
    <Card className="border-white text-left" >
      <CardBody>
        <CardTitle className="text-sm">
        <CardImg
        className="inline-block mr-4"
      alt="Card image cap"
      src="https://picsum.photos/900/180"
      style={{
        height: 30,
        width: 30
      }}
      top
    />
          <BsFillKeyFill className="inline-block"/> <span className="inline-block cursor-pointer">{props.pubkey}</span>
        </CardTitle>
        <CardText>
          {parser(contentParser(props.content))}
        </CardText>
        <CardText>
        <Badge 
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            badgeContent={props.todayReactionCount} 
            color="primary"
            sx={{"z-index":5000}}
        >
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={<MdOutlineAddReaction />}
          direction="right"
        //   style={{width:"30px",height:"30px"}}
        >
          {actions.map((action) => (
            
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle="45"
            >
            </SpeedDialAction>
          ))}
        </StyledSpeedDial>
        </Badge>
            {/* <MdOutlineAddReaction className="inline-block mr-1"/>
            <span className="inline-block text-sm mr-2">10K</span>
            <BsChat className="inline-block mr-1"></BsChat> 
            <span className="inline-block text-sm mr-2">36</span>
            <AiOutlineRetweet className="inline-block mr-1"></AiOutlineRetweet> 
            <span className="inline-block text-sm mr-2">87</span>
            <AiOutlineLike className="inline-block mr-1"></AiOutlineLike> 
            <span className="inline-block text-sm">101</span> */}
            <small className="text-muted ml-4">
             {new Date(Number(props.created_at)*1000).toTimeString()} 
          </small>
        </CardText>
      </CardBody>
    </Card>
  </>
  );
}
export default Post;

