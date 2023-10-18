// data 
import { tweetsData } from "./data.js";

import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'


// global variables



// event listeners

document.addEventListener("click", function(e){

    if (e.target.dataset.like) {
        handleLikeClick (e.target.dataset.like)
    } 
    else if (e.target.dataset.retweet) {
        handleRetweetClick (e.target.dataset.retweet)
    }
    else if (e.target.dataset.reply) {
        handleRepliesClick (e.target.dataset.reply)
    }
    else if (e.target.dataset.tweet) {
        handleTweetClick()  
    }    
})

  
// functions

function handleLikeClick (tweetId) {
    // this was my own solution
    // for (let tweet of tweetsData) {
    //     if(tweet.uuid === tweetId){
    //             tweet.likes ++
    //             renderFeedHTML()
    //     }
    // }

    // this is the proper solution:
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if(targetTweetObj.isLiked){
        targetTweetObj.likes--
        
        // targetTweetObj.isLiked = false
    }else {
        targetTweetObj.likes++
        // targetTweetObj.isLiked = true
    }

    targetTweetObj.isLiked = !targetTweetObj.isLiked 
    //this is a shorthand way of flipping a boolean.
    // These two commented lines above, in the if/else statement, were the the other way of achieving the same goal.
    renderFeedHTML()
}

function handleRetweetClick (tweetId) {

    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if(!targetTweetObj.isRetweeted){
        targetTweetObj.retweets++
    }else {
        targetTweetObj.retweets--
    }

    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
        
    renderFeedHTML()

}

function handleRepliesClick (tweetId) {

    document.getElementById(`replies-${tweetId}`).classList.toggle("hidden")
   
}

function handleTweetClick() {

    const tweetInput = document.getElementById('tweet-input')

    if(tweetInput.value) {
        const mytweetObject = {
            handle: `@Jonas 💎`,
            profilePic: `images/troll.jpg`,
            likes: 0,
            retweets: 0,
            tweetText: `${tweetInput.value}`,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: `${uuidv4()}`,
        }
    
        tweetsData.unshift(mytweetObject)
        renderFeedHTML()
        tweetInput.value = ""
    }
    
}

function getFeedHtml() {

    let feedHTML = ""

    tweetsData.forEach(function(tweet){
        // let retweetedIconClass = ''
        // let likeIconClass = ''
        
        // if (tweet.isLiked){
        //     likeIconClass = 'liked'
        // }

        // if(tweet.isRetweeted) {
        //     retweetedIconClass = 'retweeted'
        // }

        const likeIconClass = tweet.isLiked ? 'liked': 'not-liked'

        const retweetedIconClass = tweet.isRetweeted ? 'retweeted' : 'not-retweeted'

        let repliesHtml = ''

        if(!tweet.replies.length == 0) {
            for (let replies of tweet.replies) {
                repliesHtml += `
                <div class="tweet-reply">
                <div class="tweet-inner">
                    <img src="${replies.profilePic}" class="profile-pic">
                        <div>
                            <p class="handle">${replies.handle}</p>
                            <p class="tweet-text">${replies.tweetText}</p>
                        </div>
                    </div>
                </div>
                `
            }
        }

        feedHTML += `

        <div class="tweet">
            <div class="tweet-inner">
                <img src="${tweet.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            <i class="fa-regular fa-solid fa-comment-dots" data-reply="${tweet.uuid}"></i>
                            ${tweet.replies.length}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-heart ${likeIconClass}" data-like="${tweet.uuid}"></i>
                            ${tweet.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet ${retweetedIconClass}" data-retweet="${tweet.uuid}"></i>
                            ${tweet.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
        </div>

        <div  id="replies-${tweet.uuid}" class="hidden">
            ${repliesHtml}
        </div> 
        `

    })
        
    return feedHTML

}

function renderFeedHTML() {

    document.getElementById('feed').innerHTML = getFeedHtml()

}

renderFeedHTML()








