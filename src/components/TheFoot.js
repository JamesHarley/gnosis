import React, { Component } from 'react';

class TheFoot extends Component {
    render() {
        return (
            <div id="TheFoot">
                <a href="https://research.gnosisdevelopment.com" >Gnosis </a> - the knowledge gained from experience, <br /> not theory or estimation
                <p>
                    <a href="https://github.com/JamesHarley" target="_blank"><i class="fab fa-github-square"></i> GitHub </a>    
                    <a href="https://play.google.com/store/apps/developer?id=Gnosis+Development" target="_blank"><i class="fab fa-google-play"></i> GooglePlay </a>  
                    <a href="https://www.linkedin.com/in/james-harley-gnosis/" target="_blank"><i class="fab fa-linkedin"></i> Linkedin</a>
                </p>
                <p><a href="https://gnosisdevelopment.formstack.com/forms/bug_report" target="_blank">Found a bug?</a></p>
            </div>

        );
    }
}

export default TheFoot;
