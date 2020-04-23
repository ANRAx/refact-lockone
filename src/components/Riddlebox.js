import React from 'react';
// Created a dummy Component here because we're this component doesn't need to know anything other than the fact that it's rendering the header

const Riddlebox = () => {
    return (
        <div>
            <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow-4">
                <h1 className="f4 bg-light-green br3 br--top black-60 mv0 pv2 ph3 tc">Challenge 1</h1>
                <div className="pa3 bt b--black-10 bg-near-white">
                    <p className="f6 f5-ns lh-copy measure">
                    Read the hints below and click <a href="www.google.com">here</a> to work through your first challenge!
                    </p>
                    <ol className="f6 f5-ns lh-copy measure">
                        <li>Hint 1</li>
                        <li>Hint 2</li>
                        <li>Hint 3</li>
                    </ol>
                </div>
            </article>
            <article className="pa3 pa5-ns">
                <ul className="list pl0 ml0 center mw4 ba b--white br2 bg-white">
                    <li className="tc mv1 pv3 bb b--black grow bg-green">Lock One</li>
                    <li className="tc mv1 pv3 bb b--black grow bg-yellow">Lock Two</li>
                    <li className="tc mv1 pv3 bb b--black grow bg-orange">Lock Three</li>
                    <li className="tc mv1 pv3 bb b--black grow bg-red">Lock Four</li>
                </ul>
            </article>
        </div>
    );
}

export default Riddlebox;