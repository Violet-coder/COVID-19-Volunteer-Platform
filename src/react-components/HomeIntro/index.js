import React from 'react';

class HomeIntro extends React.Component {
    render(){
        return(
            <div id="fh5co-services" class="fh5co-bg-section border-bottom">
                <div class="container">
                    <div class="row row-pb-md">
                        <div class="col-md-8 col-md-offset-2 text-left animate-box" data-animate-effect="fadeInUp">
                            <div class="fh5co-heading">
                                <span>We help to conntect</span>
                                <h2>What  can you do with us?</h2>
                                <p>Let us help people affected by COVID-19 together.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-6 ">
                            <div class="feature-center animate-box" data-animate-effect="fadeInUp">
                                <span class="icon">
                                    <i class="icon-command"></i>
                                </span>
                                <h3>POST</h3>
                                <p>If you are an organization working to help people through this diffcult time, you can post opportunities on CONCEPT</p>
                                <strong>Post your opportunities and find the people you need</strong>

                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 ">
                            <div class="feature-center animate-box" data-animate-effect="fadeInUp">
                                <span class="icon">
                                    <i class="icon-eye"></i>
                                </span>
                                <h3>SEARCH</h3>
                                <p>If you are a volunteer looking for an opportunities to help people affected by COVID-19, you can find opportunities on CONCEPT</p>
                                <strong>Find your opportunities and help the people you care</strong>

                            </div>
                        </div>

                        <div class="clearfix visible-md-block"></div>

                    </div>
                </div>
            </div>
        )
    }

}

export default HomeIntro;