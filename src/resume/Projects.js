import React from 'react';
import Section from "./util/section";
import SectionItem from './util/sectionItem';

export default function Projects(props) {
    const researchData = [
        {
            heading: <React.Fragment>lockfileparsergo {props.isPrinting || <a href="https://pkg.go.dev/github.com/ajvpot/lockfileparsergo" rel="nofollow" style={{float: 'right'}}><img src="https://pkg.go.dev/badge/github.com/ajvpot/lockfileparsergo" alt="PkgGoDev" /></a>}</React.Fragment>,
            description: <React.Fragment>
                Go library that embeds a V8 runtime with a JavaScript build toolchain and polyfills to enable using
                Snyk's lockfile parsing library in Go.
            </React.Fragment>
        },
        {
            heading: <React.Fragment>vanderbot {props.isPrinting || <a href="https://pkg.go.dev/github.com/ajvpot/vanderbot" rel="nofollow" style={{float: 'right'}}><img src="https://pkg.go.dev/badge/github.com/ajvpot/lockfileparsergo" alt="PkgGoDev" /></a>}</React.Fragment>,
            description: <React.Fragment>
                Discord utility bot for website analysis, multitrack recording, multitrack local audio output, and more. Add command modules with go.uber.org/fx.
            </React.Fragment>
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