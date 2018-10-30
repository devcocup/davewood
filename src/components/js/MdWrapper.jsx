import React, { Component } from 'react';
import GQL from './GQLQuery';

class MdWrapper extends Component {
    render() {
        const md = GQL.data.allMarkdownRemark;
        console.log(GQL);
        return (
            <div className="md-wrapper">
                <GQL>
                    <div dangerouslySetInnerHTML={{ __html: md.html }} />
                </GQL>
            </div>
        )
    }
}
export default MdWrapper;