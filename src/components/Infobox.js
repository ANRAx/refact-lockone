import React from 'react';
import './Infobox.css'
// Created a dummy Component here because we're this component doesn't need to know anything other than the fact that it's rendering the header

const Infobox = () => {
    return(
        <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow-3 grow">
            <h1 className="bg-light-green br3 br--top black-60 mv0 pv2 ph3 tc">Unlock the Box</h1>
            <div className="pa3 bt b--black-10 bg-near-white">
                <p className="f6 f5-ns lh-copy measure infobox-text">
                    The old paradigm of the classroom: lecturer poised confidently at the front of the room, gesturing
                    toward the presentation notes projected onto the whiteboard. Pages of anecdotes and explanations
                    pour from the speaker’s mouth, weaving a tapestry of data and formulations. Meanwhile, students stare
                    blankly, the foreheads of some meld into the tables, others doodle aimlessly or are swiping through
                    social media. This is “learning”.
                </p>
                <p className="f6 f5-ns lh-copy measure infobox-text">
                    But what if there was a surefire way to draw in our students? What if learning could be a game? Drawing 
                    on the principles of “gamification”, where learning occurs through navigating and solving a series of
                    challenges, We Connect The Dots in partnership with Nebula Academy
                    have created an “Unlock The Box” experience to teach the basics of Software Development. 
                </p>
                <p className="f6 f5-ns lh-copy measure infobox-text">
                    Working in groups, students will will have one hour to complete the gambit of locks. Meanwhile,
                    the students are scrambling, delegating, and researching in a flurry of activity as they try to open all the
                    locks before time runs out!
                </p>
            </div>
        </article>
    );
}

export default Infobox;