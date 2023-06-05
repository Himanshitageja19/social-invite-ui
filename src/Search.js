import { InputGroupText, DropdownToggle,DropdownMenu, DropdownItem, InputGroup, Input  } from "reactstrap";
import {BsSearch, BsLightning, BsChat} from "react-icons/bs"
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";

export default function Search (props) {
    const [filter,setFilter] = useState(1)
    const handleChange = (event) => {
        setFilter(event.target.value);
      };

   return  (
    <div className="my-12">
    <InputGroup>
    <Input placeholder="Keyword, hashtag, pubkey or post ID"/>
    <InputGroupText className="cursor-pointer hover:bg-gray-100">
      <BsSearch/>
    </InputGroupText>
    <InputGroupText className="m-0 p-0">
    <Button className="m-0 p-0 hover:bg-gray-500">
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    className="p-0 m-0"
    value={filter}
    onChange={handleChange}
  >
    <MenuItem value={1}>All</MenuItem>
    <MenuItem value={2}>Posts</MenuItem>
    <MenuItem value={3}>Hashtags</MenuItem>
  </Select>
    </Button>
    </InputGroupText>

  </InputGroup>
    </div>
   
)}