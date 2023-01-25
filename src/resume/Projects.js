import React from 'react';
import Section from "./util/section";
import SectionItem from './util/sectionItem';

export default function Projects(props) {
    const researchData = [
        {
            heading: <React.Fragment>lockfileparsergo {props.isPrinting || <a href="https://pkg.go.dev/github.com/ajvpot/lockfileparsergo" rel="nofollow"><img src="https://pkg.go.dev/badge/github.com/ajvpot/lockfileparsergo" alt="PkgGoDev" /></a>}</React.Fragment>,
            description: <React.Fragment>
                Built a Go library that embeds a V8 runtime with a JavaScript build toolchain and polyfills to enable using
                Snyk's lockfile parsing library in Go.
            </React.Fragment>
        },
        {
            heading: 'Mobile Video Streaming Solution',
            description: 'Designed hardware and firmware capable of bonding up to three LTE modems to reliably deliver mobile video streams and other telemetry data at up to 300 megabits per second.'
        }
    ];
    return (
        <Section title="Projects">
            {researchData.map((e) => (
                <SectionItem
                    {...e}
                />
            ))}
        </Section>
    )
}