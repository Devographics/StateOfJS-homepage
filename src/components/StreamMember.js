import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

const StreamMember = ({ name, twitterName, bio }) => (
  <Member className="Stream__Member">
    <MemberImage className="Stream__Member__Image">
      <a href={`https://twitter.com/${twitterName}`}>
        <img alt={name} src={`/images/stream/${twitterName}.jpg`} />
      </a>
    </MemberImage>
    <MemberName className="Stream__Member__Name">
      <a href={`https://twitter.com/${twitterName}`}>{name}</a>
    </MemberName>
    <MemberBio className="Stream__Member__Bio">
      <ReactMarkdown source={bio} />
    </MemberBio>
  </Member>
)

const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MemberImage = styled.div`
  border-radius: 100%;
  height: 100px;
  width: 100px;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
  }
`
const MemberName = styled.h3`
  margin-bottom: 5px;
`
const MemberBio = styled.div`
  text-align: center;
`

export default StreamMember
