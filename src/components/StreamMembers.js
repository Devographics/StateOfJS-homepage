import React from "react"
import styled from "styled-components"
import StreamMember from "./StreamMember"
import mq from "../theme/mq"

const StreamMembers = ({ members }) => (
  <Members className="Stream__Member">
    {members.map(member => (
      <StreamMember {...member} key={member.name} />
    ))}
  </Members>
)

const Members = styled.div`
  @media ${mq.small} {
    .Stream__Member {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  @media ${mq.mediumLarge} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
  }
  padding: 20px;
  border: 1px solid #ffffff33;
  margin-bottom: 20px;
`

export default StreamMembers
