import React, {useState} from 'react'
import ReviewList from '../components/ReviewList'
import {Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = styled.button `
  cursor: pointer;
  background-color: rgb(100, 0, 0);
  width: 300px;
  height: 150px;
  padding: 5px 15px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-size: 40px;
  font-family: "Lucida Console", "Courier New", monospace;

  overflow-x: hidden;
  float: left;
`

var companyName = <text>Microsoft</text>;

const MicrosoftPrep = () => {
    const [reviews, setReviews] = useState([])
  return (
    <div class='company-page'>
        <div class='company-header'>
          <h1>Interview Preparation Resources For {companyName}</h1>
        </div>
        <div class='split'>
          <div class='company-left'>
            <div class='company-section'>
              <h1>Youtube Playlist</h1>
            </div>
            <div class='company-section'>
              <h1>Our Coding Problems</h1>
              <body>
                Go to our <a href="/coding">practice coding problems</a> and select the "Sort By {companyName}" option.
              </body>
            </div>
          </div>
          <div class='company-right'>
            <div class='company-section'>
              <h1>LeetCode Problems</h1>
              <ul>
                <li><a href="https://leetcode.com/problem-list/top-microsoft-questions/">LeetCode's Overall List</a></li>
                <li><a href="https://leetcode.com/problems/two-sum">Two Sum</a></li>
                <li><a href="https://leetcode.com/problems/add-two-numbers">Add Two Numbers</a></li>
                <li><a href="https://leetcode.com/problems/longest-substring-without-repeating-characters">Longest Substring Without Repeating Characters</a></li>
                <li><a href="https://leetcode.com/problems/regular-expression-matching">Regular Expression Matching</a></li>
              </ul>
            </div>
            <div class='company-section'>
              <h1>HackerRank Links</h1>
              <ul>
                <li><a href="https://www.hackerrank.com/blog/how-to-crack-microsoft-interview/">Blog: How To Crack The Microsoft Interview</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="show-reviews">
          <ReviewList reviews = {reviews} setReviews = {setReviews}/>
        </div>
    </div>
  )
}

export default MicrosoftPrep