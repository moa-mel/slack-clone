import React from 'react'
import styled from 'styled-components';
import { AddCircleOutline, Add } from '@mui/icons-material';
import {sidebarItemsData} from '../Data/SidebarData';

const Sidebar = () => {
  return (
    <Container>
     <WorkspaceContainer>
     <Name>
       Olaitan
     </Name>
     <NewMessage>
      <AddCircleOutline/>
     </NewMessage>
     </WorkspaceContainer>
     <MainChannels>
     { 
      sidebarItemsData?.map(item => (
        <MainChannelItem>
          {item.icon}
          {item.text}
        </MainChannelItem>
      ))
     }
     </MainChannels>
     <ChannelsContainer>
     <NewChannelContainer>
      <div>
       Channels
      </div>
      <Add/>
     </NewChannelContainer>
     <ChannelsList>
     <Channel>
     # Channel 1
     </Channel>
     <Channel>
     # Channel 2
     </Channel>
     </ChannelsList>
     </ChannelsContainer>
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
   background: #3F0E40;
   color: white;
`
const WorkspaceContainer = styled.div`
   color: white;
   height: 64px;
   display: flex;
   align-items: center;
   padding-left: 19px;
   justify-content: space-between;
   border-bottom: 1px solid #532753;
`
const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3F0E40;
  fill: #3F0E40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`
const Name = styled.div`

`
const MainChannels = styled.div`
  padding-top:20px;
`
const MainChannelItem = styled.div`
   color: rgb(188, 171, 188);
   display: grid;
   grid-template-columns: 15% auto;
   height: 28px;
   align-items: center;
   padding-left: 19px;
   cursor: pointer;
   :hover {
    background: #350036;
   }
   `
   const ChannelsContainer = styled.div`
   color: rgb(188, 171, 188);
   margin-top: 10px;
`
const NewChannelContainer = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     height: 28px;
     padding-left: 19px;
     padding-right: 12px;
`
const ChannelsList = styled.div`

`
const Channel = styled.div`
   height: 20px;
   display: flex;
   align-items: center;
   padding-left: 19px;
   cursor: pointer;
   :hover {
    background: #350036;
   }
`